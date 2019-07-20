<template>
  <div id="root">
    <ad-header />
    <ad-Content v-if="login"/>
  </div>
</template>

<script>
import adHeader from './components/layout/ad-header'
import adContent from './components/layout/ad-content'

import {
  DATE_TIME
} from '@/assets/js/http/global.config'

import {
  postAuthorizations
} from '@/assets/api'

export default {
  name: 'App',
  components: {
    adHeader,
    adContent
  },
  data () {
    return {
      login: true,
      loginInfo: {
        uid: '',
        username: ''
      }
    }
  },
  mounted () {
    const ADX_USER = sessionStorage.getItem('AD_USER')

    try {
      const localToken = JSON.parse(ADX_USER)

      if (localToken && localToken.time) {
        const gap = Date.now() - localToken.time

        if (gap && gap > 0 && (gap / DATE_TIME > 30)) {
          this.getUserToken()
          return
        }

        this.login = !this.login
      } else {
        this.getUserToken()
      }
    } catch (e) {}
  },
  methods: {
    async getUserToken () {
      if (this.login) {
        return
      }

      const res = await postAuthorizations(this.loginInfo)
      if (res && res.code === 0 && res.data) {
        const token = res.data.access_token
        const data = JSON.stringify({
          user: res.data,
          time: Date.now()
        })

        sessionStorage.setItem('AD_TOKEN', token)
        sessionStorage.setItem('AD_USER', data)

        this.login = !this.login
      }
    }
  }
}
</script>
