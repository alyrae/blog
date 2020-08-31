<template>
  <div>
    <el-card
      class="aside-l-card"
      header="标题1"
      shadow="hover"
    >
      <div class="card-item">1</div>
      <div class="card-item">adasdasdadasdadsdadasdasdadasdadsdadasdasdadasdadsd</div>
      <div class="card-item">，，，，，，，，，，，，，，，，，，，，，，，，，，，，，</div>
      <div class="card-item">爱上大理埃里克森的哈进口量收到货加两颗结束动画好阿克苏加拉哈德</div>
      <div class="card-item">奥术大师     阿斯顿</div>
      <div class="card-item">1</div>
    </el-card>    
    <el-card                  
      class="aside-l-card"
      shadow="hover"
    >
      <div class="card-item" v-for="i in 10">列表{{i}}</div>
    </el-card>   
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class LeftSide extends Vue {}
</script>

<style lang="less" scoped>
@import url('../styles/common');

.aside-l-card {
  margin-bottom: 10px
}
.card-item {
  margin-bottom: 18px;
  font-size: 14px;
  word-wrap: break-word;
  &:hover {
    color: @blue;
    cursor: pointer;
  }  
}
</style>
