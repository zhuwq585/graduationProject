<template lang="html">
<div class="newsList">
  <div class="pageTitle">
    资讯列表
  </div>
  <news-item></news-item>
  <news-item></news-item>
  <news-item></news-item>
  <news-item></news-item>
  <news-item></news-item>
  <news-item></news-item>
  <news-item></news-item>
  <news-item></news-item>
  <news-item></news-item>
  <news-item></news-item>
  <news-item></news-item>
  <news-item></news-item>
  <news-item></news-item>
</div>
</template>

<script>
import newsItem from "@/components/stu/news/newsItem.vue"
export default {
  components: {
    'news-item': newsItem
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
    border-radius: 15px;
  }
</style>
