<template>
  <main id="app">
    <header-nav></header-nav>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import headerNav from './components/header-nav.vue'

@Component({
  components: {
    headerNav,
  },
})
export default class App extends Vue {
  public activeName: string = ''

  public select(e: any) {
    console.log(e)
  }
}
</script>

<style lang="less">
@import url('./styles/global.less');


</style>

