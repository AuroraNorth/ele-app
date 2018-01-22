//发现页面
<template>
    <page pageId="discover">
        <app-header title="发现" @goBack="goBackAction()"></app-header>
        <discover-content></discover-content>
        <div></div>
        <discover-recommend></discover-recommend>
    </page>
</template>

<script>
import Page from '../../common/Page.vue'
import AppHeader from '../../common/AppHeader'
import Content from '../../components/discover/index/Content'
import Recommend from '../../components/discover/index/Recommend'
export default {
    components:{
        [Page.name]:Page,
        [Content.name]:Content,
        [Recommend.name]:Recommend,
        [AppHeader.name]:AppHeader
    },
    methods:{
        //返回上一页
        goBackAction(){
            this.$router.back();
        }
    }
}
</script>

<style>


</style>

