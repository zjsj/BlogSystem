<template>
    <div>
        <ul>
            <li v-for="(item,index) in lists"
                @click="choose(index)"
                :class="{active: index == current}"
                :key="index">
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Test',
  current: '',
  data () {
    return {
      lists: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },
  methods: {
    choose (index) {
      this.current = index
    }
  }
}
</script>

<style scoped>
    li.active {
        background: green;
    }
</style>
