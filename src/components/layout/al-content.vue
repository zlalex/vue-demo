<template>
  <section class="al-content">
    <al-aside />
    <div class="al-main">
      <al-breadcrumb />
      <router-view />
    </div>
  </section>
</template>
<script>
import alAside from '../widgets/al-aside'
import alBreadcrumb from '../widgets/al-breadcrumb'

export default {
  name: 'al-content',

  components: {
    alAside,
    alBreadcrumb
  }
}
</script>
