<template>
	<el-row>
		<div style="height: 60px;"></div>
		<div style="align-content: center;">
			<span style="font-family: '华文行楷';">
				<h1>学生信息管理系统</h1>
			</span>
			<hr />
			<div class="grid-content bg-purple" style="width: 300px; margin: auto; ">

				<el-form :label-position="labelPosition" :model="formLabelAlign">
					<el-form-item style="font-family: '华文行楷'; font-size: 20px;" label="学号:">
						<el-input v-model="user.snum"></el-input>
					</el-form-item>
					<el-form-item style="font-family: '华文行楷'; font-size: 20px;" label="昵称:">
						<el-input v-model="user.username"></el-input>
					</el-form-item>
					<el-form-item style="font-family: '华文行楷'; font-size: 20px;" label="密码:">
						<el-input v-model="user.password"></el-input>
					</el-form-item>
					<el-button type="info" @click="register()" plain><span style="font-family: '华文行楷'; font-size: 18px;">注册 &nbsp; </span></el-button>
					<span style="font-family: '华文行楷'; font-size: 15px;"><a href="/dist/index.html#/pagetologin">已有账号,去登陆...</a></span>
				</el-form>
			</div>
		</div>
	</el-row>
</template>
<script>
	import axios from "axios";
	import qs from 'qs';
	export default {
		data() {
			return {
				labelPosition: 'left',
				user: {
					snum: '',
					username: '',
					password: ''
				},
				status:'',
				error:''
			};
		},
		methods: {
			register: function() {
				var that = this;
				axios.post("/register", qs.stringify(this.user, {
					headers: {
						'content-type': 'application/x-www-form-urlencoded'
					}
				})).then(function(result) {
					that.status = result;
					console.log(result);
					if (result.data) {
						alert("注册成功！")
						that.$router.push({
							name: 'pagetologin'
						})
					} else {
						alert("用户名或id已存在,请换一个试试")
						this.$router.push({
							name: 'pagetoregister'
						})
					}

				});
			}
		}
	}
</script>
