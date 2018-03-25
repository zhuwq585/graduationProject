<template lang="html">
  <el-form ref="form" :model="form" label-width="80px" :label-position="labelPosition">
    <el-form-item label="用户名">
      <el-input v-model="form.userName"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item label="请确认密码">
      <el-input v-model="form.userName"></el-input>
    </el-form-item>
    <el-form-item label="电子邮箱">
      <el-input v-model="form.eMail"></el-input>
    </el-form-item>
    <el-form-item label="手机号码">
      <el-input v-model="form.phoneNum" ></el-input>
    </el-form-item>
    <el-form-item>
      <span @click="refreshCode">
        <s-identify :identifyCode="identifyCode" @click="refreshCode"></s-identify>
      </span>
      <el-input v-model="identifyInput" placeholder="请输入验证码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit" >登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import SIdentify from '@/components/identify'
export default {
  data(){
    return {
      identifyCode: '1234',
      identifyInput: '',
      labelPosition: 'top',
      form: {
        userName:'',
        password: '',
        eMail: '',
        phoneNum: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(this.form.loginType);
    },
    refreshCode() {
      var code = "";
      var codeLength = 4;//验证码的长度
      var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
         'S','T','U','V','W','X','Y','Z');//随机数
      for(var i = 0; i < codeLength; i++) {
       //循环操作
       var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）
       code += random[index];//根据索引取得随机数加到code上
      }
      this.identifyCode = code;//把code值赋给验证码
    }
  },
  components: {
    's-identify': SIdentify
  }
}
</script>

<style lang="scss">

</style>
