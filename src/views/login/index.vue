<template>
  <div class="login">
    <el-form class="login-form" ref="form" label-position="top" :model="form" label-width="80px">
      <el-form-item label="手机号">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button style="width:100%;" type="primary" :loading="islogin" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import request from '@/utils/request'
// import qs from 'qs'
import { login } from '@/services/user'
export default Vue.extend({
  data() {
    return {
      form: {
        phone: '18589099692',
        password: ''
      },
      rules: {},
      islogin: false
    }
  },
  methods: {
    async onSubmit() {
      this.islogin = true
      //
      const { data } = await login(this.form)
      if (data.state !== 1) {
        this.$message.error(data.message)
      } else {
        this.$router.push({
          name: 'home'
        })
      }
      this.islogin = false
      this.$message.success('登录成功')
    }
  }
})
</script>

<style scoped lang="scss">
.login {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-form {
    width: 300px;
    background: #fff;
    padding: 20px;
    border-radius: 5px;
  }
}
</style>
