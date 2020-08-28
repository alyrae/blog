<template>
  <layout-main>
    <div slot="aside-l">111</div>
    <div slot="content" class="content">222</div>
    <div slot="aside-r">333</div>
  </layout-main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Home extends Vue {}
</script>

<style lang="less" scoped>
.content {
  // text-align: center
}
</style>
