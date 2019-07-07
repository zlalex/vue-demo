<template>
    <p :class="['al-crumbs__title', computedClass]">{{value}}</p>
</template>
<script>
export default {
    name: 'al-crumbs-title',
    props: ['value', 'alClass'],
    computed: {
        computedClass(){
            return this.alClass ? this.alClass : ''
        }
    }
}
</script>
