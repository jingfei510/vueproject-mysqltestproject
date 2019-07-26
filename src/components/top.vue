<template>

	<div class="grid-content bg-purple-dark">
		<div class="line"></div>
		<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
		 background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
			<el-menu-item index="1" @click="student()">首页</el-menu-item>
			<el-submenu index="2">
				<template slot="title">用户</template>
				<el-menu-item index="2-1" @click="pagetoselectUser()">我的信息</el-menu-item>
				<el-menu-item index="2-2" @click="pagetoselectmyCourse()">课程成绩</el-menu-item>
				<el-menu-item index="2-3" @click="pagetoupdateUser()">修改密码</el-menu-item>
				<el-submenu index="2-4">
					<template slot="title">待开发</template>
					<el-menu-item index="2-4-1">Java</el-menu-item>
					<el-menu-item index="2-4-2">Python</el-menu-item>
					<el-menu-item index="2-4-3">JavaScript</el-menu-item>
				</el-submenu>
			</el-submenu>
			<el-submenu index="3">
				<template slot="title">管理员</template>
				<el-menu-item index="3-1" @click="pagetoselectAllStudent()">查询全部学生信息</el-menu-item>
				<el-menu-item index="3-2" @click="pagetoselectAllUsers()">查询全部用户信息</el-menu-item>
				<el-menu-item index="3-3" @click="pagetoselectAllCourse()">查询全部课程信息</el-menu-item>
			</el-submenu>
			<el-menu-item index="5" style="float: right; margin-right: 100px; " @click="pagetologin()">{{username}}</el-menu-item>
			<el-menu-item index="6" style="float: right; " @click="pagetoexit()">退出</el-menu-item>
		</el-menu>
	</div>



</template>


<script>
	import axios from "axios";
	import qs from 'qs';
	export default {
		props: {
			username: String,

		},

		data() {
			return {
				activeIndex2: '1',
				name: '',
			};
		},
		created() {
			if(name==''){
				/* 页面跳转，另一个父组件引用此组件，name信息丢失 */
				this.name = this.username;
				console.log(this.name);
			}
			
		},
		methods: {
			student: function() {
				this.$router.push({
					name: 'student'
				})
			},
			pagetoselectmyCourse: function() {
				this.$router.push({
					name: 'pagetoselectmyCourse'
				})
			},
			pagetoselectAllCourse: function() {
				this.$router.push({
					name: 'pagetoselectAllCourse'
				})
			},
			pagetoselectUser: function() {
				this.$router.push({
					name: 'pagetoselectUser'
				})
			},
			pagetoupdateUser: function() {
				this.$router.push({
					name: 'pagetoupdateUser'
				})
			},
			pagetoselectAllUsers: function() {
				this.$router.push({
					name: 'pagetoselectAllUsers'
				})
			},
			pagetoselectAllStudent: function() {
				this.$router.push({
					name: 'pagetoselectAllStudent'
				})

			},
			pagetologin: function() {
				this.$router.push({
					name: 'pagetologin'
				})
			},
			pagetoexit: function() {
				this.$router.push({
					name: 'pagetoexit'
				})
			},
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}


		}

	}
</script>
