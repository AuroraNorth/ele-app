/* page页面 */
<template>
    <div class="page" :id="pageId" ref="page">
        <div class="wrapper">
            <slot></slot>

            <!-- 显示上拉加载更多 -->
            <div v-if="canLoadMore" class="load-more" :class="{down: isDown==1}">
                <img :src="imgPath" alt="">
                <span>{{downInfo}}...</span>
            </div>
        </div>
    </div>
</template>

<script>
//改为静态引用
//import IScroll from 'iscroll'

//0 没有触发加载更多   1触发了加载更多  2 正在加载更多
const NO_TRIGGER=0;
const TRIGGER = 1;
const ACTIVE = 2;

export default {
    //接收外部传来的id
    name:'page',
    props:{
        pageId:String,
        canLoadMore:Boolean//是否加载更多的功能
    },
    data(){
        return{
            isDown:NO_TRIGGER,
            downInfo:'上啦可以加载更多',
            imgPath:'/static/img/arrow.png'
        }
    },
    methods:{
        //需要让页面刷新滚动
        pageRefresh(){
            this.pageScroll.refresh();
        },
        endLoadMoreAni(){
            this.isDown=NO_TRIGGER;
            this.downInfo="上拉可以加载更多";
            this.imgPath='/static/img/arrow.png';
        }
    },
    mounted(){
        //创建页面的滚动式图
        this.pageScroll=new IScroll(this.$refs.page,{
            probeType:3,
            bounce:true,
            click: true, //打开点击事件
				
			tap: true, //移动端的点击事件
			
			//mouseWheel: true, //支持鼠标滚轮事件
			
			scrollbars: true, //滚动条
			
			fadeScrollbars: true,//不滚动时滚动条淡出
	
        });
        //让页面可以滚动
        this.pageScroll.on('scrollStart',this.pageRefresh);
        /* ()=>{
            //pageScroll.refresh();
            this.pageRefresh;
        }) */
        if(this.canLoadMore){
            //上拉加载更多,判断距离为40
            //监听滚动时
            this.pageScroll.on('scroll',()=>{
                if(this.isDown!=ACTIVE){
                    let maxScrollY=this.pageScroll.maxScrollY;
                    let y=this.pageScroll.y;
                    if(y>maxScrollY){
                        this.downInfo='上拉可以加载更多';
                        this.isDown=NO_TRIGGER;
                    }
                    else if(y<=maxScrollY){
                        this.downInfo='释放立即加载更多';
                        this.isDown=TRIGGER;
                    }
                }
            });

            //滚动结束时
            this.pageScroll.on('scrollEnd',()=>{
                if(this.isDown!=ACTIVE){
                    let maxScrollY=this.pageScroll.maxScrollY;
                    //滚动的距离,为负值
                    let y=this.pageScroll.y;
                    //判断是否达到加载更多的条件,没有达到条件，需要收回加载更多的提示框
                    if(y>maxScrollY&&y<maxScrollY+40){
                        //若不加40则刚好显示底部的框
                        this.pageScroll.scrollTo(0,maxScrollY+40,200);
                    }
                    //若达到了加载更多的条件,请求下一页列表数据
                    else if(y<=maxScrollY){
                        this.imgPath = '/static/img/ajax-loader.gif';
                        this.downInfo = '正在加载更多';
                        this.isDown = ACTIVE;
                        // console.log('加载更多了....');
                        // setTimeout(this.endLoadMoreAni, 2000);
                        //进行触发,让Home.vue监听
                        this.$emit('load-more-action');
                    }
                }
            })

        }

        //home组件需要监听滚动的位置,用于顶部搜索框固定定位
        this.pageScroll.on('scroll',()=>{
            this.$emit('page-scroll',this.pageScroll.y);
        })
    }
}
</script>

<style>
    .page{
        width: 100%;
        position: absolute;
        top:0;
        left: 0;
        bottom:49px;
        overflow: hidden;
    }
    .page .load-more{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;

    background: palegreen;

}
.page .load-more img{
    width: 18px;
    height: 18px;
    display: inline-block;
    transition: 200ms transform;
}
.page .load-more.down img{
    transform: rotate(180deg);
}
.page .load-more span{
    font-size: 12px;
    color: #666;
}

</style>












