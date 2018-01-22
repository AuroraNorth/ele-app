<template>
<header class="header">
    <div class="address" @click="addressAction()">
        <img src="../../../../static/img/log_10.png" alt="" class="pic1">
        <p>{{address}}</p>
        <img src="../../../../static/img/log_11.png" alt="" class="pic2">
    </div>
    <search-bar></search-bar>
</header>
</template>

<script>
import Search from './Search'
import Vuex from 'vuex'
import {getLocation} from '../../../service/HomeService'
export default {
    name:'home-header',
    components:{
        [Search.name]:Search
    },
    data(){
        return{
            address:''
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
            //发送请求当前地址
            getLocation(this.lat,this.lon)
            .then(result=>{
                this.address=result;
                //把刚获得的文字地址发给vuex
                this.$store.dispatch('location/modifyAddressAction',{
                    address:this.address
                })
            })
        },
        //进入选择地址页面
        addressAction(){
            this.$router.push('/home/address');
        }
    },
    mounted(){
        //初始化请求
        if(this.lat && this.lon){
            this.requestData();
        }
        //App.vue页面加载创建dom时,想模块提交action,actions调用初始化未知的方法,获得纬度和经度
        //监听纬度发生变化,且有值,则向服务器发送经度和纬度来获取相应的位置
        this.$watch('lat',()=>{
            if(this.lat&&this.lon){
               this.requestData();                
            }
        })
    }
}
</script>

<style scoped>
.header{
    width: 100%;
    height: 80px;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    overflow: hidden;
}
.header .address{
    width: 100%;
    height: 17px;
    margin:9px 0;
    position: relative;
}
.header .address p{
    width: 40%;
    height: 17px;
    color:#fff;
    margin-left:30px;
    font-size:15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
}
.header .address .pic1{
    position:absolute;
    left:13px;
    top:3px;
}
.header .address .pic2{
    position:absolute;
    left:160px;
    top:7px;
}
</style>
