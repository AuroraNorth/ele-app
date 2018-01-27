<template>
    <div class="hot-search" v-if="isShow">
         <h3>热门搜索 </h3>
         <ul class="hot-list">
             <li class="hot-item" v-for="(item,index) in hotList" :key="index">
                 {{item.word}}
             </li>
         </ul>
    </div>
</template>

<script>
import {getHotSearch} from '../../../service/HomeService'
import Vuex from 'vuex'
export default {
    name:'hot-search',
    data(){
        return{
            isShow:true,
            hotList:[]
        }
    },
    computed:{
        ...Vuex.mapState({
            lat:state=>state.location.lat,
            lon:state=>state.location.lon
        })
    },
    methods:{
        requestData(){
            getHotSearch(this.lat,this.lon)
            .then(result=>{
                console.log(result)
                this.hotList=result;
            })
        }
    },
    mounted(){
        if(this.lat&&this.lon){
            this.requestData();
        }
        this.$center.$on('show',(val)=>{
            if(val){
             //若keyword有值,则该组件隐藏
              this.isShow=false;  
            }else{
                this.isShow=true;
            }
            
        })
    },
    beforeDestroyed(){
        this.$center.$off('show');
    }
}
</script>

<style>
h3{
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding-left:11px;
    position: relative;
    color:#666;
    box-sizing: border-box;
}
.hot-item{
    padding:9px;
    background:#f7f7f7;
    border-radius:3px;
    font-size:12px;
    color:#666;
    float: left;
    margin:11px 0 0 11px;
}
</style>
