import Vue from 'vue'
import Router from 'vue-router'
import newsItem from '@/components/stu/news/newsItem.vue'
import newsList from '@/components/stu/news/newsList.vue'
import newsContent from '@/components/stu/news/newsContent.vue'
import activityList from '@/components/stu/activity/activityList.vue'
import activityContent from '@/components/stu/activity/activityContent'
import myInfor from '@/components/stu/infor/myInfor.vue'


Vue.use(Router)

const router = new Router({
  linkActiveClass: true,
  hashbang: true,
  history: true,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: undefined
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
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   store.dispatch('updateHistoryLength') // 变化时更新路由切换长度
//   next()
// });
export default router;
