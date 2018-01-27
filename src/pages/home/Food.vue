<template>
    <div>
        <sub-page pageId="detail">
            <app-header title="美食" @goBack="goBackAction()"></app-header>
            <food-nav></food-nav>

        </sub-page>
        <!-- 装载子页面 -->
        <router-view></router-view>
    </div>
</template>

<script>
import SubPage from '../../common/SubPage.vue'
import AppHeader from '../../common/AppHeader'
import Nav from '../../components/home/food/Nav'
import Content from '../../components/home/food/Content'
export default {
    components:{
        [SubPage.name]:SubPage,
        [AppHeader.name]:AppHeader,
        [Nav.name]:Nav,
        [Content.name]:Content
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
