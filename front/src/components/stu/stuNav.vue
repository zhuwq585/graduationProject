<template>
  <section class="nav">
    <!--v-for遍历路由-->
    <div class="nav" v-for='(m, index) in menus' :key='index'>
      <router-link :to='setPath(m.path)'>
        <span>{{m.text}}</span>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      // 路由参数
      menus: [{
        text: '资讯',
        path: '/newsList'
      }, {
        text: '活动',
        path: '/activityList'
      }, {
        text: '我的信息',
        path: '/myInfor'
      }]
    }
  },
  methods: {
    setPath (path) {
      return path
    }
  }
}
</script>

<style lang="scss">
  section.nav{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    border-top: 1px solid #eee;
    background: white;
    z-index: 9999;

    div.nav{
      display: inline-block;
      width: 33.333%;
      line-height: 50px;

      a{
        display: inline-block;
        width: 100%;
        text-decoration: none;
        color: #666;
        align-items: center;
        font-size: 18px;
        text-align: center;
        border-left: 1px solid #eee;
        border-right: 1px solid #eee;
      }
    }
  }
</style>
