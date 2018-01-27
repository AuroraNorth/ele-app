<template>
    <div class="star">
        <span v-if="score>=1" v-for="(item,index) in score" :key="index">
            <img src="../../../../static/img/star_01.jpg" alt="">
        </span>
        <span v-show="show">
            <img src="../../../../static/img/star_02.jpg" alt="">
        </span>
        <span v-if="gray>=1" v-for="(item1,index1) in gray"  :key1="index1">
            <img src="../../../../static/img/star_03.jpg" alt="">
        </span>
    </div>
    
</template>

<script>

export default {
    name:'list-star',
    data(){
        return{
            score:0,
            show:false,
            gray:0
        }
    },
    props:{
       starInfo:Number
    },
    mounted(){
        this.score=Math.floor(this.starInfo);
        if(this.score<Math.round(this.starInfo)){
            //大于零点五显示半颗星
            this.show=true;
            if(4-this.score>0){
                this.gray=4-this.score;
            }
        }else{
            this.show=false;
            if(5-this.score>0){
                this.gray=5-this.score;
            }
        }
        
    }
}
</script>

<style scoped>
.star{
    float:left;
}
img{
    width: 16px;
    height: 16px;
}
</style>
