<template>
<div>
    <!-- 首页面 -->
    <page pageId="home" :canLoadMore="true" ref="page"
        @load-more-action="handleLoadMore"
        @page-scroll="handlePageScroll">
       <home-header></home-header>
       <home-banner></home-banner>
       <div class="newuser-info">
            <img src="https://fuss10.elemecdn.com/3/c8/45b2ec2855ed55d90c45bf9b07abbpng.png?imageMogr/format/webp/thumbnail/!710x178r/gravity/Center/crop/710x178/"/>
       </div>
       <keep-alive>
           <home-list ref="list" @list-change="handleListChange"></home-list>
       </keep-alive>
       
    </page>

    <!-- 上拉时，还需要展示搜索框 -->
    <search-bar v-show="showSearchBar" :isActive="showSearchBar"></search-bar>    

    <!-- 装载子页面 -->
    <router-view></router-view>
</div>
</template>

<script>
import Page from '../../common/Page.vue'
import Header from '../../components/home/index/Header.vue'
import Search from '../../components/home/index/Search.vue'
import Banner from '../../components/home/index/Banner.vue'
import List from '../../components/home/index/List.vue'
import Vuex from 'vuex'
export default {
    components:{
        [Page.name]:Page,
        [Header.name]:Header,
        [Banner.name]:Banner,
        [List.name]:List,
        [Search.name]:Search
    },
    data(){
        return {
            showSearchBar:false
        }
    },
    computed:{
        ...Vuex.mapState({
            lat:state=>state.location.lat,
            lon: state=>state.location.lon
        })
    },
    methods:{

        handleListChange(){
            //刷新页面
            this.$refs.page.pageRefresh();
        },
        handleLoadMore(){
            //让list请求下一页数据,调用List.vue中的方法
            this.$refs.list.requestData(()=>{
                //请求完成,执行停止加载更多的动画,调用page.vue中的方法
                this.$refs.page.endLoadMoreAni();
            });
            //如果请求完成,就刷新滚动视图,已被刷了
        },
        handlePageScroll(y){
            //控制搜索框是否定位,y为负值,越往上越小
            if(y<-40){
                this.showSearchBar=true;
            }else{
                this.showSearchBar=false;
            }
        }
    }
    
}
</script>

<style scoped>
.newuser-info{
    width: 100%;
    box-sizing: border-box;
    padding: 5px;
}
.newuser-info img{
    width: 100%;
}
</style>

