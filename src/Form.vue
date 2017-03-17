<template>
  <div id="app">
    <el-tag v-for="tag in tags"
            :closable="true"
            :type="tag.type">
      {{tag.name}}
    </el-tag>
  
    <div class="split-line" />
  
    <el-tree :data="node"
             :props="defaultProps"
             @node-click="submitForm('ruleForm')"></el-tree>
  
    <div class="split-line" />
  
    <el-form :model="ruleForm"
             :rules="rules"
             ref="ruleForm"
             label-width="100px">
      <el-form-item label="活动名称"
                    prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="submitForm('ruleForm')">立即创建</el-button>
        <el-badge :value="12">
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-badge>
      </el-form-item>
    </el-form>
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
</style>

<script>
export default {
  data() {
    return {
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: 'gray' },
        { name: '标签三', type: 'primary' },
        { name: '标签四', type: 'success' },
        { name: '标签五', type: 'warning' },
        { name: '标签六', type: 'danger' }
      ],
      node: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      ruleForm: {
        name: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>