<template>
    <div class="search-header">
        <form action="" class="form">
            <img class="img1" @click="goBack()" src="../../../../static/img/search_03.png" alt="">
            <input class="txt" v-model="keyword" type="search" placeholder="输入商家 、商品名称" >
            <h2>搜索</h2>
            <img class="img2" src="../../../../static/img/search_06.png" alt="">
        </form>
        <div v-if="keyword">
             <ul class="list-up">
                <li class="list-item" v-if="dataList.restaurants" v-for="(item,index) in dataList.restaurants" :key="index">
                    <div class="left">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="right one-bottom-px">
                        <span v-if="item.tags!=null">{{item.tags.name}}</span>
                        <span>{{item.name}}</span>
                        <span>评价{{item.rating}}</span>
                    </div>  
                </li>
            </ul>
            <ul class="list-down">
                <li class="list-word" v-if="dataList.words" v-for="(words,index2) in dataList.words" :key="index2">
                    <img src="../../../../static/img/search_06.png" alt="">
                    <span class="one-bottom-px">{{words,index2}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'
import {getSellerAndGoods} from '../../../service/HomeService'
export default {
    name:'search-header',
    data(){
        return{
            keyword:'',
            dataList:[],
            isSearch:true
        }
    },
    /* watch:{
        //监听输入的内容
        keyword(){
            this.$emit('keywordInfo',this.keyword)
        }
    }, */
    computed:{
        ...Vuex.mapState({
            lat:state=>state.location.lat,
            lon:state=>state.location.lon
        })
    },
    methods:{
        //返回上一页
        goBack(){
            this.$router.push('/home')
        },
        //请求数据
        requestData(){
            getSellerAndGoods(this.keyword,this.lat,this.lon,11)
            .then(result=>{
                this.dataList=result;
                //console.log(result)
            })
        },
        
    },
    watch:{
        //监听输入的内容
        keyword(){
            clearTimeout(this.timer);
            this.$center.$emit('show',this.keyword)
            this.timer=setTimeout(()=>{
                if(this.keyword){
                    this.requestData();
                }else{
                    this.isSearch=true;
                }
            },500);
        }
    },
}
</script>

<style scoped>
    .form{
        width:100%;
        height: 43px;
        padding-top:8px;
        box-sizing: border-box;
        overflow: hidden;
        position: relative;
    }
    .img1{
        float: left;
        margin-top:3px;
        margin-left:4px;
    }
    .txt{
        float: left;
        width: 235px;
        height: 25px;
        padding-left:28px;
        box-sizing: border-box;
        margin-left: 19px;
        background:#f8f8f8;
        border:none;
    }
    .form h2{
        float: left;
        width: 38px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        font-size:14px;
    }
    .img2{
        position: absolute;
        left:47px;
        top:15px;
    }
    ul{
        width: 100%;
        font-size: 12px;
        color:#333;
        padding:13px;
        box-sizing:border-box;
        overflow: hidden;
    }
    ul .left{
        float: left;
        height:48px;
    }
    ul .left img{
        margin-top:14px;
    }
    ul .right{
        float:right;
        width: 260px;
        height:48px;
        line-height: 48px;
    }
    .list-word{
        width: 100%;
        height: 38px;
    }
    .list-word img{
        float: left;
        width: 16px;
        height: 16px;
        margin-top:11px;
    }
    .list-word span{
        float: right;
        display: block;
        width: 270px;
        height: 38px;
        font-size: 12px;
        line-height: 38px;
    }
    .list-down{
        padding-top:0;
    }
</style>
