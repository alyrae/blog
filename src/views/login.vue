<template>
  <div class="container">
    <el-card class="login-card" shadow="hover">
      <el-tabs>
        <el-tab-pane label="login">login</el-tab-pane>
        <el-tab-pane label="register">register</el-tab-pane>
      </el-tabs>
      <!-- <el-form>
        <el-form-item>
          <el-input v-model="name" placeholder="input nickname"></el-input>        
        </el-form-item>
        <el-form-item>
          <el-input v-model="password" placeholder="input password" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button>确认</el-button>
        </el-form-item>
      </el-form> -->
    </el-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Login extends Vue {
  name: string = ''
  password: string = ''
}
</script>

<style lang="less" scoped>
@import url('../styles/common');

.container {
  background: #eee;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;  
}
.login-card {
  width: 50%;
  position: relative;
  transform: translateY(-50%);
  top: 30%
}
</style>
