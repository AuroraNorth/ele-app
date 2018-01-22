<template>
    <div class="and">
        <sub-page pageId="detail">
            <detail-header></detail-header>
            <detail-content></detail-content>
            <detail-list></detail-list>
            <detail-foot></detail-foot>
        </sub-page>
        <!-- 装载子页面 -->
        <router-view></router-view>
    </div>
    
</template>

<script>
import SubPage from '../../common/SubPage.vue'
import Header from '../../components/home/detail/Header'
import Content from '../../components/home/detail/Content'
import FoodList from '../../components/home/detail/FoodList'
import Foot from '../../components/home/detail/Foot'
export default {
    components:{
        [SubPage.name]:SubPage,
        [Header.name]:Header,
        [Content.name]:Content,
        [FoodList.name]:FoodList,
        [Foot.name]:Foot
    }
}
</script>

<style>
.and{
    width: 100%;
    height: 100%;
}
</style>
