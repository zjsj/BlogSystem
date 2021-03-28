<template>
    <div>
        <Header class="header"></Header>
        <IndexBanner/>
        <IndexTopic/>
        <IndexPost/>
        <Footer class="footer"></Footer>
    </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import IndexBanner from '@/components/Index/IndexBanner'
import Footer from '@/components/Footer/Footer'
import IndexTopic from '@/components/Index/IndexTopic'
import IndexPost from '@/components/Index/IndexPost'

export default {
  name: 'Index',
  components: {
    Header,
    IndexBanner,
    IndexTopic,
    IndexPost,
    Footer
  }
}
</script>

<style scoped lang="scss">
    $blue : #1875e7;
    .header{
        background-color: $blue;
        margin: 0;
        padding: 0;
    }
    .footer{
        background-color: $blue;
        height: 100px;
    }
</style>
