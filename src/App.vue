<template>
  <main id="app">
    <header-nav v-if="!$route.meta.notHeaderNav"></header-nav>
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import headerNav from './components/header-nav.vue'
import { mode } from '@/store/modules/layout';
import {State, Mutation, Action} from 'vuex-class'

@Component({
  components: {
    headerNav,
  },
})
export default class App extends Vue {
  created() {
    this.changeMode('white')
  }

  @Action
  changeMode!: (payload: mode) => void
}
</script>

<style lang="less">
@import url('./styles/global.less');

#app {
  transition: transform .3s
}
</style>

