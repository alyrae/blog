<template>
  <ul class="menu">    
    <li class="menu-item">
      制表符大小<i class="el-icon-arrow-down icon"></i>
      <ul class="submenu">
        <li 
          :class="{'submenu-item': true, 'active-submenu-item': spaceCountSync == i}" 
          v-for="i in 8" 
          :key="i" 
          @click="spaceCountSync = Number(i)"
        >{{i}} {{spaceCountSync == i ? ' 已配置制表符大小' : ''}}</li>
      </ul>
    </li>
    <li class="menu-item" @click="$emit('submit')">提交</li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component, PropSync } from 'vue-property-decorator'

@Component
export default class EditMenu extends Vue {
  @PropSync('spaceCount', Number)
  spaceCountSync!: number
}
</script>

<style lang="less" scoped>
@import url('../styles/common');

@normalBg:#d9d9d9;
@hoverBg: #595959;
.menu {
  display: flex;
  flex-wrap: wrap;
  justify-items: flex-start;
  background: @normalBg;  
  font-size: 14px;
  padding-left: 55px;
}
.menu-item {
  padding: 0 20px;
  line-height: 40px;
  color: @hoverBg;
  transition: all .2s;
  position: relative;
  &:hover {
    cursor: pointer;
    background: @hoverBg;
    color: #fff;
    .icon {
      transform: rotateZ(180deg)
    }
    .submenu {
      display: block;
      opacity: 1;
      transform: scaleY(1);
    }
  }
}
.icon {
  font-size: 12px;
  margin-left: 8px;
  transition: transform .5s
}
.submenu {
  position: absolute;
  top: 40px;
  left: 0;
  padding-top: 20px;    
  color: #fff;
  transition: all .2s;
  opacity: 0;
  transform: scaleY(0);
  transform-origin: center top;
  .submenu-item:first-of-type {
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
  }
  .submenu-item:last-of-type {
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
  }
}
.submenu-item {
  background: @normalBg;
  color: @hoverBg;
  width: 180px;
  padding: 0 10px;
  transition: all .2s;
  white-space: pre-wrap;
  &:hover {
    background: @hoverBg;
    color: #fff;
  }
}
.active-submenu-item {
  background: @hoverBg;
  color: #fff;
}
</style>

