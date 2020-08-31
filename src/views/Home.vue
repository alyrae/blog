<template>
  <layout-main>
    <!-- 最新 标签 -->
    <left-side slot="aside-l"></left-side>
    <template slot="content">
      <div id="id1">id1</div>
      <el-calendar id="id2" v-model="calendar"></el-calendar>      
      <el-calendar id="id3" v-model="calendar"></el-calendar>
      <ul id="id4">
        <li v-for="i in 100">{{i}}</li>
      </ul>
      <div id="id5">id5</div>
    </template>
    <right-side slot="aside-r" :hash="hash"></right-side>
  </layout-main>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'vue-property-decorator'
import leftSide from '@/components/left-side.vue'
import rightSide from '@/components/right-side.vue'
import { IhashItem } from '@/types';


@Component({
  components: {
    leftSide,
    rightSide,
  },
})
export default class Home extends Vue {
  calendar: Date | string | number = ''

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

  // mounted() {
  //   window.addEventListener('scroll', e => {
  //     console.log(e)
  //   }, {
  //     passive: true,
  //   })

  //   const ob = new IntersectionObserver( entries => {
  //     console.log('#' + entries[0].target.getAttribute('id'))
  //     // this.rightSide.slideToHash('#' + entries[0].target.getAttribute('id'))
  //   })
  //   ob.observe(<Element> document.getElementById('id1'))
  //   ob.observe(<Element> document.getElementById('id2'))
  //   ob.observe(<Element> document.getElementById('id3'))
  //   ob.observe(<Element> document.getElementById('id4'))
  //   ob.observe(<Element> document.getElementById('id5'))
  // }
}
</script>

<style lang="less" scoped>
@import url('../styles/common');

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
