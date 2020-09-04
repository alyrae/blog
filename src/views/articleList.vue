<template>
  <el-row type="flex">
    <el-col :sm="sm" :md="md" :lg="lg" :xl="xl" style="height: 1px" class="hidden-xs-only"></el-col>
    <el-col :sm="24" :md="24-2*md" :lg="24-2*lg" :xl="24-2*xl" class="article-content">
      <a-o v-for="i in 10" :key="i"></a-o>
    </el-col>
    <el-col :sm="sm" :md="md" :lg="lg" :xl="xl" style="height: 1px" class="hidden-xs-only"></el-col>
  </el-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import articleOverview from '@/components/article-overview.vue'
import {State} from 'vuex-class'

@Component({
  components: {
    aO: articleOverview,
  },
})
export default class ArticleList extends Vue {
  @State(state => state.layout.sm)
  sm!: number
  @State(state => state.layout.md)
  md!: number
  @State(state => state.layout.lg)
  lg!: number
  @State(state => state.layout.xl)
  xl!: number
}
</script>

<style lang="less" scoped>
@import url('../styles/common');

.article-content {
  margin-top: 40px;
  @media screen and (max-width: @sm) {
    margin: 0 10px
  }
}
</style>

