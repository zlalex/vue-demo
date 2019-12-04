<template>
  <div class="al-aside">
    <!-- defaultActive 与 :index 值对应 -->
    <el-menu text-color="#333" active-text-color="#2693ff" :default-active="defaultActive">
      <div
        v-for="menu in menuList"
        :index="menu.children ? menu.name : menu.path"
        :key="menu.name"
        :is="menu.children ? 'el-submenu': 'el-menu-item'"
        @click="()=>{menu.path && goRoute(menu.path)}"
      >
        <template v-if="menu.children">
          <template slot="title">
            <i class="icon" :class="menu.icon"></i>
            <span>{{ menu.name }}</span>
          </template>
          <el-menu-item
            v-for="item in menu.children"
            :key="item.path"
            :index="item.path"
            @click="goRoute(item.path)"
          >
            {{ item.name }}
          </el-menu-item>
        </template>

        <template v-else>
          <i class="icon" :class="menu.icon"></i>
          <span slot="title">{{ menu.name }}</span>
        </template>
      </div>
    </el-menu>
  </div>
</template>
<script>
import menuList from '@/router/menu'

export default {
  name: 'al-aside',

  computed: {
    defaultActive() {
      const path = this.$route.path
      return path
    }
  },

  data() {
    return {
      menuList
    }
  },

  methods: {
    goRoute(path) {
      const current = this.$route.path
      if (current !== path) {
        path && this.$goRoute(path)
      }
    }
  }
}
</script>
