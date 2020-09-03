<template>
  <el-form>
    <el-form-item>
      <el-input v-model="signupName" placeholder="input name"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input v-model="tel" placeholder="input telephone"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input v-model="password" placeholder="input password" show-password></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="submit">register</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import {Action} from 'vuex-class'
import { ISignupPayload } from '@/store/modules/user';
import {Message} from 'element-ui'

@Component
export default class SignUp extends Vue {
  signupName: string = ''
  tel: string = ''
  password: string = ''

  async submit() {
    const res: boolean = await this.signup({
      signupName: this.signupName,
      tel: this.tel,
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

  @Action
  signup!: (payload: ISignupPayload) => boolean
}
</script>

<style lang="less" scoped>

</style>

