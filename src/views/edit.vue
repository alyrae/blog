<template>
  <!-- <div class="container"></div> -->
  <el-row>
    <el-col :span="12">
      <textarea class="textarea" v-model="content"></textarea>
    </el-col>
    <el-col :span="12" v-html="parsedHtml" class="note-view">

    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import marked from 'marked'
import hljs from 'highlight.js'

@Component
export default class Edit extends Vue {
  content: string = ''

  get parsedHtml(): string {
    const res = marked(this.content, {
      highlight(code, lang, callback) {
        callback(new Error(), hljs.highlightAuto(code).value)
      },
    }).replace(/<th>/g, '<th align="left">')
    return res
  }
}
</script>

<style lang="less">
@import url('../styles/common');
@import url('../styles/markdown');

.textarea {
  width: 100%;
  height: 100%;
}
</style>
