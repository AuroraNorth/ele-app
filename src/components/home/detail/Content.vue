<template>
    <div class="content">
        <div class="seller-detail">
            <div class="logo"><img :src="detailData.img"/></div>
            <div class="info">
                <h2><span class="brand">品牌</span>{{detailData.name}}</h2>
                <p class="month-sell"> <span>{{detailData.rating}}</span><span>月售:{{detailData.count}}</span> <span class="delivery" v-if="detailData.mode">{{detailData.mode.text}}</span></p>
                <div class="distance">
                    <div class="left">¥0元起送 | 配送费¥{{detailData.fee}}</div>
                    <div class="right">{{detailData.distance}}米|{{detailData.time}}分</div>                   
                </div>
                <p class="welcome">欢迎光临，用餐高峰期请提前下...</p>
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
   
   transform:scale(0.9)
}
.welcome{
    font-size:12px;
    height:12px;
    line-height:12px;
    text-align:center;
    color:rgb(172, 167, 167);
    margin-top:5px;
}
</style>
