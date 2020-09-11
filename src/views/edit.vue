<template>
  <div class="edit-container">
    <el-row class="row">
      <el-col :span="12" class="col">   
        <edit-menu :spaceCount.sync="spaceCount" @submit="submit"></edit-menu>
        <textarea 
          class="textarea" 
          v-model="content" 
          @keydown.tab="tabkeydown"
          @input="input"
          ref="textarea"
        ></textarea>
      </el-col>
      <el-col :span="12" v-html="parsedHtml" class="note-view"></el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Ref, Watch } from 'vue-property-decorator'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import editMenu from '@/components/edit-menu.vue'
import Debounce from '@/decorators/debounce'

@Component({
  components: {
    editMenu,
  },
})
export default class Edit extends Vue {
  content: string = ''
  parsedHtml: string = ''
  spaceCount: number = 2

  @Debounce(400)
  input() {
    this.parsedHtml = marked(this.content, {
      highlight(code, lang) {
        return hljs.highlightAuto(code).value
      },
      breaks: true,
    }).replace(/<th>/g, '<th align="left">')
  }


  @Ref()
  readonly textarea!: HTMLTextAreaElement

  tabkeydown(e: KeyboardEvent) {
    document.execCommand('insertHTML', false, ' '.repeat(this.spaceCount))
    this.content = this.textarea.value
    e.preventDefault()
  }

  submit() {
    console.log(this.content)
  }
}
</script>

<style lang="less">
@import url('../styles/common');
@import url('../styles/markdown');

.edit-container {
  width: 100%;
  height: 100vh;
}
.row, .col {
  height: 100%;
}
.col {
  border-right: 1px solid #d9d9d9;
  display: flex;
  flex-direction: column;
}
.menu {
  flex-shrink: 0
}
.textarea {
  width: 100%;
  flex: 1;
  overflow: auto;
  font-size: 18px;
  font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
  padding: 40px 40px 80px;
  resize: none;
  color: #333;
  line-height: 30px;
  border: none;
  outline: none;
}
.note-view {
  height: 100%;
  overflow-y: auto;
  color: #333;
  padding: 40px 40px 80px;
  font-size: 16px;
  line-height: 1.75;
}
</style>
