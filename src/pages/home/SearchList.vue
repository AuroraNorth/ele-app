<template>
    <sub-page pageId="search">
        <search-header></search-header>
        <history-search></history-search>
        <hot-search></hot-search>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    </sub-page>
</template>

<script>
import Subpage from '../../common/SubPage'
import Vuex from 'vuex'
import SearchHeader from '../../components/home/index/SearchHeader'
import HistorySearch from '../../components/home/index/HistorySearch'
import HotSearch from '../../components/home/index/HotSearch'
export default {
    name:'home-search',
    components:{
        [Subpage.name]:Subpage,
        [SearchHeader.name]:SearchHeader,
        [HistorySearch.name]:HistorySearch,
        [HotSearch.name]:HotSearch 
    },
    data(){
        return{
            keyword:'',
           
        }
    },
    methods:{
      /*   //接收子组件传来的keyword
        handleAction(result){
            this.keyword=result;
        }, */
    }
    
}
</script>

<style>
</style>