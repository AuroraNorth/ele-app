<template>
    <nav class="tabs one-top-px">
        <router-link class="tab" v-for="(tabItem,index) in tabsData"
        :key="index" :to="tabItem.path">
           <i class="iconfont" :class="tabItem.url"></i>
           <span>{{tabItem.title}}</span>

        </router-link>
    </nav>
</template>
<script>
export default {
    name:'tabs',
    data(){
        return{
            tabsData:[
                {title:'首页',path:'/home',url:'icon-icon-test3'},
                {title: '发现', path: '/discover',url:'icon-icon-test2'},
                {title: '订单', path: '/order',url:'icon-icon-test'},
                {title: '我的', path: '/mine',url:'icon-icon-test1'},
            ]
        }
    }
}
</script>

<style scoped>
    .tabs{
        width:100%;
        height: 49px;
        position:absolute;
        left: 0;
        bottom:0;
    }
   .tabs .tab{
        float:left;
        width:25%;
        height: 49px;
        line-height:49px;
        text-align:center;
        color:#8e8e93;
        font-size:12px;
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        background:#fff;
    }
    .tabs .tab .iconfont{
        display: block;
        width: 20px;
        height: 20px;
        font-size:16px;
        position: relative;
    }
    .tabs .tab .iconfont::before{
        position: absolute;
        left: 0;
        top:-16px;
    }
    .tabs .tab span{
        display: block;
        height:12px;
        line-height:12px;
    }
    .tabs .tab.router-link-active{
        color:#0089dc;
    }
</style>




