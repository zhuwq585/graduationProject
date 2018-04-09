<template>
	<div class=''>
		<el-collapse v-model="show">
			<el-collapse-item title="活动列表" name='1'>
				<activity-item></activity-item>
			</el-collapse-item>
			<el-collapse-item title="新建活动">
				<add-activity></add-activity>
			</el-collapse-item>
		</el-collapse>
	</div>
</template>
<script>
 import addActivity from "@/components/mgr/activity/addActivity.vue"
 import activityItem from "@/components/mgr/activity/mgrActivityItem.vue"
 export default {
	 data(){
		 return{
			 show: ['1']
		 }
	 },
	 components: {
		 'add-activity': addActivity,
		 'activity-item': activityItem
	 }
 }
</script>
<style lang="scss">

</style>
