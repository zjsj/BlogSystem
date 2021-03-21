<template>
    <div>
        <p>标题</p>
        <input type="text" v-model="title">
        <p>内容</p>
        <input type="text" v-model="content">
        <div class="btn" @click="add()">添加</div>
    </div>
</template>

<script>
import store from '@/store/index'
export default {
  props: {
    path: String
  },
  name: 'Add',
  store,
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    add () {
      store.commit('addItem', {
        title: this.title,
        content: this.content
      })
      this.title = ''
      this.content = ''
      this.$router.push('/list')
    }
  }
}
</script>

<style scoped>

</style>
