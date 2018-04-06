<template lang="html">
<div class="newsContent">
  <el-row>
    <el-col>
      <img src="static/IMG_0468.jpg" alt="">
    </el-col>
  </el-row>
  <el-row class="nContainer">
    <el-col :span="22" :push="1">
      <el-row>
        <el-col class="title">
          标题
        </el-col>
      </el-row>
      <el-row>
        <el-col class="date">日期</el-col>
      </el-row>
      <el-row>
        <el-col class="content">正文</el-col>
      </el-row>
    </el-col>
  </el-row>

  <div class="returnBtn" @click='back'>
    <el-button type="primary" size="mini" round>返回</el-button>
  </div>
  <el-button type="primary">我要报名</el-button>
</div>
</template>

<script>
export default {
  methods: {
    back: function(){
      this.$router.push('/activityList');
    }
  }
}
</script>

<style lang="scss">
.newsContent{
  img{
    width: 100%;
    height: 150px;
  }
  .nContainer{
    margin-top: 10px;

    .title{
      font-size: 2rem;
      font-family: '黑体';
      font-weight: bold;
    }
    .date{
      font-size: 0.8rem;
      margin: 5px  auto;
    }
    .content{
      font-size: 1.2rem;
      text-align: left;;
    }
  }

  .returnBtn{
    display: block;
    position: fixed;
    bottom: 55px;
    right: 10px;
  }
}
</style>
