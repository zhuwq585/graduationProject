<template>
  <section class="nav">
    <!--v-for遍历路由-->
    <div class="nav" v-for='(m, index) in menus' :key='index'>
      <router-link :to='setPath(m.path)'><span>{{m.text}}</span></router-link>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      // 路由参数
      menus: [{
        text: '资讯管理',
        path: '/newsMgr'
      }, {
        text: '活动管理',
        path: '/activityMgr'
      }, {
        text: '用户管理',
        path: '/userMgr'
      },{
        text: '运行概况',
        path: '/runningState'
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

    div.nav{
      display: inline-block;
      width: 25%;
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
