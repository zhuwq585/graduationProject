<template>
	<div class='contentBox'>
		<el-row>
			<el-col :span="8">标题：</el-col>
			<el-col :span="16">
				<el-input
				  placeholder="请输入内容"
				  v-model="newsData.title"
				  clearable>
				</el-input>
			</el-col>
		</el-row>
		<el-row>
			<el-col>
				<quill-editor v-model="newsData.content"
										ref="myQuillEditor"
										:options="editorOption">
				</quill-editor>
			</el-col>
		</el-row>
		<el-row>
			<el-button type="primary" @click="submitNews">添加资讯</el-button>
		</el-row>
	</div>
</template>
<script>
  export default {
    data () {
      return {
				newsData: {
					title: '',
					img: '',
	        content: ''
				},
        editorOption: {
					theme: 'snow',
					placeholder: '请编辑活动详情'
        }
      }
    },
    methods: {
			submitNews: function(){
				console.log(this.newsData);
			}
    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill
      }
    }
  }
</script>
<style lang="scss">

</style>
