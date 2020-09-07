<template>
  <el-row tag="nav" type="flex" class="header-nav">
    <el-col :xs="xs" :sm="sm" :md="md" :lg="lg" :xl="xl" class="col-logo">
      <h1><a href="/"><img src="../assets/logo.png" alt="" class="logo">description</a></h1>
    </el-col>
    <el-col :sm="23-sm" :md="23-md" :lg="23-lg" :xl="23-xl" class="col-other">
      <div class="search-box">
        <el-input 
          v-model="search"
          placeholder="搜索文档"
          :clearable="true"
          prefix-icon="el-icon-search"
          autocomplete="on"
          maxlength="10"
          size="small"
          class="search"
        ></el-input>
      </div>
      <custom-menu mode="horizontal" @select="select"/>
    </el-col>
    <el-col :span="1" class="col-avatar">
      <el-dropdown trigger="click" @command="command">
        <el-avatar :size="40" :src="userInfo.avatar" class="avatar-box">
          <el-avatar icon="el-icon-user-solid"></el-avatar>
        </el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item 
            v-for="item in dropdownList"
            :key="item.key"
            v-bind="item"
          >{{item.key}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import customMenu from './custom-menu.vue'
import {State, Getter, Mutation} from 'vuex-class'
import { IUserInfo } from '@/store/modules/user';


interface IDropdown {
  key: string
  divided: boolean,
  command: string
}

@Component({
  components: {
    customMenu,
  },
})
export default class HeaderMenu extends Vue {
  @State(state => state.layout.xs)
  xs!: number
  @State(state => state.layout.sm)
  sm!: number
  @State(state => state.layout.md)
  md!: number
  @State(state => state.layout.lg)
  lg!: number
  @State(state => state.layout.xl)
  xl!: number
  @State(state => state.user.userInfo)
  userInfo!: IUserInfo
  @Getter
  readonly isLogin!: boolean

  active: string = '0'
  search: string = ''

  @Mutation
  logout!: () => void

  get dropdownList(): IDropdown[] {
    if (this.isLogin) {
      return [
        {
          key: `signed in as ${this.userInfo.nickname}`,
          divided: false,
          command: '/',
        },
        // {
        //   key: 'settings',
        //   divided: true,
        //   command: '/settings',
        // },
        // {
        //   key: 'sign out',
        //   divided: false,
        //   command: 'signout',
        // },
        {
          key: 'sign out',
          divided: true,
          command: 'signout',
        },
      ]
    } else {
      return [
        {
          key: 'sign in',
          divided: false,
          command: '/sign/in',
        },
        {
          key: 'sign up',
          divided: false,
          command: '/sign/up',
        },
      ]
    }
  }

  private select(e: any) {
    console.log(e)
  }

  command(command: string) {
    if (command === 'signout') {
      this.logout()
    } else {
      this.$router.push(command)
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../styles/common');

nav {
  box-shadow: 0 2px 8px #ddd;
  height: 60px;
  position: relative;
  background: #fff
}
h1 {
  font-weight: normal;
  font-size: 16px;
  @media screen and (max-width: @sm) {
    // text-align: center;
    a {
      // padding-left: 0px !important;
    }
  }
  a {
    line-height: 60px;
    padding-left: 30px;
    white-space: nowrap;  
  }
}
.logo {  
  height: 50px;
  vertical-align: middle;
  margin-right: 20px;
  display: inline;
}
.col-other {
  height: 100%;
  display: flex;
  align-items: center;
  @media screen and (max-width: @sm) {
    display: none
  }
}
.search-box {
  flex: 1
}
.search {
  width: 200px;
}
.small-menu {  
  display: none;
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  font-size: 20px;
  @media screen and (max-width: @sm) {
    display: block
  }
}
.col-avatar {
  min-width: 50px;
  padding-top: 10px
}
.avatar-box {
  cursor: pointer;
  background: none
}
.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover
}
.header-nav {
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 2;
}
</style>

