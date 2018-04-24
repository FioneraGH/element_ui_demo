<style scoped>
</style>

<template>
  <div id="app">
    <el-table
      :data="list"
      border
      stype="width: 100%;"
    >
      <el-table-column
        type="index"
        label="#"
        width="36"
      />

      <el-table-column
        width="100"
        key="name"
        label="name"
      >
        <template slot-scope="scope">
          {{ scope.name }}
        </template>
      </el-table-column>

      <el-table-column
        width="100"
        key="desc"
        label="desc"
      >
        <template slot-scope="scope">
          {{ scope.desc }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'app',
    date() {
      return {
        list: [
          {
            id: 0,
            name: 'test1',
            desc: 'desc2'
          },
          {
            id: 1,
            name: 'test3',
            desc: 'desc4'
          },
          {
            id: 2,
            name: 'test5',
            desc: 'desc6'
          }
        ]
      }
    }
  }
</script>
