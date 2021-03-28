<template>
    <div id="header" class="clearfix">
        <div class="img">
            <img src="@/assets/panda.jpg" width="60px" height="60px" alt="logo">
        </div>
        <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect">
            <el-menu-item index="1">首页</el-menu-item>
            <el-submenu index="2">
                <template slot="title">前端</template>
                <el-menu-item index="2-1">JS</el-menu-item>
                <el-menu-item index="2-2">CSS</el-menu-item>
                <el-menu-item index="2-3">VUE</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">素材</el-menu-item>
            <el-menu-item index="4">热门榜</el-menu-item>
<!--            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
        </el-menu>
        <el-input
                class="search"
                placeholder="请输入内容"
                v-model="input1"
                clearable>
            <i
                 slot="prefix"
                 class="el-input__icon
                 el-icon-search"></i>
        </el-input>
        <el-button
                type="primary"
                class="write-blog"
                plain>
            <span>编写博客</span>
        </el-button>
        <el-dropdown  class="icon">
            <el-avatar icon="el-icon-user-solid" ></el-avatar>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-plus">登录/注册</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus">我的点赞</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus-outline">推荐文章</el-dropdown-item>
                <el-dropdown-item icon="el-icon-check">其他</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-check">退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      input: ''
    }
  }
}
</script>

<style scoped lang="scss">
    #header {
        display: flex;
        width:100%;
        height:60px;
        justify-content: space-between;
    }
    .clearfix:after {
        content: "";
        display: table;
        clear: both;
    }
    .img {
        margin-right: auto;
        flex: 0 1 auto;
    }
    .search {
        width: 200px;
        height: 40px;
        line-height: 60px;
        margin-left: auto;
        margin-right: -100px;
    }
    el-menu-demo {
        margin-left:auto ;
    }
    .write-blog {
        margin:10px -150px 10px auto;
        height: 40px;
    }
    .icon {
        margin:10px 10px 10px auto;
    }
    .write-blog span {
        display: inline-block;
        margin-top: -35px;
        line-height: 40px;
    }
</style>
