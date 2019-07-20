<template>
  <div class="ad-charts-edit">

  </div>
</template>
<script>
export default {
  name: 'ad-charts-edit',
  data () {
    return {
      id: undefined
    }
  },
  mounted () {
    this.id = this.$route.params.id
  },
  methods: {
    getChartsData () {}
  },
  watch: {
    id (id) {
      id && this.getChartsData()
    }
  }
}
</script>
