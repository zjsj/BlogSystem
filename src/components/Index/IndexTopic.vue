<template>
    <section>
        <header class="header">
            <h4>专题推荐</h4>
            <router-link to="">更多专题</router-link>
        </header>
        <ul class="main">
            <li class="item">
                <dl>
                    <dt>css效果</dt>
                    <dd :class="dl-txt">实现css各种效果</dd>
                </dl>
            </li>
            <li class="item">
                <dl>
                    <dt>继承</dt>
                    <dd :class="dl-txt">不理解继承，无法理解js</dd>
                </dl>
            </li>
            <li class="item">
                <dl>
                    <dt>表单</dt>
                    <dd :class="dl-txt">分享思路与方法</dd>
                </dl>
            </li>
            <li class="item">
                <dl>
                    <dt>作用域</dt>
                    <dd :class="dl-txt">深入理解作用域</dd>
                </dl>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
  name: 'IndexTopic'
}
</script>

<style scoped>
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 4px;
        line-height: 10px;
        cursor: default;
    }
    .main {
        display: flex;
        flex-wrap: wrap;
        min-height: 176px;
        padding: 0 20px;
        margin-top: 0;
    }
    .item {
        box-sizing: border-box;
        width: calc(50% - 20px);
        padding: 10px;
        margin: 10px;
        border-radius: 6px;
        line-height: 2;
        color: #fff;
        background: #0074d9;
        box-shadow: 0 4px 16px 0 #0074d9;
        cursor: pointer;
        list-style: none;
    }
    .dl-txt {
        font-size: 1em;
        text-indent: 1em;
    }
</style>
