<template>
	<div class='contentBox'>
		<el-row>
			<el-col :span="4">活动标题</el-col>
			<el-col :span="8">
				<el-input
				  placeholder="请输入内容"
				  v-model="activityData.title"
				  clearable>
				</el-input>
			</el-col>
			<el-col :span="4">活动地点</el-col>
			<el-col :span="8">
				<el-input
				  placeholder="请输入内容"
				  v-model="activityData.place"
				  clearable>
				</el-input>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="4">活动日期与时间</el-col>
			<el-col :span="6">
				<el-date-picker
		      v-model="activityData.date"
		      type="date"
		      placeholder="选择日期">
		    </el-date-picker>
			</el-col>
			<el-col :span="14" class='alignR'>
				<el-time-picker
					is-range
					v-model="activityData.time"
					range-separator="至"
					start-placeholder="开始时间"
					end-placeholder="结束时间"
					placeholder="选择时间范围">
				</el-time-picker>
			</el-col>
		</el-row>
		<el-row>
			<el-col>
				<quill-editor v-model="activityData.content"
		                ref="myQuillEditor"
		                :options="editorOption">
										<!-- @blur="onEditorBlur($event)"
		                @focus="onEditorFocus($event)"
		                @ready="onEditorReady($event)" -->
		  	</quill-editor>
			</el-col>
		</el-row>
		<el-row>
			<el-button type="primary" @click="submitActivity">创建活动</el-button>
		</el-row>
	</div>
</template>
<script>
  export default {
    data () {
      return {
				activityData: {
					title: '',
					place: '',
					date: '',
					time: '',
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
			submitActivity: function(){
				console.log(this.activityData);
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
	.alignR{
		display: table-cell;
		text-align: right;
	}
</style>
