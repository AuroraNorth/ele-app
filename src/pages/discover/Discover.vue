//发现页面
<template>
    <page pageId="discover">
        <app-header title="发现" @goBack="goBackAction()"></app-header>
        <div class="iscroll">
            <div class="inner">
                <discover-content></discover-content>
                <discover-recommend></discover-recommend>
            </div>
        </div>
    </page>
</template>

<script>
import Page from '../../common/Page.vue'
import AppHeader from '../../common/AppHeader'
import Content from '../../components/discover/index/Content'
import Recommend from '../../components/discover/index/Recommend'
export default {
    components:{
        [Page.name]:Page,
        [Content.name]:Content,
        [Recommend.name]:Recommend,
        [AppHeader.name]:AppHeader
    },
    methods:{
        //返回上一页
        goBackAction(){
            this.$router.back();
        },
        pageRefresh(){
            this.pageScroll.refresh();
        }     
    },
    mounted(){
        //创建页面的滚动式图
        this.pageScroll=new IScroll('.iscroll',{
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
        /* ()=>{
            //pageScroll.refresh();
            this.pageRefresh;
        }) */
            
    }
}
</script>

<style scoped>
.iscroll{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>

