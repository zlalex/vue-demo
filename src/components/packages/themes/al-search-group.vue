<template>
    <div :class="['al-search__group', computedClass]">
        <slot/>
    </div>
</template>
<script>
export default {
    name: 'al-search-group',
    props: ['alClass'],
    computed: {
        computedClass(){
            return this.alClass ? this.alClass : ''
        }
    }
}
</script>

