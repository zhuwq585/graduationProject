<template lang="html">
<div class="item" @click='goToContent'>
  <el-row>
    <el-col :span="18">
      <el-row>
        <el-col>
          <span class="title">{{data.title}}</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <span class="date">{{data.date}}</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <span class="diget"> 就快来大神大神</span>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="6">
      <el-row>
        <el-col class='tableCell'>
          <img v-bind:src="data.img" alt="">
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  props:['data'],
  methods: {
    goToContent: function(){
      console.log(this.data);
      this.$router.push('/mgrNewsContent?id='+this.data.id);
    }
  }
}
</script>

<style lang="scss">
  .item{
    display: block;
    width: 96%;
    margin: 10px auto;
    text-align: left;
    padding: 5px;
    border-bottom: 1px solid;

    img{

      width: 130px;
      height: 130px;
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
