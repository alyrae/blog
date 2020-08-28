<template>
  <el-row tag="nav">
    <el-col :sm="sm" :md="md" :lg="lg" :xl="xl" class="col-logo">
      <h1><a href="/"><img src="../assets/logo.png" alt="" class="logo">description</a></h1>
    </el-col>
    <el-col :sm="24-sm" :md="24-md" :lg="24-lg" :xl="24-xl" class="col-other">
      <div class="search-box">
        <el-input 
          v-model="search"
          placeholder="搜索文档"
          :clearable="true"
          prefix-icon="el-icon-search"
          autocomplete="on"
          maxlength="10"
          size="small"
          class="search"
        ></el-input>
      </div>
      <custom-menu mode="horizontal" @select="select"/>
    </el-col>
    <el-popover
      placement="bottom"      
    >
      <svg slot="reference" viewBox="64 64 896 896" focusable="false" class="small-menu" data-icon="unordered-list" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"></path></svg>
      <custom-menu @select="select"/>
    </el-popover>
  </el-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import customMenu from './custom-menu.vue'
import {State} from 'vuex-class'

@Component({
  components: {
    customMenu,
  },
})
export default class HeaderMenu extends Vue {
  @State(state => state.layout.sm)
  sm!: number
  @State(state => state.layout.md)
  md!: number
  @State(state => state.layout.lg)
  lg!: number
  @State(state => state.layout.xl)
  xl!: number

  active: string = '0'
  search: string = ''

  private select(e: any) {
    console.log(e)
  }
}
</script>

<style lang="less" scoped>
@import url('../styles/common');

nav {
  box-shadow: 0 2px 8px #ddd;
  height: 60px;
  position: relative;
  background: #fff
}
h1 {
  @media screen and (max-width: @sm) {
    text-align: center;
    a {
      padding-left: 0px !important;
    }
  }
  a {
    line-height: 60px;
    padding-left: 30px;
    white-space: nowrap;  
  }
}
.logo {  
  height: 50px;
  vertical-align: middle;
  margin-right: 20px;
  display: inline;
}
.col-other {
  height: 100%;
  display: flex;
  align-items: center;
  @media screen and (max-width: @sm) {
    display: none
  }
}
.search-box {
  flex: 1
}
.search {
  width: 200px;
}
.small-menu {  
  display: none;
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  font-size: 20px;
  @media screen and (max-width: @sm) {
    display: block
  }
}
</style>

