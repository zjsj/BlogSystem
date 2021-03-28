<template>
    <section>
        <header class="header">
            <h4>推荐文章</h4>
            <router-link class="header-link" to="">更多文章</router-link>
        </header>
        <ul class="main">
            <li class="main-item">
                <p class="main-item-txt">基于什么的滴滴代驾词汇词根几行的</p>
                <span class="main-item-category">css</span>
            </li>
            <li class="main-item">
                <p class="main-item-txt">基于什么的滴滴代驾词汇词根几行的</p>
                <span class="main-item-category">js</span>
            </li><li class="main-item">
            <p class="main-item-txt">基于什么的滴滴代驾词汇词根几行的</p>
            <span class="main-item-category">html</span>
        </li>
            <li class="main-item">
                <p class="main-item-txt">基于什么的滴滴代驾词汇词根几行的</p>
                <span class="main-item-category">vue</span>
            </li>
            <li class="main-item">
                <p class="main-item-txt">基于什么的滴滴代驾词汇词根几行的</p>
                <span class="main-item-category">nodejs</span>
            </li>

        </ul>
        <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
        </el-pagination>
    </section>
</template>

<script>
export default {
  name: 'IndexPost'
}
</script>

<style scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 4px;
        line-height: 20px;
        cursor: default;
    }

    .header-link {
        font-size: 1em;
    }
    .main{
        padding:0 20px;
     }
    .main-item {
        position: relative;
        margin: 10px 0;
        border-radius: 4px;
        text-align: center;
        color: white;
        background-position: 50% 50%;
        background-size: cover;
        background-repeat: no-repeat;
        list-style: none;
        padding: 0 20px;
        margin-top: 0;
    }

    .main-item-txt {
        position: relative;
        box-sizing: border-box;
        padding: 0 30px;
        border-radius: 4px;
        overflow: hidden;
        font-size: 1.5em;
        line-height: 100px;
        text-overflow: ellipsis;
        white-space: nowrap;
        background-color:  #0074d9;
        cursor: pointer;
        margin: 0 auto
    }

    .main-item-category {
        position: absolute;
        bottom: 10px;
        right: 40px;
        display: inline-block;
        padding: 2px 4px;
        border-radius: 6px;
        font-size: 1em;
        line-height: 1.5;
        background: rgba(7, 17, 27, .4);
    }
</style>
