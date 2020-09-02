<template>
  <el-menu
    router
    :mode="mode"         
    active-text-color="#1989fa" 
    :default-active="$route.path" 
    @select="$emit($event)"
  >
    <el-menu-item v-for="item in route" :index="item.path" :key="item.name">{{item.name}}</el-menu-item>    
  </el-menu>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import {routes} from '../router'

interface Iroute {
  path: string
  name?: string
}

@Component
export default class Menu extends Vue {
  @Prop({
    type: String,
    default: 'vertical',
  })
  private mode!: 'horizontal' | 'vertical'

  route: Iroute[] = routes.map(item => ({path: item.path, name: item.name}))

}
</script>

<style lang="less" scoped>
.el-menu {
  border: none;
  padding-right: 55px;
}
</style>
