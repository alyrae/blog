<template>
  <el-form>
    <el-form-item>
      <el-input v-model="loginName" placeholder="input nickname"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input v-model="loginPassword" placeholder="input password" show-password></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="login">login</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class SignIn extends Vue {
  loginName: string = ''
  loginPassword: string = ''
  login() {
    console.log(this.loginName, this.loginPassword)
  }

}
</script>

<style lang="less" scoped>

</style>
