<template>
    <div class="mes-index__view">
        <al-title text="默认展示" />
    </div>
</template>
<script>
export default {
    name: 'default-view',
    
    mounted() {
        this.setCrumbs();
    },

    activated() {
        this.setCrumbs();
    },

    methods: {
        setCrumbs() {
            this.$store.commit('setCrumbs', 'MES2.0');
        }
    }
    
}
</script>
