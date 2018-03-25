<template>
  <el-form ref="form" :model="form" label-width="80px" :label-position="labelPosition">
    <el-form-item label='用户名'>
      <el-input v-model="form.userName"></el-input>
    </el-form-item>
    <el-form-item label='密码'>
      <el-input v-model='form.password'></el-input>
    </el-form-item>
    <el-form-item>
      <el-switch v-model="form.loginType"></el-switch>
      <el-button type="primary" @click="onSubmit">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        labelPosition: 'top',
        form: {
          userName: '',
          password: '',
          loginType: true //t:stu f:mgr
        }
      }
    },
    methods: {
      onSubmit() {
        console.log(this.form.loginType);
      }
    }
  }
</script>
