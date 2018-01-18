<template>
    <div ref="banner" class="banner swiper-container">
        <div class="swiper-wrapper">
            <ul ref="slide" class="swiper-slide" v-for="(data,index) in bannerData" :key="index">
                <li class="item" v-for="(bannerItem,index) in data" :key="index">
                    <img :src="bannerItem.img"/>
                    <h3>{{bannerItem.name}}</h3>
                </li>
            </ul>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination" v-show="bannerData.length>1"></div>
    </div>
</template>

<script>
//输出的不是默认值,接收时要用{}
import {getBannerData} from '../../../service/HomeService'

export default {
    name:'home-banner',
    data(){
        return{
            bannerData:[]
        }
    },
    methods:{
        //把请求数据封装成方法
        initData(){
            //请求banner数据
            //getBannerdata()返会的是promise
            getBannerData('22.625871','113.83794',[
                    'main_template',
                    'favourable_template',
                    'svip_template'
            ])
            .then(result=>{
                //将请求到的数据放在this.data中，在dom中展示
                this.bannerData=result;
                //banner数据更新,更新swiper
                this.$nextTick(()=>{
                    this.bannerSwiper.update();
                })

            })
       }
    },
    mounted(){
        //创建swiper对象,挂靠在组件对象上
        this.bannerSwiper=new Swiper(this.$refs.banner,{
            pagination:'.swiper-pagination',
        });
        //请求数据
        this.initData();
    }
}
</script>

<style>
.banner{
    width: 100%;
}
.swiper-slide{
    overflow: hidden;
}
.swiper-slide .item{
    width: 25%;
    float:left;
    margin-bottom: 10px;
}
.swiper-slide .item img{
    width: 60%;
    margin: 0 auto;
}
.swiper-slide .item h3{
    font-size: 12px;
    font-weight: normal;
    color: #666;
    text-align: center;
}
.swiper-pagination-bullet{
    background: #666;
    
}
</style>
