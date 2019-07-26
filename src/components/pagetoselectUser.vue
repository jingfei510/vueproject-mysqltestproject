<template>
	<div>
		<top></top>
	
		<div style="height: 120px;"></div>
		<div style="align-content: center;">
			<el-table v-loading="loading" :data="tusers" style="width: 800px; margin:auto">
				<el-table-column prop="id" label="id" width="180" v-if="show">
				</el-table-column>
				<el-table-column prop="snum" label="学号" width="180">
				</el-table-column>
				<el-table-column prop="username" label="用户名" width="180">
				</el-table-column>
				<el-table-column prop="password" label="密码" width="180">
				</el-table-column>
			</el-table>

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
				show:false,
				tusers: []
			};
		},
		components: {
			top
		},
		created() {
			this.selectUser()
		},
		methods: {
			/* 查询个人信息 */
			selectUser: function() {
				var that = this;
				axios.post("/selectUser").then(function(result) {
					that.tusers = result.data;
				});

			}
			


		}

	}
</script>
