import Vue from 'vue'
import Router from 'vue-router'
import newsItem from '@/components/stu/news/newsItem.vue'

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
      path: '/newsItem',
      name: 'newsItem',
      component: newsItem
    }
  ]
});

router.beforeEach((to, from, next) => {
  store.dispatch('updateHistoryLength') // 变化时更新路由切换长度
  next()
});
export default router;
