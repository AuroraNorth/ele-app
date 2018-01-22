<template>
    <div class="food-list">
        <ul class="nav">
            <li><a href="">点餐</a></li>
            <li><a href="">评价</a></li>
            <li><a href="">商家</a></li>
        </ul>
        <div class="wrapper">  
            <ul class="vertical-name">
                <li class="list-name" v-for="(vert,index3) in listData" :key="index3">
                    <p>{{vert.name}}</p>
                </li>
            </ul>       
            <ul class="list">
                <li class="list-item" v-for="(item,index) in listData" :key="index">
                    <div class="title"> <h4>{{item.name}}</h4>{{item.description}}</div>
                    <div class="info" v-for="(single,index2) in item.foods" :key="index2">
                        <div class="left">
                            <img :src="single.img" alt="">
                        </div>
                        <div class="right">
                            <h5>{{single.name}}</h5>
                            <p class="ellipsis">{{single.description}}</p>
                            <p ><span class="count">月售{{single.rating_count}}份</span> <span class="satisfy">好评率{{single.satisfy_rate}}</span></p>
                            <p><span class="price">¥{{single.specfoods[0].price}}</span><span class="original-p" v-if="single.specfoods[0].original_price">¥{{single.specfoods[0].original_price}}</span></p>
                        </div>
                    </div>
                </li>
            </ul>
         </div>
    </div>
</template>

<script>

import {getSellerMenu} from '../../../service/HomeService'
export default {
    name:'detail-list',
    data(){
        return{
            listData:[]
        }
    },
    methods:{
        requestData(){
            getSellerMenu(this.$route.params.id)
            .then((result)=>{
                console.log(result)
                this.listData=result;
            })           
        }
    },
    mounted(){
        this.requestData();
    }
}
</script>

<style scoped>
.nav{
    width: 100%;
    height: 35px;
}
.nav li{
    width: 33%;
    height: 35px;
    float: left;
    text-align:center;
    display:flex;
    justify-content: center
}
.nav li a{
    display: block;
    width: 30px;
    font-size: 14px;
    color:#666;
    height:35px;
    line-height: 35px;
}
.vertical-name{
    float:left;
    width: 23%;
}
.vertical-name .list-name{
    min-height: 42px;
    line-height:14px;
    font-size:13px;
    color:#666;
    background: rgba(250, 250, 250, .8);
    padding-left:3px;
    border-top:1px solid rgb(235, 229, 229);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
}   
.list{
    float:right;
    width: 74%;
    font-size:12px;
}
.list-item{
    margin-top:10px;
}
.list .left{
    float:left;
    width:65px;
}
.list .right{
    float:right;
    width: 152px;
}
.list .right .ellipsis{
    width: 152px;
    white-space: nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}
.list .right .count{
    display: inline-block;
    width:60px;
}
.list .right .price{
    color:#f60;
    font-size:16px;
    font-weight:bolder;
}
.list .right .original-p{
    font-size:12px;
    text-decoration: line-through;
}

.title{
    font-size:12px;
    color:#666;
    text-align:left;
}
.title h4{
    display: inline-block;
    color:#333;
    font-size:14px;
}
.list-item{
    overflow:hidden;
}
.info{
    margin-top:10px;
    overflow:hidden;
}
</style>
