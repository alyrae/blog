<template>
  <ul class="index-wrapper">
    <li v-for="(item, index) in hash" class="index-item">
      <a :href="item.hash" :class="{active: i == index}" @click="click(index)">{{item.name}}</a>
    </li>
    <li class="bar" :style="{transform}"></li>
  </ul>
</template>

<script lang="ts">
// TODO: 滑动同步目录位置
import { Vue, Component, Prop } from 'vue-property-decorator'
import {IhashItem} from '@/types'

@Component
export default class RightSide extends Vue {
  @Prop(Array)
  hash!: IhashItem[]

  i: number = 0

  get transform() {
    return `translateY(${24 * this.i}px)`
  }

  click(index: number) {
    this.i = index
  }

  created() {
    this.i = this.$route.hash ? this.hash.findIndex(item => item.hash === this.$route.hash) : 0
  }

  slideToHash(hash: string) {
    this.i = this.hash.findIndex(item => item.hash === hash)
  }
}
</script>

<style lang="less" scoped>
@import url('../styles/common');

.index-wrapper {  
  border-left: 1px solid #eee;
  position: sticky;
  top: 50px;
  margin-left: 50px;
}
.index-item {
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 16px;  
  font-size: 14px;  
  line-height: 20px;
}
.active {
  color: @blue
}
.bar {
  width: 1px;
  height: 24px;
  transition: transform .3s;
  background: @blue;
  margin-left: -1px;
  position: absolute;
  top: 0;
}
</style>

