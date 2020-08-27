<template>
  <el-menu
    router
    :mode="mode"         
    active-text-color="#1989fa" 
    :default-active="$route.path" 
    @select="$emit($event)"
  >
    <el-menu-item index="/">标签1</el-menu-item>
    <el-menu-item index="/page2">标签2</el-menu-item>
    <el-menu-item index="/page3">标签3</el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Menu extends Vue {
  @Prop({
    type: String,
    default: 'vertical',
  })
  private mode!: 'horizontal' | 'vertical'
}
</script>

<style lang="less" scoped>
.el-menu {
  border: none
}
</style>
