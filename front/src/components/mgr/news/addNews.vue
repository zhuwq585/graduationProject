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
			<el-col :span="16">
				<form role="form" id="form" enctype="multipart/form-data">
					<input type="hidden" name="policy" value="">
			    <input type="hidden" name="signature" value="">
					<input id="img" type="file" name="img">
				</form>
			</el-col>
			<el-col :span="8">
				<el-button type="primary" @click="upload">上传图片</el-button>
				<el-button type="primary" @click="unDo">撤销</el-button>
			</el-col>
		</el-row>
		<el-row>
			<img id="imgPreview" src="" alt="">
		</el-row>
		<el-row>
			<el-button type="primary" @click="submitNews">添加资讯</el-button>
			<el-button type="primary" @click="clear">清空</el-button>
		</el-row>
	</div>
</template>
<script>
	import $ from 'jquery'
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
				// var newsData = this.newsData,
				// 		vueObj = this;
				// $.ajax({
				// 	url: 'http://127.0.0.1:8082/addNews',
				// 	type: 'post',
				// 	data: this.newsData,
				// 	success: function(response){
				// 		console.log(response);
				// 		vueObj.$emit("newsSubmited");
				// 	}
				// })
			},
			upload: function () {
				if(!$("#img")[0].value){
					return
				}
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
								$("#imgPreview")[0].src = responseStr.url;
								vueObj.newsData.img = responseStr.url;
            }
        });
			},
			unDo: function(){
				this.newsData.img = undefined;
				$("#imgPreview")[0].src = undefined;
			},
			clear: function(){
				this.newsData = {
					title: '',
					img: '',
	        content: ''
				};
				$("#imgPreview")[0].src = undefined;
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
	#imgPreview{
		width: 90%;
		height: 200px;
	}
</style>
