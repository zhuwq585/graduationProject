<template>
<el-collapse v-model="show">
	<el-collapse-item title="资讯列表" name="1">
		<news-item></news-item>
	</el-collapse-item>
	<el-collapse-item title="添加资讯">
		<add-news></add-news>
	</el-collapse-item>
</el-collapse>
</template>
<script>
import addNews from '@/components/mgr/news/addNews.vue'
import newsItem from '@/components/mgr/news/mgrNewsItem.vue'
export default {
 components: {
	 'add-news': addNews,
	 'news-item': newsItem
 },
 data(){
	 return{
		 show: ['1']
	 }
 }
}
</script>
<style lang="scss">

</style>
