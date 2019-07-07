<template>
    <div class="al-layout__header al-clearfix">
        <div class="mes-logo al-fl" @click="$goRoute('/index')">
            LOGO
        </div>

        <div class="mes-member al-fr" @click="$goRoute('/login')">
            MEMBER
        </div>
    </div>
</template>
<script>
export default {
    name: 'al-header'
}
</script>
