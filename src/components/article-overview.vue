<template>
  <div>
    <el-row type="flex" @click.native="toDetail">
      <el-col class="text-section">
        <div class="title">1123拉萨的恢复健康了Laf1123拉萨的恢复健康了Laf1123拉萨的恢复健康了Laf1123拉萨的恢复健康了Laf1123拉萨的恢复健康了Laf</div>
        <div class="desc">1123asdasd奥斯1123asdasd奥斯1123asdasd奥斯1123asdasd奥斯1123asdasd奥斯1123asdasd奥斯1123asdasd奥斯1123asdasd奥斯1123asdasd奥斯1123asdasd奥斯1123asdasd奥斯1123asdasd奥斯1123asdasd奥斯</div>
        <div class="detail">
          <div class="tags">
            <el-tag size="mini" class="tag">vue</el-tag>
            <el-tag size="mini" class="tag">js</el-tag>
          </div>
          <div class="time">2020-08-12</div>
        </div>
      </el-col>
      <el-col class="img-section" @click.native.stop="previewPic">
        <img src="" alt="" class="article-img">
      </el-col>
    </el-row>
    <el-divider></el-divider>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ArticleOverview extends Vue {
  previewPic() {
    console.log(1)
  }

  toDetail() {
    console.log(2)
    this.$router.push(`/article/12`)
  }
}
</script>

<style lang="less" scoped>
@import url('../styles/common');

.title {
  font-weight: bold;
  color: #303133;  
  font-size: 18px;
  line-height: 1.7;
  margin-bottom: 5px;  
  word-break: break-all;
  .eln();
}
.desc {
  line-height: 1.5;
  margin-bottom: 5px;
  word-break: break-all;
  .eln(3);
}
.tags {
  margin-bottom: 10px;
}
.tag:not(:first-of-type) {
  margin-left: 10px;
}
.time {
  color: #909399;
  font-size: 14px;
}
.img-section {
  flex-shrink: 0;  
  max-width: 150px;
  height: 100px;
  margin-left: 20px;
  background: #eee;
}
.article-img {
  object-fit: cover
}
</style>

