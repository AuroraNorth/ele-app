<template>
    <page pageId="mine">
        <app-header title="我的" @goBack="goBackAction()"></app-header>
        <mine-content></mine-content>

    </page>
</template>

<script>
import Page from '../../common/Page.vue'
import AppHeader from '../../common/AppHeader'
import Content from '../../components/mine/index/Content'
export default {
    components:{
        [Page.name]:Page,
        [Content.name]:Content,
        [AppHeader.name]:AppHeader
    }
}
</script>

<style scoped>

</style>

