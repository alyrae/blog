<template>
  <div class="sign-container">
    <el-card class="login-card" shadow="hover">
      <el-tabs v-model="name">
        <el-tab-pane label="login" name="login"></el-tab-pane>
        <el-tab-pane label="register" name="register"></el-tab-pane>
      </el-tabs>
      <router-view></router-view>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'

@Component
export default class Login extends Vue {
  get name(): string {
    return this.$route.name || 'login'
  }
  set name(value) {
    const routeName = this.$route.name
    if (routeName !== value) {
      this.$router.push({
        name: value,
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../../styles/common');

.sign-container {
  background: #eee;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;  
}
.login-card {
  width: 400px;
  position: relative;
  top: 150px
}
.ul {
  display: flex;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  position: relative;
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  // border-bottom: 
  &::after {
    width: 100%;
    height: 2px;
    position: absolute;
    content: "";
    background: #e4e7ed;
    left: 0;
    bottom: 0
  }
}
.bar {
  height: 2px;
  background: @blue;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100px;
  z-index: 2;
  transition: transform .2s;
}
.link {
  padding: 0 20px;
  cursor: pointer;
}
.link:first-of-type {
  padding-left: 0
}
.active {
  color: @blue
}
</style>
