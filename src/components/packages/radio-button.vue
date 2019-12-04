<template>
  <div class="al-radio--button al-flex-box">
    <span
      v-for="(el, i) in data"
      :key="i"
      @click="handleChange(el)"
      class="al-button--radio"
      :class="{
      active: value === el.value
    }"
    >{{el.name}}</span>
  </div>
</template>
<script>
export default {
  name: 'al-radio-button',

  props: {
    data: Array,
    value: [Number, String]
  },

  methods: {
    handleChange(el) {
      this.$emit('input', el.value)
      if (el.value !== this.value) {
        this.$emit('radioChange', el)
      }
    }
  }
}
</script>
<style lang="stylus" scoped></style>
