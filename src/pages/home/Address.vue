//选择地址,重新定位页面
<template>
    <sub-page pageId="address">
        <app-header title="请选择收货地址" @goBack="goBackAction()"></app-header>
        <form action="" class="form">
            <img src="../../../static/img/log_02.png" alt="">
            <input type="search" v-model="keyword" class="inp" placeholder="请输入地址">
        </form>  
        <div v-show="!isSearch"> 
            <p class="p1">当前地址</p>
            <p class="p2">
                {{address}}
                <img src="../../../static/img/log_50.png" alt="" srcset="">
            </p>
        </div>
        <ul v-show="isSearch" class="address-list">
            <li class="address-item one-bottom-px" v-for="(item,index) in addressList" :key="index"
                @click="selectionAction(index)">
                <h4>{{item.name}}</h4>
                <p>{{item.address}}</p>
            </li>
        </ul>       
    </sub-page>
</template>

<script>
import Subpage from '../../common/SubPage'
import AppHeader from '../../common/AppHeader'
import {searchAddressList} from '../../service/HomeService'
import Vuex from 'vuex'
export default {
    components:{
        [Subpage.name]:Subpage,
        [AppHeader.name]:AppHeader
    },
    data(){
        return{
            keyword:'',
            isSearch:false,
            //装在地址的数据源
            addressList:[],
            limit:20
        }
    },
    computed:{
        ...Vuex.mapState({
            lat:state=>state.location.lat,
            lon:state=>state.location.lon,
            address:state=>state.location.address
        }),
        //offset指的是跳过多少条
        offset(){
            return this.addressList.length;
        }
    },
    //监听若在外面的话用$watch
    watch:{
        //监听输入的内容
        keyword(){
            //用户在500ms内没有输入内容，才发请求
            clearTimeout(this.timer);
            this.timer=setTimeout(()=>{
                if(this.keyword){
                    this.requestData();
                    this.isSearch=true;
                }else{
                    this.isSearch=false;
                }
            },500);
        }
    },
    methods:{
        //返回上一页
        goBackAction(){
            this.$router.back();
        },
        //搜索地址请求事件
        //watch中监听调用了
        requestData(){
            searchAddressList(this.keyword,this.offset,this.limit,this.lat,this.lon)
            .then(result=>{
                this.addressList=result;
            })
        },
        //选择地址的事件,点击触发
        selectionAction(index){
            console.log(this.addressList[index]);
            //修改全局的地址相关的状态
            this.$store.dispatch('location/modifyLocationAction',{
                lon:this.addressList[index].lon,
                lat: this.addressList[index].lat,
                address: this.addressList[index].name
            });
            //返回上一页
            this.goBackAction();
        }
    }

}
</script>

<style scoped>
.form{
    width: 100%;
    height: 48px;
    background:#fff;
    position: relative;
}
.form img{
    position: absolute;
    left:23px;
    top:18px;
}
.form .inp{
    width: 91.8%;
    height: 30px;
    background:#f4f4f4;
    margin:8px 14px;
    border:none;
    padding-left:28px;
    box-sizing: border-box;
    
}
#address{
    background:#f4f4f4;
}
.p1{
    width: 100%;
    height:34px;
    color:#777;
    line-height:30px;
    font-size:12px;
    padding-left:13px;
}
.p2{
    width: 100%;
    height:38px;
    line-height:38px;
    background:#fff;
    color:#333;
    font-size:12px;
    padding-left:13px;
    position: relative;
}
.p2 img{
    position: absolute;
    right:27px;
    top:12px;
}
</style>
