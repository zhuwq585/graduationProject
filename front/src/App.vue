<template>
  <div id="app">
    <header-bar v-bind:isStu='isStu'
                v-bind:isLogin='isLogin'
                v-bind:userInfo = 'userInfo' v-on:loginCLick='login'
                                             v-on:signUpCLick='signUp'
                                             v-on:logoutClick='logout'
                ></header-bar>
    <stu-nav v-if="isStu"></stu-nav>
    <mgr-nav v-if="!isStu"></mgr-nav>
    <div class="routerView">
      <router-view></router-view>
    </div>

    <el-dialog title='登录' :visible.sync="dialogLoginVisible"
                            :show-close="false"
                            :close-on-press-escape="false"
                            :close-on-click-modal="false" >
      <login></login>
    </el-dialog>
    <el-dialog title='注册' :visible.sync="dialogSignVisible"
                            :show-close="false"
                            :close-on-press-escape="false"
                            :close-on-click-modal="false" >
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
      isStu: true,//身份标识
      dialogLoginVisible: false, //控制登录对话框显示
      dialogSignVisible: false,  //控制注册对话框显示
      isLogin: false,
      userInfo: {
        name: 'name1'
      }
    }
  },
  components: {
     'stu-nav' : stuNav,
     'mgrNav' : mgrNav,
     'header-bar': Header,
     'login': login,
     'signUp': signUp
  },
  methods: {
    login: function(){
      this.dialogLoginVisible = true;
    },
    signUp: function(){
      this.dialogSignVisible = true;
    },
    logout: function(){

    }
  },
  created: function(){
    this.$router.push('/newsList');
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
  height: 400px;
}
.routerView{
  position: relative;
  top: 30px;
}
</style>
