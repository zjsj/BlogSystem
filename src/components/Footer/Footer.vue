<template>
    <div id="footer">
        <div class="footer-left">
            <div class="footer-right-content">
                left hjgjhgjjjjjjjjjjjjjjjjjjjgf
            </div>
        </div>
        <div class="footer-right">
            <div>
                rightcbvcmhghgfhgfhddd
                fdfgdsdfdf
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
    #footer {
        width: 100%;
        height: 100px;
        margin-top: 50px;
    }
    .footer-left {
        width: 594px;
        text-align: center;
        word-wrap:break-word;
        float: left;
        line-height: 100px;
    }
    .footer-right {
        width: 595px;
        float: right;
        line-height: 100px;
        text-align: center;
    }
    .footer-right-content {
        box-sizing: border-box;
        left:0;bottom:0;right:0;top:0;
        margin: auto;
        border-right: 1px solid white;
    }
</style>
