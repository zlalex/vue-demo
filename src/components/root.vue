<template>
    <div class="al-layout__page mes-page element-replace">
        <keep-alive>
            <router-view/>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: 'root'
}
</script>