<template>
    <div class="content">
        <div class="seller-detail">
            <div class="logo"><img :src="detailData.img"/></div>
            <div class="info">
                <h2><span class="brand">品牌</span>{{detailData.name}}</h2>
                <p class="month-sell"> <span>{{detailData.rating}}</span><span>月售:{{detailData.count}}</span> <span>商家配送</span><span>约{{detailData.time}}分</span> <span>{{detailData.distance}}米</span></p>
                <p class="welcome">欢迎光临，用餐高峰期请提前下单,谢谢</p>
            </div>
        </div>
        
    </div>
</template>

<script>

import {getSellerDetail} from '../../../service/HomeService'

export default {
    name:'detail-content',
    data(){
        return{
            
            detailData:[]
        }
    },
    methods:{
        
        requestData(){
            getSellerDetail(this.$route.params.id,'h5',22.54286, 114.059563)
            .then((results)=>{
                console.log(results)
                this.detailData=results;
            })
        }

    },
    mounted(){
        this.requestData();
    }
}
</script>

<style scoped>
.logo{
    position: relative;
    height:25px;
}
.logo img{
    display:block;
    width: 56px;
    height: 56px;
    position:absolute;
    left:40%;
    top:-39px; 
}
.info{
   margin-left: 19px;
   transform:scale(0.9)
}
.month-sell{
    font-size:12px;
    margin-left: 18px;
}
.month-sell span{
    margin-left:10px;
}
.welcome{
    font-size:12px;
    height:12px;
    line-height:12px;
    text-align:center;
    color:rgb(172, 167, 167);
    margin-top:5px;
}
.brand{
    display: inline-block;
    width: 26px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    border-radius: 2px;
    background:#ffee0b;
    color:#6f3f15;
    font-size:12px;
    margin-right:4px;
}
.info h2{
    font-size: 18px;
    color: #333;
}
</style>
