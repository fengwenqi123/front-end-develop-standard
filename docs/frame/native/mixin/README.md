---
prev: ../sidebar/
next: ../../mix/introduce/
---

# 混入

## 简述

混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。

## 说明
当编写后台管理页面时， 你只需要关注三点：后台接口地址，请求参数以及返回数据。其他的增删改查以及分页查询这类交互都已经由mixin帮你完成了。

## 作用数据管理页面的mixin
```html
export default {
  data() {
    return {
      readonly: false,
      title: null,
      selectData: '',
      checked: false,
      addDialog: false,
      page: {
        pageSize: 10,
        pageNum: 1,
        total: 0
      },
      row: null,
      tableHeight: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.windowResize()
    })
    window.onresize = () => this.windowResize()
  },
  methods: {
    // 监听窗口变化
    windowResize() {
      if (document.querySelector('.table_search')) {
        const table_search = document.querySelector('.table_search').offsetHeight
        const fenye = document.querySelector('.fenye').offsetHeight
        this.tableHeight = `calc(100% - ${table_search + fenye + 24}px)`
      }
    },
    // 当选择项发生变化时会触发
    handleSelectionChange(val) {
      this.selectData = val
      if (this.selectData.length === this.tableData.length) {
        this.checked = true
      } else {
        this.checked = false
      }
    },
    // 全选
    toggleSelection(checked) {
      this.$refs.multipleTable.toggleAllSelection(checked)
    },
    search() {
      this.page.pageNum = 1
      this.list()
    },
    add() {
      this.title = '新增'
      this.addDialog = true
    },
    handleClickInfo(row) {
      this.title = '查看'
      this.row = row
      this.readonly = true
      this.addDialog = true
    },
    handleClickModify(row) {
      this.title = '编辑'
      this.row = row
      this.addDialog = true
    },
    cancel() {
      this.handleClose()
      this.list()
    },
    submit() {
      this.handleClose()
      this.list()
    },
    handleClose() {
      this.addDialog = false
      this.row = null
      this.readonly = false
    },
    // 删除
    del() {
      if (this.selectData.length === 0) {
        this.$message({
          message: '请先选择'
        })
        return
      }
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var num = []
        this.selectData.forEach((item, index) => {
          num.push(item.id)
        })
        this._delt(num)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消操作'
        })
      })
    },
    // 启用
    Enable() {
      if (this.selectData.length === 0) {
        this.$message({
          message: '请先选择'
        })
        return
      }
      this.$confirm('此操作即将启动, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var num = []
        this.selectData.forEach((item, index) => {
          num.push(item.id)
        })
        this._enable(num)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消操作'
        })
      })
    },
    // 禁用
    Disable() {
      if (this.selectData.length === 0) {
        this.$message({
          message: '请先选择'
        })
        return
      }
      this.$confirm('此操作即将启动, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var num = []
        this.selectData.forEach((item, index) => {
          num.push(item.id)
        })
        this._disable(num)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消操作'
        })
      })
    }
  }
}
```