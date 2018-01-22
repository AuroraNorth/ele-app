<template>

    <div class="content">
        <ul class="content-list">
            <li class="content-item" v-for="(item,index) in contentData" :key="index">
               <a href="#">
                    <p :style="{color:item.title_color}" class="title">{{item.title}}</p>
                    <p>{{item.subtitle}}</p>
                    <img :src="item.main_pic_hash" alt="">
               </a>
            </li>
            
        </ul>
        
        <img class="big-pic" src="https://fuss10.elemecdn.com/b/6d/656006edcd86033a1b32b23ddea37jpeg.jpeg?imageMogr/format/webp/">
       
        
    </div>
</template>

<script>
import {getDiscoverData} from '../../../service/DiscoverService'
export default {
    name:'discover-content',
    data(){
        return{
            contentData:[]
        }
    },
    methods:{
        requestData(){
            getDiscoverData(1,0,22.54286,114.059563)
            .then((result)=>{
                console.log(result)
                this.contentData=result;
                
            });
        }
    },
     mounted(){
        this.requestData();
    }
}
</script>

<style>
.content-list{
    width: 100%;
}
.content-item{
    width: 50%;
    height: 80px;
    float:left;
    position: relative;
    padding:20px 10px;
    box-sizing: border-box;
}
.content-item p{
    width: 50%;
    font-size:12px;
    color:#999;
}
.content-item .title{
    margin-bottom:5px;
    font-size:14px;
}
.content-item img{
    position: absolute;
    right:10px;
    bottom:0;
}
.content-item:nth-of-type(1){
    height: 160px;
}
.content-item:nth-of-type(1) img{
    height: 75px;
    width: 75px;
}

.big-pic{
    width: 100%;
    margin:5px 0;
}
</style>