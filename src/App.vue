<template>
  <div id="app">

    <el-rate v-model="rate" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" show-text text-color="#ff9900" texts="12345"></el-rate>

    <div class="split-line"></div>

    <div>
      <el-time-select v-model="time1" :picker-options="{start:'08:30', end:'15:30', step:'00:10', minTime:'08:40'}" placeholder="选择时间"></el-time-select>
      <el-time-picker v-model="time2" is-range :picker-options="{selectableRange: '18:30:00 - 20:30:00'}" placeholder="时间选择"></el-time-picker>
      <el-date-picker v-model="date1" type="date" placeholder="选择日期"></el-date-picker>
      <el-date-picker v-model="date1" type="datetime" placeholder="选择日期时间"></el-date-picker>
      <el-date-picker v-model="date2" type="datetimerange" placeholder="日期时间选择"></el-date-picker>
    </div>

    <div class="split-line"></div>

    <div>
      <span>{{slider}}</span>
      <el-slider v-model="slider" :step="5" show-stops show-input></el-slider>
    </div>

    <div class="split-line"></div>

    <el-switch v-model="switch1" width="100" on-text="开启" off-text="关闭"></el-switch>
    <el-switch v-model="switch1" on-color="green" off-color="red"></el-switch>

    <div class="split-line"></div>

    <div>
      <el-select filterable allow-create v-model="select2" placeholder="清选择">
        <el-option v-for="item in options" :label="item.label" :value="item.value" :disabled="item.disabled">
          <!--<span style="float: left">{{item.label}}</span>
          <span style="float: right; color: #8492a6; font-size: 12px">{{item.value}}</span>-->
        </el-option>
      </el-select>
      <el-select multiple v-model="select3" placeholder="清选择">
        <el-option v-for="item in options" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <span>{{select2}}</span>
    </div>

    <div class="split-line"></div>

    <el-input-number v-model="number1" step="2" min="1" max="10" @change="handleChanged"></el-input-number>

    <div class="split-line"></div>

    <div>
      <span>选择 {{radio}}</span>
      <el-radio v-model="radio" label="1">单选1</el-radio>
      <el-radio v-model="radio" label="2">单选2</el-radio>
      <el-radio v-model="radio" label="3" disabled>单选3</el-radio>
    </div>
    <el-radio-group v-model="radio2" @change="handleChanged">
      <el-radio-button label="3">单选3</el-radio-button>
      <el-radio-button label="5">单选5</el-radio-button>
      <el-radio-button label="8">单选8</el-radio-button>
    </el-radio-group>

    <div class="split-line"></div>

    <div>
      {{checked?"Moustache风格选中":"Moustache风格取消"}}
      <el-checkbox v-model="checked" checked>
        <span v-if="checked">已选中</span>
        <span v-else>未选中</span>
      </el-checkbox>
      <el-checkbox v-model="checked" disabled>禁用</el-checkbox>
    </div>
    <span>{{checked2}}</span>
    <el-checkbox-group v-model="checked2" @change="handleChanged">
      <el-checkbox label="1">复选1</el-checkbox>
      <el-checkbox label="2">复选2</el-checkbox>
      <el-checkbox label="3">复选3</el-checkbox>
    </el-checkbox-group>

    <div class="split-line"></div>

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

    <div class="split-line"></div>

    <el-input v-model="input" placeholder="请输入内容" icon="delete" @click="handleDeleteClick"></el-input>
    <el-input v-model="input" placeholder="请输入内容">
      <el-select clearable v-model="select" slot="prepend" placeholder="请选择">
        <el-option label="餐厅名" value="1"></el-option>
        <el-option label="订单号" value="2"></el-option>
        <el-option label="用户电话" value="3"></el-option>
      </el-select>
      <el-button slot="append" icon="search"></el-button>
    </el-input>
    <el-input type="textarea" :rows="3" v-model="input" placeholder="请输入内容" icon="delete" @click="handleDeleteClick"></el-input>
    <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" v-model="input" placeholder="请输入内容" icon="delete" @click="handleDeleteClick"></el-input>

    <div class="split-line"></div>

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
  .split-line {
    width: 100%;
    height: 2px;
    background: blue;
    margin-top: 4px;
    margin-bottom: 4px;
  }
  .el-select {
    width: 110px;
  }
  .el-row {
    margin: 20px;
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
        checked2: ['2'],
        input: '',
        select: '',
        select2: '',
        select3: [],
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        number1: 1,
        switch1: true,
        slider: 1,
        time1: '',
        time2: new Date(2016, 9, 10, 18, 40),
        date1: '',
        date2: '',
        rate: null,
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
      handleChanged(value) {
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