<template>
<el-collapse v-model="show">
	<el-collapse-item title="资讯列表" name="1">
		<news-item v-for="(item, key) in newsList" v-bind:data='item' v-bind:key='key'></news-item>
	</el-collapse-item>
	<el-collapse-item title="添加资讯">
		<add-news v-on:newsSubmited="getNewsList"></add-news>
	</el-collapse-item>
</el-collapse>
</template>
<script>
import $ from 'jquery'
import addNews from '@/components/mgr/news/addNews.vue'
import newsItem from '@/components/mgr/news/mgrNewsItem.vue'
export default {
 components: {
	 'add-news': addNews,
	 'news-item': newsItem
 },
 data(){
	 return{
		 show: ['1'],
		 newsList: []
	 }
 },
 methods: {
	 getNewsList: function(){
		 var vueObj = this;
		 $.ajax({
			 url: 'http://127.0.0.1:8082/getNewsList',
			 success: function(response){
				 vueObj.newsList = response;
			 }
		 });
	 }
 },
 created: function(){
	 this.getNewsList();
 }
}
</script>
<style lang="scss">

</style>
