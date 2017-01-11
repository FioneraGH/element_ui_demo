<template>
  <div id="app">
    <div>
      <el-button @click="startHacking" icon="search">{{ msg }}</el-button>
      <el-button type="success" disabled="true">图标在右 <i class="el-icon-edit"></i></el-button>
      <el-button-group>
        <el-button type="primary" size="mini">主色调</el-button>
        <el-button type="warning" :plain="true" size="mini">覆盖色</el-button>
      </el-button-group>
      <el-button type="text" icon="share" size="large">文字</el-button>
      <el-button type="primary" icon="loading">图标加载</el-button>
      <el-button type="primary" :loading="true">加载状态</el-button>
    </div>
    <el-row class="el-row">
      <el-col :span="24">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
    </el-row>
    <el-row class="el-row" :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
    <el-row class="el-row" type="flex" justify="space-around">
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="3">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3">
        <i class="el-icon-loading"></i>
      </el-col>
    </el-row>
  </div>
</template>

<style>
  .el-row {
    margin:20px
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>

<script>
  export default {
    data() {
      return {
        msg: '搜索'
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