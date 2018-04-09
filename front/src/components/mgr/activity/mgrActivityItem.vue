<template lang="html">
  <div class="item" @click='goToContent'>
    <el-row>
      <el-col :span="18">
        <el-row>
          <el-col>
            <span class="title">标题</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <span class="date">2018-04-06 11：30：00</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <span class="diget"> 地点</span>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-row>
          当前状态
        </el-row>
        <el-row>
          <el-col class='tableCell'>
            <img src="static/IMG_0468.jpg" alt="">
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    goToContent: function(){
      this.$router.push('/mgrActivityContent');
    }
  }
}
</script>

<style lang="scss">
  .item{
    display: block;
    width: 96%;
    margin: 2px auto;
    text-align: left;
    padding: 5px;
    border-bottom: 1px solid;

    img{

      width: 80px;
      height: 80px;
    }
    .title{
      font-size: 2rem;
      color: black;
      font-family: "黑体";
    }
    .date{
      font-size: 0.8rem;
      color: black;
      margin: 20px auto;
    }
    .diget{
      font-size: 0.8rem;
      color: rgb(96, 92, 95);
    }
  }
  .tableCell{
    display: table-cell;
    text-align: right;
  }
</style>
