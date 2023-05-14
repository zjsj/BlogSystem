<template>
    <div>
        <li v-for="(item,index) in pageLists"
        :key = "index">
            {{item.title}}-{{item.content}}
        </li>
    </div>
</template>

<script>
import store from '@/store/index'
export default {
  name: 'List',
  store,
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    pageLists () {
      return store.state.lists
    }
  }
}
</script>

<style scoped>
  div {
    color: red;
  }
</style>
