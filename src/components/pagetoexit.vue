<template>
	<el-row>
		<div style="height: 60px;"></div>
		<div style="align-content: center;">
			<span style="font-family: '华文行楷';"><h1>学生信息管理系统</h1></span>
			<hr/>
			<div class="grid-content bg-purple" style="width: 300px; margin: auto; ">

				<el-form :label-position="labelPosition"  :model="formLabelAlign">
					<el-form-item style="font-family: '华文行楷'; font-size: 20px;" label="用户名:">
						<el-input v-model="user.id"></el-input>
					</el-form-item>
					<el-form-item style="font-family: '华文行楷'; font-size: 20px;" label="密码:">
						<el-input v-model="user.password"></el-input>
					</el-form-item>
					<el-button type="info" @click="login()" plain><span style="font-family: '华文行楷'; font-size: 18px;">登陆</span></el-button>
					<el-button type="info" @click="pagetoregister()" plain><span style="font-family: '华文行楷'; font-size: 18px;">注册</span></el-button>
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
					id: '',
					password: ''
				}
			};
		},
		created(){
			this.clearSession()
		},
		methods:{
			clearSession:function(){
				var that=this;
				axios.post("/exit").then(function(result){
					console.log(result);
					that.$router.push({
						name: 'pagetologin'
					})
				});
			},
			
		}
		
	}
</script>
