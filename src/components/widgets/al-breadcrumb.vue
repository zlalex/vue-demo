<template>
  <div class="al-breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-if="!isDirects" :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-else :to="{ path: '/dsp' }">DSP 列表</el-breadcrumb-item>
      <el-breadcrumb-item
        :to="createBreadcrumb.currentName ? { path: createBreadcrumb.parent } : {}"
        v-if="!showBreadcrumbName"
      >{{breadcrumbName}}</el-breadcrumb-item>
      <el-breadcrumb-item v-if="createBreadcrumb.currentName">{{createBreadcrumb.currentName}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
const activeNameMap = {
  a: 'AAAA',
  b: 'BBBB',
  c: 'CCCC',
  d: 'DDDD',
  e: 'EEEE',
  f: 'FFFF',
  g: 'GGGG',
  h: 'HHHH',
  i: 'IIII',
  j: 'JJJJ'
}

export default {
  name: 'al-breadcrumb',

  computed: {
    isDirects() {
      return this.breadcrumbName === 'IIII'
    },

    // 一级面包屑
    showBreadcrumbName() {
      return this.breadcrumbName === '/'
    },

    // 二级面包屑
    breadcrumbName() {
      const path = this.$route.path

      if (path) {
        const current = path.split('/').slice(1)[0]
        const breadcrumb = activeNameMap[current]

        if (breadcrumb) {
          return breadcrumb
        }
      }

      return path
    },

    // 三级面包屑[弱处理方式]
    createBreadcrumb() {
      const id = this.$route.params.id
      const path = this.$route.path
      const result = {
        parent: '',
        currentName: ''
      }

      if (
        this.breadcrumbName === 'IIII' &&
        !path.includes('directs-edit')
      ) {
        return result
      }

      switch (this.breadcrumbName) {
      case 'AAAA':
        result.parent = '/a'
        break
      case 'BBBB':
        result.parent = '/b'
        break
      case 'CCCC':
        result.parent = '/c'
        break
      case 'DDDD':
        result.parent = '/d'
        break
      case 'GGGG':
        result.parent = '/g'
        break
      case 'HHHH':
        result.parent = '/h'
        break
      case 'EEEE':
        result.parent = '/e'
        break
      case 'IIII':
        result.parent = `/i`
        break
      default:
      }

      if (id) {
        result.currentName = id.includes('create') ? '新增' : '编辑'
      }

      return result
    }
  }
}
</script>
