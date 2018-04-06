<template lang="html">
    <header>
        <span class="title">club管理系统</span>
        <span class='menu'>
          <span v-if="!isLogin">
            请：
            <a href="#" @click='login'>登录</a>
            <a href="#" @click='signUp'>注册</a>
          </span>
          <el-dropdown v-if="isLogin" trigger="click">
            <span class="el-dropdown-link">
              欢迎您{{ this.userInfo.name }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
             <el-dropdown-menu slot="dropdown">
               <el-dropduwn-item>
                 <span @click="logout">退出登录</span>
               </el-dropduwn-item>
             </el-dropdown-menu>
          </el-dropdown>
        </span>
    </header>
</template>

<script>
export default {
  props: ['isStu','isLogin','userInfo'],
  methods: {
    login: function(){
      this.$emit('loginClick');
    },
    signUp: function(){
      this.$emit('signUpClick');
    },
    logout: function(){
      this.$emit('logoutClick');
    }
  }
}
</script>

<style lang="scss">
  header{
    height: 30px;
    width: 100%;
    position: fixed;
    top: 0;
    background: rgb(134, 242, 138);
    z-index: 9998;

    span.title,
    span.menu{
      line-height: 30px;
      position: absolute;
      cursor: pointer;
    }
    .title{
      left: 10px;
    }

    .menu{
      right: 10px;

      a{
        text-decoration: none;
      }
    }
  }
</style>
