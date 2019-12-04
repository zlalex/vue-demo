<template>
  <div id="app">
    <al-header />
    <al-content v-if="login" />
  </div>
</template>

<script>
import alHeader from './components/layout/al-header'
import alContent from './components/layout/al-content'

export default {
  name: 'App',

  components: {
    alHeader,
    alContent
  },

  data () {
    return {
      login: true
    }
  },

  mounted () {
  },

  methods: {
  }
}
</script>
