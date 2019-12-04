<template>
  <header class="al-header">
    <div class="al-logo">
      <!-- <img src="" alt="" /> -->
      LOGO
    </div>
    <div class="user-name" v-if="userName">{{ userName }}</div>
  </header>
</template>
<script>
export default {
  name: 'al-header',

  data() {
    return {
      userName: '管理员'
    }
  },

  mounted() {}
}
</script>
<style lang="stylus" scoped>
.al-header{
  display flex
  align-items center
  padding 11px 35px
}
.al-logo{
  width 130px
  height 28px
  line-height 28px
  color #fff
}
.user-name {
  margin-left auto
  color #fff
}
</style>
