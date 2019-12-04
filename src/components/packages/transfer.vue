<template>
  <div class="al-transfer al-flex-box">
    <div class="al-transfer--left al-transfer--item">
      <p class="al-transfer--title">{{title[0]}}</p>
      <div class="al-transfer--search al-flex-box">
        <el-select v-model="transferSelected" @change="handleSelectChange" clearable placeholder="广告位类型">
          <el-option v-for="(el,i) in displayData" :key="i" :label="el.name" :value="el.id"></el-option>
        </el-select>
        <el-input placeholder="请输入..." v-model="searchId"></el-input>
        <el-button size="small" icon="el-icon-search" @click="handleSearch"></el-button>
      </div>
      <div class="al-transfer--wrap">
        <el-checkbox-group v-if="data && data.length" v-model="checkList1">
          <el-checkbox
            style="display: block;"
            :label="`${el.id}-${el.name}`"
            v-for="(el, i) in data"
            :key="i"
          ></el-checkbox>
        </el-checkbox-group>
        <p class="al-align-center" v-else>暂无数据</p>
      </div>
      <div class="al-transfer--footer">
        <el-button round size="small" @click="checkAll">全选</el-button>
      </div>
    </div>

    <div class="al-transfer--center al-transfer--item">
      <el-button
        type="primary"
        size="small"
        round
        style="display: block; margin-bottom: 10px;"
        @click="addChecked"
      >
        添加
        <i class="el-icon-arrow-right el-icon--right"></i>
      </el-button>
      <el-button
        type="danger"
        size="small"
        round
        icon="el-icon-arrow-left"
        style="display: block;"
        @click="removeChecked"
      >移除</el-button>
    </div>

    <div class="al-transfer--right al-transfer--item">
      <p class="al-transfer--title">{{title[1]}}</p>
      <div class="al-transfer--wrap">
        <el-checkbox-group v-model="checkList2" v-if="chooseData.length">
          <el-checkbox
            style="display: block;"
            :label="`${el.id}-${el.name}`"
            v-for="(el, i) in chooseData"
            :key="i"
          ></el-checkbox>
        </el-checkbox-group>
        <p class="al-align-center" v-else>暂无数据</p>
      </div>
      <div class="al-transfer--footer">
        <el-button round size="small" @click="clearChecked">清空</el-button>
      </div>
    </div>
  </div>
</template>
<script>
const uniqueData = (data) => {
  const result = []
  const hash = {}

  data.forEach(el => {
    if (!hash[el.id]) {
      hash[el.id] = true
      result.push(el)
    }
  })

  return result
}

// 穿梭框
export default {
  name: 'al-transfer',

  props: {
    title: Array,
    data: Array,
    value: Array,
    displayData: Array
  },

  data() {
    return {
      transferSelected: '',
      searchId: '',
      checkList1: [],
      checkList2: []
    }
  },

  computed: {
    renderTransfer() {
      const result = {}
      this.data.forEach(el => {
        result[el.id] = el.name
      })

      return result
    },

    chooseData() {
      return this.value
    }
  },

  methods: {
    checkAll() {
      if (this.checkList1.length === this.data.length) {
        this.checkList1 = []
      } else {
        this.checkList1 = this.data.map(el => `${el.id}-${el.name}`)
      }
    },

    clearChecked() {
      this.checkList1 = []
      this.checkList2 = []
      this.$emit('input', [])
    },

    addChecked() {
      const result = this.checkList1.map(el => {
        return el.split('-')[0]
      })

      let data = result.map(el => {
        return {
          id: el,
          name: this.renderTransfer[el]
        }
      })
      this.emitValue(data)
    },

    removeChecked() {
      const data = this.chooseData.reduce((r, e) => {
        const check = `${e.id}-${e.name}`
        if (!this.checkList2.includes(check)) {
          r.push(e)
        }

        return r
      }, [])

      this.checkList2 = []
      this.checkList1 = data.map(el => {
        return `${el.id}-${el.name}`
      })

      this.$emit('input', data)
    },

    handleSearch() {
      this.checkList1 = []
      this.$emit('handleSearch', {
        keywords: this.searchId,
        form: this.transferSelected
      })
    },

    handleSelectChange(val) {
      if (!val) {
        this.handleSearch()
      }
    },

    emitValue(value) {
      const temp = this.value.concat(value)
      const data = uniqueData(temp)
      this.$emit('input', data)
    }
  }
}
</script>
