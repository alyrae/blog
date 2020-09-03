<template>
  <el-form>
    <el-form-item>
      <el-input v-model="loginName" placeholder="input nickname"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input v-model="password" placeholder="input password" show-password></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="submit">login</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import {Action} from 'vuex-class'
import { ILoginPayload } from '@/store/modules/user';
import {Message} from 'element-ui'

@Component
export default class SignIn extends Vue {
  loginName: string = ''
  password: string = ''

  @Action
  login!: (payload: ILoginPayload) => boolean

  async submit() {
    const res: boolean = await this.login({
      loginName: this.loginName,
      password: this.password,
    })
    Message({
      message: res ? 'success' : 'fail',
      type: res ? 'success' : 'error',
    })
    if (res) {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
