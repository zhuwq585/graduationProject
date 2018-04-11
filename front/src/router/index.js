import Vue from 'vue'
import Router from 'vue-router'
//stu
import newsItem from '@/components/stu/news/newsItem.vue'
import newsList from '@/components/stu/news/newsList.vue'
import newsContent from '@/components/stu/news/newsContent.vue'
import activityList from '@/components/stu/activity/activityList.vue'
import activityContent from '@/components/stu/activity/activityContent'
import myInfor from '@/components/stu/infor/myInfor.vue'
//mgr
import newsMgr from '@/components/mgr/news/newsMgr.vue'
import activityMgr from '@/components/mgr/activity/activityMgr.vue'
import userMgr from '@/components/mgr/user/userMgr.vue'
import runningState from '@/components/mgr/data/runningState.vue'
import mgrActivityContent from '@/components/mgr/activity/mgrActivityContent.vue'
import mgrNewsContent from '@/components/mgr/news/mgrNewsContent.vue'
Vue.use(Router)

const router = new Router({
  linkActiveClass: true,
  hashbang: true,
  history: true,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: newsMgr
    },
    {
      path: '/newsList',
      name: 'newsList',
      component: newsList
    },
    {
      path: '/newsContent',
      name: 'newsContent',
      component: newsContent
    },
    {
      path: '/activityList',
      name: 'activityList',
      component: activityList
    },
    {
      path: '/activityContent',
      name: 'activityContent',
      component: activityContent
    },
    {
      path: '/myInfor',
      name: 'myInfor',
      component: myInfor
    },


    {
      path: '/newsMgr',
      name: 'newsMgr',
      component: newsMgr
    },
    {
      path: '/activityMgr',
      name: 'activityMgr',
      component: activityMgr
    },
    {
      path: '/userMgr',
      name: 'userMgr',
      component: userMgr
    },
    {
      path: '/runningState',
      name: 'runningState',
      component: runningState
    },
    {
      path: '/mgrActivityContent/:id',
      name: 'mgrActivityContent',
      component: mgrActivityContent
    },
    {
      path: '/mgrNewsContent',
      name: 'mgrNewsContent',
      component: mgrNewsContent
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   store.dispatch('updateHistoryLength') // 变化时更新路由切换长度
//   next()
// });
export default router;
