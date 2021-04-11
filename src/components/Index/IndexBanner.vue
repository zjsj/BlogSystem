<template>
    <div>
        <el-carousel
                class="banner"
                :interval="4000"
                type="card"
                height="200px">
            <el-carousel-item
                    v-for="item in imgDatas"
                    :key="item">
                <img width="100%" height="100%" :src="item.src"/>
<!--                <img :src="item.src" width="100%" height="100%" object-fit="cover">-->
            </el-carousel-item>
        </el-carousel>

    </div>
</template>

<script>
const imgDatas = [
  {
    id: '1',
    name: 'HTML',
    src: require('@/assets/html.png')
    // url: '/categories/1000000000'
  },
  {
    id: '2',
    name: 'CSS',
    src: require('@/assets/css.png')
    // url: '/categories/1100000000'
  },
  {
    id: '3',
    name: 'JavaScript',
    src: require('@/assets/javascript.png')
    // url: '/categories/1200000000'
  },
  {
    id: '4',
    name: 'Vue',
    src: require('@/assets/vue.png')
    // url: '/categories/1403000000'
  },
  {
    id: '5',
    name: 'NodeJS',
    src: require('@/assets/nodejs.jpg')
  },
  {
    id: '6',
    name: 'MySQL',
    src: require('@/assets/mysql.jpg')
  }
]

export default {
  name: 'IndexBanner',
  data () {
    return {
      imgDatas
    }
  }
}
</script>

<style scoped>
    /*.banner {*/
    /*    position: relative;*/
    /*    overflow: hidden;*/
    /*    margin:20px 0;*/
    /*}*/
    /*@media all and (min-width: 900px) {*/
    /*    .wrap {*/
    /*        height: 280px;*/
    /*    }*/
    /*}*/
    .banner{
        margin:20px 0;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
