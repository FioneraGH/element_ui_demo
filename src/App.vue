<template>
  <div id="app">
    <el-button @click="startHacking" icon="search">{{ msg }}</el-button>
    <el-button type="success" disabled="true">图标在右 <i class="el-icon-edit"></i></el-button>
    <el-button-group>
      <el-button type="primary" size="mini">主色调</el-button>
      <el-button type="warning" :plain="true" size="mini">覆盖色</el-button>
    </el-button-group>
    <el-button type="text" icon="share" size="large">文字</el-button>
    <el-button-group>
      <el-button type="primary" icon="loading">图标加载</el-button>
      <el-button type="primary" :loading="true">加载状态</el-button>
    </el-button-group>

    <div>
      <span>选择 {{radio}}</span>
      <el-radio v-model="radio" label="1">单选1</el-radio>
      <el-radio v-model="radio" label="2">单选2</el-radio>
      <el-radio v-model="radio" label="3" disabled>单选3</el-radio>
    </div>
    <el-radio-group v-model="radio2" @change="radioGroupChanged">
      <el-radio-button label="3">单选3</el-radio-button>
      <el-radio-button label="5">单选5</el-radio-button>
      <el-radio-button label="8">单选8</el-radio-button>
    </el-radio-group>

    <div>
      {{checked?"Moustache风格选中":"Moustache风格取消"}}
      <el-checkbox v-model="checked" checked>
        <span v-if="checked">已选中</span>
        <span v-else>未选中</span>
      </el-checkbox>
      <el-checkbox v-model="checked" disabled>禁用</el-checkbox>
    </div>
    <span>{{checked2}}</span>
    <el-checkbox-group v-model="checked2" @change="radioGroupChanged">
      <el-checkbox label="1">复选1</el-checkbox>
      <el-checkbox label="2">复选2</el-checkbox>
      <el-checkbox label="3">复选3</el-checkbox>
    </el-checkbox-group>

    <el-input v-model="input" placeholder="请输入内容" icon="delete" @click="handleDeleteClick"></el-input>
    <el-input v-model="input" placeholder="请输入内容">
      <el-select v-model="select" slot="prepend" placeholder="请选择">
        <el-option label="餐厅名" value="1"></el-option>
        <el-option label="订单号" value="2"></el-option>
        <el-option label="用户电话" value="3"></el-option>
      </el-select>
      <el-button slot="append" icon="search"></el-button>
    </el-input>
    <el-input type="textarea" :rows="3" v-model="input" placeholder="请输入内容" icon="delete" @click="handleDeleteClick"></el-input>
    <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" v-model="input" placeholder="请输入内容" icon="delete" @click="handleDeleteClick"></el-input>

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
  .el-select {
    width: 110px;
  }
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
        msg: '搜索',
        radio: 1,
        radio2: 3,
        checked: true,
        checked2: ["2"],
        input: "",
        select: ""
      }
    },
    methods: {
      startHacking() {
        this.$notify({
          title: '通知',
          message: '运行成功',
          duration: 2500
        })
      },
      radioGroupChanged(value) {
        alert(value);
      },
      handleDeleteClick(ev) {
        this.input = "";
      }
    }
  }
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>