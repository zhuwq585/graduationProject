<template lang="html">
  <div class="">
    <el-row>
      <el-col :span="16" class="left">
        <el-row>活动名</el-row>
        <el-row>活动时间</el-row>
        <el-row>活动地点</el-row>
      </el-col>
      <el-col :span="8" class="right">
        <el-row>活动状态</el-row>
        <el-row>
            <el-button type="warning" v-if="status==1">退出</el-button>
            <el-button type="success" v-if="status==2">签到</el-button>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data(){
    return {
      status: 2
    }
  }
}
</script>

<style lang="scss">
.left{
  padding: 10px;
  text-align: left;
}
.right{
  text-align: right;
  padding: 10px;
}
</style>
