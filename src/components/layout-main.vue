<template>
  <div class="container">
    <el-row class="layout-container" type="flex">
      <el-col :sm="sm" :md="md" :lg="lg" :xl="xl" class="layout-aside-l hidden-xs-only">
        <div class="layout-aside-l-wrapper">
          <slot name="aside-l"></slot>
        </div>
      </el-col>
      <el-col :sm="24-sm" :md="24-md" :lg="24-2*lg" :xl="24-2*xl" class="layout-content">
        <slot></slot>
      </el-col>
      <el-col :lg="lg" :xl="xl" class="layout-aside-r hidden-md-and-down">
        <slot name="aside-r"></slot>
      </el-col>
      <el-drawer
        direction="ltr"
        :visible.sync="showDrawer"
        :show-close="false"
        :modal="true"
        :withHeader="false"
        :modal-append-to-body="true"
        :append-to-body="true"
        @open="openDrawer"
        @close="closeDrawer"
        @closed="closedDrawer"
      >
        123132
      </el-drawer>
      <div class="small-aside-menu" @click="showDrawer = true">
        <svg slot="reference" viewBox="64 64 896 896" focusable="false" data-icon="unordered-list" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"></path></svg>
      </div>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import {State} from 'vuex-class'
// import headerNav from '@/components/header-nav.vue'

@Component
export default class LayoutMain extends Vue {
  @State(state => state.layout.sm)
  sm!: number
  @State(state => state.layout.md)
  md!: number
  @State(state => state.layout.lg)
  lg!: number
  @State(state => state.layout.xl)
  xl!: number

  showDrawer: boolean = false

  openDrawer() {
    (<HTMLElement> (this.$root.$el)).style.cssText = `transform: translateX(30%)`
    document.body.style.cssText = 'overflow: hidden'
  }

  closeDrawer() {
    (<HTMLElement> (this.$root.$el)).style.cssText = ''
  }

  closedDrawer() {
    document.body.style.cssText = ''
  }
}
</script>

<style lang="less">
@import url('../styles/common');

.layout-container {
  padding-top: 50px;
  position: relative;
}
.layout-aside-l {
  display: flex;
  flex-direction: column;
  align-items: center
}
.layout-aside-l-wrapper {
  max-width: 190px;
}
.layout-content {
  @media screen and (max-width: @sm) {
    margin: 0 10px
  }
}
.small-aside-menu {
  position: fixed;
  left: 0;
  top: 70px;
  width: 40px;
  height: 40px;
  box-shadow: 2px 0 8px #ddd;
  display: none;
  @media screen and (max-width: @sm){
    display: flex;
    justify-content: center;
    align-items: center
  }
}
</style>
