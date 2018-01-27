<template>       
    <sub-page pageId="detail">
        <div id="wrapper">
            <div id="scro">
                <detail-header></detail-header>
                <detail-content></detail-content>
                <detail-list></detail-list> 
                <detail-nav v-show="!isShow"></detail-nav>              
            </div>
        </div>
        
        <detail-foot></detail-foot>
        <detail-nav v-show="isShow" :isActive="isShow"></detail-nav> 
    </sub-page>
              
</template>

<script>
import SubPage from '../../common/SubPage.vue'
import Header from '../../components/home/detail/Header'
import Content from '../../components/home/detail/Content'
import FoodList from '../../components/home/detail/FoodList'
import NavBar from '../../components/home/detail/NavBar'
import Foot from '../../components/home/detail/Foot'
export default {
    data(){
        return{
            isShow:false
        }
    },
    components:{
        [SubPage.name]:SubPage,
        [Header.name]:Header,
        [Content.name]:Content,
        [FoodList.name]:FoodList,
        [Foot.name]:Foot,
        [NavBar.name]:NavBar
    },
    methods:{
        //需要让页面刷新滚动
        pageRefresh(){
            this.pageScroll.refresh();
        }        
    },
    mounted(){
        //创建页面的滚动式图
        this.pageScroll=new IScroll('#wrapper',{
            /* indicators: {
                el: '#scroll',
                
                speedRatioY: 0,
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
        /* ()=>{
            //pageScroll.refresh();
            this.pageRefresh;
        }) */
        this.pageScroll.on('scroll',()=>{
            let y=this.pageScroll.y;
            if(y<=-140){
                this.isShow=true;
            }else{
                this.isShow=false;
            }
        })    
    }
    
}
</script>

<style scoped>
#wrapper{
    width: 100%;
    height: 568px;
    overflow: hidden;
    position: relative;
}
#scro{
    overflow:hidden;
}
</style>
