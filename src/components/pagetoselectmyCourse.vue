<template>
	<div>
		<top></top>
		<div style="height: 120px;"></div>
		<div style="align-content: center;">
			<el-table v-loading="loading" :data="mycourse" style="width: 550px; margin:auto">
				<el-table-column prop="name" label="姓名" width="180">
				</el-table-column>
				<el-table-column prop="cname" label="课程名" width="180">
				</el-table-column>
				<el-table-column prop="grade" label="成绩" width="180">
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
				
				mycourse: []
			};
		},
		created() {
			this.selectmyCourse()
		},
		components: {
			top
		},
		methods: {
			selectmyCourse: function() {
				var that = this;
				axios.post("/scCourseGrade").then(function(result) {
					console.log(result);
					that.mycourse = result.data;
				});
			}
			
		}

	}
</script>
