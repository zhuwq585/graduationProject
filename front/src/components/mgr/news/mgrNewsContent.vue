<template lang="html">
<div class="newsContent">
  <el-row>
    <el-col>
      <img v-bind:src="data.img" alt="">
    </el-col>
  </el-row>
  <el-row class="nContainer">
    <el-col :span="22" :push="1">
      <el-row>
        <el-col class="title">
          {{data.title}}
        </el-col>
      </el-row>
      <el-row>
        <el-col class="date">{{data.date}}</el-col>
      </el-row>
      <el-row>
        <el-col class="content" v-html="data.content"></el-col>
      </el-row>
    </el-col>
  </el-row>

  <div class="returnBtn">
    <el-button type="primary" size="mini"  @click='back' round>返回</el-button>
    <el-button type="primary" size="mini"　@click="deleteNews" round>删除</el-button>

  </div>

</div>
</template>

<script>
import $ from 'jquery'
export default {
  data(){
    return{
        data: ''
    }
  },
  methods: {
    back: function(){
      //console.log(this.$route.query.id);
      this.$router.push('/newsMgr');
    },
    getData: function(){
      var vueObj = this;
      $.ajax({
        url: 'http://127.0.0.1:8082/getNews',
        data: {
          id: vueObj.$route.query.id
        },
        success: function(response){
          console.log(response);
          vueObj.data = response;
        }
      })
    },
    deleteNews: function(){
      var vueObj = this;
      $.ajax({
        url: 'http://127.0.0.1:8082/deleteNews',
        data: {
          id: vueObj.data.id
        },
        success: function(response){
          console.log(response);
          vueObj.$router.push('/newsMgr');
        }
      })
    }
  },
  created: function(){
    this.getData();
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
