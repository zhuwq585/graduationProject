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
			<form role="form" id="form" enctype="multipart/form-data">
				<input type="hidden" name="policy" value="">
		    <input type="hidden" name="signature" value="">
				<input id="img" type="file" name="img">
			</form>
			<img id="imgPreview" src="" alt="">
			<el-button type="primary" @click="upload">上传</el-button>
			<el-button type="primary" @click="submitNews">添加资讯</el-button>
		</el-row>
	</div>
</template>
<script>
	import $ from 'jquery'
	import axios from 'axios'
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
        },
				imgPath : undefined
      }
    },
    methods: {
			submitNews: function(){
				console.log(this.newsData);
			},
			upload: function () {
				var formData = new FormData($("#form")[0]),
						vueObj = this;
				$.ajax({
            url: "http://127.0.0.1:8082/imgUpload",
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function (responseStr) {
								console.log(responseStr);
								$("#imgPreview").attr("src",responseStr.url);
								vueObj.newsData.img = responseStr.url;
            }
        });
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
