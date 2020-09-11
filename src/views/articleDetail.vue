<template>
  <layout-main>
    <!-- 最新 标签 -->
    <left-side slot="aside-l"></left-side>
    <template>
      <el-card shadow="never">
        <article v-html="parsedHtml" class="note-view"></article>
      </el-card>
    </template>
    <right-side slot="aside-r" :hash="hash"></right-side>
  </layout-main>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'vue-property-decorator'
import leftSide from '@/components/left-side.vue'
import rightSide from '@/components/right-side.vue'
import { IhashItem } from '@/types'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'


@Component({
  components: {
    leftSide,
    rightSide,
  },
})
export default class Home extends Vue {
  content: string = ''
  hash: IhashItem[] = [
    {
      hash: '#id1',
      name: 'link1',
    },
    {
      hash: '#id2',
      name: 'link2',
    },
    {
      hash: '#id3',
      name: 'link3',
    },
    {
      hash: '#id4',
      name: 'link4',
    },
    {
      hash: '#id5',
      name: 'link5',
    },
  ]

  @Ref()
  readonly rightSide!: rightSide

  created() {
    console.log(this.$route)
  }

  get parsedHtml(): string {
    return marked(this.content, {
      highlight(code, lang) {
        return hljs.highlightAuto(code).value
      },
      breaks: true,
    }).replace(/<th>/g, '<th align="left">')
  }
}
</script>

<style lang="less">
@import url('../styles/common');
@import url('../styles/markdown');

.aside-l {  
  margin-right: 10px;  
  width: 200px
  // background: red
}
// .aside-l-card {
//   margin-bottom: 10px
// }
.content {
  // background: green
}
.aside-r {
  background: blue
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
