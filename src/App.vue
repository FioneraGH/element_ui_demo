<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <el-button @click.native="startHacking">通知</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: '欢迎使用'
      }
    },
    methods: {
      startHacking() {
        this.$notify({
          title: '通知',
          message: '运行成功',
          duration: 2500
        })
      }
    }
  }
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>