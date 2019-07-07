<template>
    <div class="al-layout__content">
        <al-crumbs-title v-model="$store.state.crumbs.crumbsTitle" alClass="mes-crumbs__title"/>
        <keep-alive>
            <router-view/>
        </keep-alive>
    </div>
</template>
<script>
export default {
    name: 'al-content',
}
</script>
