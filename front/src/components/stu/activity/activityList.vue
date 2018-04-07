<template lang="html">
  <div class="activityList">
    <div class="pageTitle">
      活动列表
    </div>
    <activity-item></activity-item>
  </div>
</template>

<script>
import activityItem from '@/components/stu/activity/activityItem.vue'
export default {
  components: {
    'activity-item': activityItem
  }
}
</script>

<style lang="scss">
.pageTitle{
  width: 100px;
  height: 32px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%,0);
  background: white;
  z-index: 9999;
  line-height: 31px;
  //border-radius: 15px;
}
</style>
