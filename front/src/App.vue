<template>
  <div id="app">
    <header-bar></header-bar>
    <stu-nav v-if="isStu"></stu-nav>
    <mgr-nav v-if="!isStu"></mgr-nav>
  </div>
</template>

<script>
import mgrNav from '@/components/mgr/mgrNav'
import stuNav from '@/components/stu/stuNav'
import Header from '@/components/Header'
export default {
  name: 'App',
  data: function(){
    return{
      isStu: false
    }
  },
  components: {
     'stu-nav' : stuNav,
     'mgrNav' : mgrNav,
     'header-bar': Header
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
