<template>

    <div class="food-list">
        
        <div class="wrapper">  
            <ul class="vertical-name">
                <li class="list-name" v-for="(vert,index3) in listData" :key="index3">
                    <p>{{vert.name}}</p>
                </li>
            </ul>
            <div id="scroll">       
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
                                <p class="comment"><span class="count">月售{{single.rating_count}}份</span> <span class="satisfy">好评率{{single.satisfy_rate}}%</span></p>
                                <p class="choice"><span class="price">¥{{single.specfoods[0].price}}</span><span class="original-p" v-if="single.specfoods[0].original_price">¥{{single.specfoods[0].original_price}}</span><img @click="decreaseAction(count)" v-show="isShow" class="picde" src="../../../../static/img/detail_04.png" alt=""><span v-show="isShow" class="num">{{count}}</span><img @click="addAction(count)" class="picad" src="../../../../static/img/detail_02.png" alt=""></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
         </div>
    </div>
 
</template>

<script>
import SubPage from '../../../common/SubPage'
import {getSellerMenu} from '../../../service/HomeService'
import Vuex from 'vuex'
export default {
    name:'detail-list',
    data(){
        return{
            listData:[],
            isShow:false
            
        }
    },
    components:{
        [SubPage.name]:SubPage
    },
    computed:{
        ...Vuex.mapState({
            count:state=>state.cart.count
        })
    },
    watch:{
        count(){
            this.$store.dispatch('cart/modifYCountAction',{
                count:this.count
            })
        }
    },
    methods:{
        requestData(){
            getSellerMenu(this.$route.params.id)
            .then((result)=>{
                console.log(result)
                this.listData=result;
            })           
        },
        addAction(num){
            num++;
            this.$store.dispatch('cart/modifYCountAction',{
                count:num
            })
            //this.count=++num;
            this.isShow=true;
        },
        decreaseAction(num){
            if(num>0){
                num--;
                this.$store.dispatch('cart/modifYCountAction',{
                count:num
                })
                if(this.count==0){
                    this.isShow=false;
                }
            }else{
                this.count=0
                this.isShow=false;
            }
        },
        //需要让list小页面刷新滚动
        pageRefresh(){
            this.pageScroll.refresh();
        }     
    },
    mounted(){
        this.requestData();

        //创建list小页面页面的滚动视图
        this.pageScroll=new IScroll('#wrapper',{
            /* indicators: {
                el: '#foot',
                
                speedRatioY: 0.4,
            }, */
            probeType:3,
            bounce:true,
            click: true, //打开点击事件
				
			tap: true, //移动端的点击事件
			
			mouseWheel: true, //支持鼠标滚轮事件
			
			scrollbars: true, //滚动条
			
			fadeScrollbars: true,//不滚动时滚动条淡出
	
        });
        //让页面可以滚动
        this.pageScroll.on('scrollStart',this.pageRefresh);
    }
}
</script>

<style scoped>
.wrapper{
    overflow: hidden;
    margin-top:35px;
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
#scroll{
    width: 74%;
    height:100%;
    float:right;
    overflow:hidden;
}
.list{
   
    width: 100%;
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
    color:#999;
}
.list .right .count{
    display: inline-block;
    width:60px;
}
.list .right .price{
    color:#f60;
    font-size:14px;
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
.comment{
    font-size:12px;
    line-height: 12px;
}
.choice{
    position: relative;
}
.choice .num{
    position: absolute;
    top:2px;
    right:35px;
}
.price img{
    width: 18px;
    height: 18px;
}
.picde{
    position: absolute;
    top:2px;
    right:46px;
}
.picad{
    position: absolute;
    top:2px;
    right:9px;
}
</style>
