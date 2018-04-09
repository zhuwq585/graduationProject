<template lang="html">
  <div class="myInfor">
    <el-collapse v-model="show">
      <el-collapse-item title="我的信息" name="1">
        <infor></infor>
      </el-collapse-item>
      <el-collapse-item title="我的活动" name="2">
        <my-activity></my-activity>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import infor from '@/components/stu/infor/infor.vue'
import myActivity from '@/components/stu/infor/myActivity.vue'
export default {
  data(){
    return {
      show: ['1','2']
    }
  },
  components: {
    'infor': infor,
    'my-activity': myActivity
  }
}
</script>

<style lang="scss">

</style>
