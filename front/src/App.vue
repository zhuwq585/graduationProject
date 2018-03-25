<template>
  <div id="app">
    <header-bar></header-bar>
    <stu-nav v-if="isStu"></stu-nav>
    <mgr-nav v-if="!isStu"></mgr-nav>
    <router-view></router-view>

    <el-dialog title='登录' :visible.sync="dialogLoginVisible"
                            :show-close="false"
                            :close-on-press-escape="false"
                            :close-on-click-modal="false">
      <login></login>
    </el-dialog>
    <el-dialog title='注册' :visible.sync="dialogSignVisible"
                            :show-close="false"
                            :close-on-press-escape="false"
                            :close-on-click-modal="false">
      <sign-up></sign-up>
    </el-dialog>
  </div>
</template>

<script>
import mgrNav from '@/components/mgr/mgrNav'
import stuNav from '@/components/stu/stuNav'
import Header from '@/components/Header'
import signUp from '@/components/signUp'
import login from '@/components/login'
export default {
  name: 'App',
  data: function(){
    return{
      isStu: false,
      dialogLoginVisible: false,
      dialogSignVisible: false
    }
  },
  components: {
     'stu-nav' : stuNav,
     'mgrNav' : mgrNav,
     'header-bar': Header,
     'login': login,
     'signUp': signUp
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
