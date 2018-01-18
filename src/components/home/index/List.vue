<template>
    <ul class="seller-list">
        <li class="title"><h3>-推荐商家-</h3></li>
        <li class="seller-item one-bottom-px" v-for="(seller,index) in listData" :key="index">
            <div class="logo">
                <img :src="seller.img"/>
            </div>
            <div class="info">
                <h2><span class="brand">品牌</span>{{seller.name}}</h2>
                <p class="month-sell">{{seller.rating}}<span>月售:{{seller.recent_order_num}}</span></p>
                <div class="distance">
                    <div class="left">¥0元起送 | 配送费¥{{seller.float_delivery_fee}}</div>
                    <div class="right">{{seller.distance}}米|{{seller.order_lead_time}}分</div>                   
                </div>
                <div class="recommend">
                    <img :src="seller.recommend.image_hash" alt="">
                    <span :style="{color:seller.recommend.color}">{{seller.recommend.reason}}</span>
                </div>
                <div class="activities" v-if="seller.activities">
                    <ul class="act-list">
                        <li v-for="(act,index2) in seller.activities" :key="index2"
                            v-if="index2<2 || seller.isShow">
                            <charter-icon :name="act.icon_name" :color="act.icon_color"></charter-icon>
                            {{act.description}}
                        </li>
                    </ul>
                    <span class="btn" @click="showActAction(index)">{{seller.activities.length}}个活动</span>
                </div>
            </div>

        </li>
    </ul>
</template>

<script>
import {getHomeSeller} from '../../../service/HomeService'
import CharterIcon from '../../../common/CharterIcon'

export default {
    name:'home-list',
    components:{
        [CharterIcon.name]:CharterIcon
    },
    data(){
        return{
            //list数据,分页请求,一次请求12条数据
            listData:[],//列表数据的数据源
            limit:12//一次请求的数据总数据长度
            
        }
    },
    computed:{
        offset(){//告诉后台从哪里开始再次请求下一页数据,相当于skip
            return this.listData.length;

        }
    },
    methods:{
        requestData(callback){
            
            getHomeSeller(22.54286,114.059563,this.offset,this.limit)
            .then((result)=>{
                console.log(result)
                //从第一次进入需要家在第一页数据
                //触发滚动视图时加载更多,加载下一页数据
               
                this.listData=this.listData.concat(result);
                this.$nextTick(()=>{
                    // 请求完成，执行停止加载更多的动画
                    if(callback){
                        callback();
                    }
                });
            });
        },
        //列表展开查看活动的事件
        showActAction(index){
            this.listData[index].isShow=!this.listData[index].isShow;
            //更新视图
            this.$nextTick(()=>{
                //告诉父级Home.vue组件更新滚动,子传父,Home.vue再告诉子组件page去刷新
                this.$emit('list-change');
            })
        }
    },
    mounted(){
        this.requestData();
    }
}
</script>

<style>
.title{
    text-align:center;
    font-size:12px;
}
.seller-list{
     width: 100%;
}
.seller-item{
    box-sizing: border-box;
    padding:8px;
    display:flex;
}
.seller-item .logo{
    width: 55px;
}
.seller-item .logo img{
    width: 100%;
}
.seller-item .info{
    flex: 1;
    margin-left: 10px;
    font-size:12px;
}
.seller-item .info h2{
    font-size: 14px;
    color: #333;
}
.activities{
    position: relative;
}
.activities .btn{
    position: absolute;
    top:4px;
    right: 4px;
    font-size: 4px;
    color:#999;
    padding-right:12px;
}
.activities .btn::after{
    position: absolute;
    top: 6px;
    right: 0;
    content: '';
    display: block;
    width: 0;
    height: 0;
    border: 5px solid #999;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid transparent;
}
.act-list{
    border-top:1px dotted #ddd;
}
.act-list li{
    font-size: 12px;
    color:#666;
    line-height: 20px;
    margin-top:4px;
    
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
.month-sell{
    margin-top:8px;
}
.distance{
    overflow: hidden;
    margin-top:8px;
}
.left{
    float:left;
    color:#666;
    
}
.right{
    float:right;
    color:#666;
}
.recommend{
    margin:8px 0 4px 0; 
}
/* .font-color{
    color:#e8470b;
} */
</style>
