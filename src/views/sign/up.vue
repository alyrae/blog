<template>
  <el-form>
    <el-form-item>
      <el-input v-model="registerName" placeholder="input name"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input v-model="registerTel" placeholder="input telephone"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input v-model="registerPassword" placeholder="input password" show-password></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="register">register</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class SignUp extends Vue {
  registerName: string = ''
  registerTel: string = ''
  registerPassword: string = ''

  register() {
    // console.log()
  }
}
</script>

<style lang="less" scoped>

</style>

