<template>
	<div>
		<top></top>

		<div style="height: 120px;"></div>
		<div style="align-content: center;">
			<div class="grid-content bg-purple" style="width: 400px; margin: auto; ">

				<el-form ref="form" :model="user" label-width="80px">
					<el-form-item label="id" v-if="false">
						<el-input v-model="user.id"></el-input>
					</el-form-item>
					<el-form-item label="学号">
						<el-input v-model="user.snum"></el-input>
					</el-form-item>
					<el-form-item label="用户名">
						<el-input v-model="user.username"></el-input>
					</el-form-item>
					<el-form-item label="新密码">
						<el-input type="password" v-model="password"></el-input>
					</el-form-item>

					<el-form-item>
						<el-button type="primary" @click="updateuser">确认修改</el-button>

					</el-form-item>

				</el-form>
			</div>
		</div>

	</div>





</template>


<script>
	import top from "./top.vue";
	import axios from "axios";
	import qs from 'qs';
	export default {
		data() {
			return {
				'user': {
					id: "",
					snum: "",
					username: "",
					password: ""
				},
				password: "",
				show: true
			};
		},
		components: {
			top
		},
		created() {
			this.updatepageData()
		},
		methods: {
			updatepageData: function() {

				var that = this;
				axios.post("/selectUserById", qs.stringify(this.user, {
					headers: {
						'content-type': 'application/x-www-form-urlencoded'
					}
				})).then(function(result) {
					that.user = result.data;
					console.log(result);
				});

			},
			updateuser: function() {
				var tmp = {};
				tmp.id = this.user.id;
				tmp.snum = this.user.snum;
				tmp.username = this.user.username;
				//可以加上原密码验证部分
				tmp.password = this.password;
				var that = this;
				axios.post("/updateUser", qs.stringify(tmp, {
					headers: {
						'content-type': 'application/x-www-form-urlencoded'
					}
				})).then(function(result) {
						if (result.data == "修改成功!") {
							alert(result.data)
							that.$router.push({
								name: 'pagetologin'
							})
					} else {
						alert(result.data)
					}
					console.log(result);
				});


		}


	}
	}
</script>
