<template>
    <div class="nav-wrapper">
        <div class="nav">
            <ul class="nav-list">
                <li class="nav-item" v-for="(item,index) in listData" :key="index">
                    {{item.name}}
                </li>
            </ul>   
        </div>
        <ul class="nav-choice">
            <li>综合排序</li>
            <li>距离最近</li>
            <li>会员领红包</li>
            <li>筛选</li>
        </ul>
        <div class="list-wrapper">
            <home-list :emitAction="true"></home-list>
        </div>
        
    </div>
    
</template>

<script>
import {getFoodNavData} from '../../../service/HomeService'
import Vuex from 'vuex'
import List from '../../../components/home/index/List'

export default {
    name:'food-nav',
    components:{
        [List.name]:List
    },
    data(){
        return{
            listData:[]
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
            getFoodNavData(20004689,this.lon,this.lat,'h5')
            .then((result)=>{
                this.listData=result;
            })
        },
        pageRefresh(){
            this.pageScroll.refresh();
        },
        sellerRefresh(){
            this.sellerScroll.refresh();
        }
    },
    mounted(){
        if(this.lat&&this.lon){
             this.requestData();
        };
        this.pageScroll=new IScroll('.nav',{
            probeType:3,
            bounce:true,
            click: true, //打开点击事件
            scrollX: true,
            scrollY: false,
			tap: true, //移动端的点击事件			
			mouseWheel: true, //支持鼠标滚轮事件			
			scrollbars: true, //滚动条			
			fadeScrollbars: true,//不滚动时滚动条淡出
        });
        //让页面可以滚动
        this.pageScroll.on('scrollStart',this.pageRefresh);
        //让列表滚动
        this.sellerScroll=new IScroll('.list-wrapper',{
            probeType:3,
            bounce:true,
            click: true, //打开点击事件
            scrollY: true,
            scrollX: false,
			tap: true, //移动端的点击事件			
			mouseWheel: true, //支持鼠标滚轮事件			
			scrollbars: true, //滚动条			
			fadeScrollbars: true,//不滚动时滚动条淡出
        });
        this.sellerScroll.on('scrollStart',this.sellerRefresh);
    }
}
</script>

<style scoped>
.nav-wrapper{
    height: 524px;
    position: relative;
    overflow:hidden;
    /* touch-action: none;   */
}
.app-header{
    position:absolute;
    left:0;
    top:0;
}
.nav{
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:34px;
    overflow:hidden;  
}
.nav-list{
    
    min-width: 220%;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    position: absolute;
    padding-left:5px;
}
.nav-list .nav-item{
    float: left;
    margin-right: 24px;
    height: 34px;
    line-height: 34px;
    font-size:12px;
    color:#fff;
    opacity:0.7;
    border-bottom:1px solid #fff;
}
.nav-list .active{
    color:#fff;
    border-bottom:1px solid #fff;
    opacity:1;
}
.nav-choice{
    position:absolute;
    left:0;
    top:34px;
    width: 100%;
    height: 34px;
    
}
.nav-choice li{
    float: left;
    font-size:12px;
    width: 25%;
    height:34px;
    line-height: 34px;
    text-align:center;
}
.list-wrapper{
    margin-top: 68px;
    width: 100%;
    height: 524px;
    overflow:hidden;
}
#reco{
    display:none;
    background:red;
}
    

</style>
