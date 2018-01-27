<template>
    <div class="recommend">

        <h2>-为你推荐-</h2>
        <p class="taste">你的口味,我都懂得</p>
        <ul class="list">
            <li class="food-item" v-for="(item,index) in dataList" :key="index">
                <img :src="item.img" alt="">
                <div class="info">
                    <h3>{{item.name}}</h3>
                    <p class="p1">
                        <span>月售{{item.month_sales}}份</span>
                        <span>好评率{{item.satisfy_rate}}%</span>
                    </p>
                    <p class="p2"><span class="price">{{item.price}}</span><span class="o-price">{{item.original_price}}</span></p>
                    <p class="p3"><span>{{item.restaurant}}</span></p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import {getDiscoverRecommend} from '../../../service/DiscoverService'
import Vuex from 'vuex'
export default {
    name:'discover-recommend',
    data(){
        return{
            dataList:[]
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
            getDiscoverRecommend(this.lat,this.lon,0,12)
            .then(result=>{
                this.dataList=result;
                console.log(result)
            })
        }
    },
    mounted(){
        if(this.lat&&this.lon){
            this.requestData();
        }    
    }
}
</script>

<style scoped>
.recommend{
     overflow: hidden;
}
.recommend h2{
     font-size:16px;
     text-align:center;
}
.recommend .taste{
     font-size:12px;
     color:#999;
     text-align:center;
}
.food-item{
    float: left;
    margin-left:7px;
    margin-top:7px;
}
.food-item .info{
    width: 147px;
    padding:8px;
    padding-top:0;
    box-sizing: border-box;
    border:1px solid #eee;
    border-top:none;
}
.food-item h3{
    font-size:13px;
    width: 139px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
} 
.food-item .p1{
    font-size:12px;
    height:12px;
    line-height: 12px;
    color:#666;
}
.food-item .p3{
    font-size:12px;
    height:28px;
    line-height: 28px;
    color:#999;
    width: 131px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
    border-top:1px dotted #eee;
}
.price{
    color:#f60;
    font-size:14px;
    font-weight:bolder;
}
.o-price{
    font-size:12px;
    text-decoration: line-through;
}
</style>

