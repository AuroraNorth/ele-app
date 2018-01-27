<template>
    <div class="foot" id="foot">
        <div class="up">

        </div>
        <div class="down">
            <span class="circle">{{count}}</span>
            <img class="detail-5" src="../../../../static/img/detail_05.png" alt="">
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'
export default {
    name:'detail-foot',
    computed:{
        ...Vuex.mapState({
            count:state=>state.cart.count
        })
    }
}
</script>

<style scoped>
.foot{
    width:100%;
    position:absolute;
    left:0;
    bottom:0;
}
.up{
    width: 100%;
    height: 17px;
    background:#fffad7;
}
.down{
    position: relative;
    width: 100%;
    height: 40px;
    background-color: #505051;
}
.down .detail-5{
    position: absolute;
    left:10px;
    top:-8px;
}
.down .circle{
    display: block;
    position: absolute;
    left:39px;
    top:-9px;
    width: 16px;
    height: 16px;
    font-size:12px;
    line-height: 16px;
    text-align:center;
    color:#fff;
    border-radius: 100%;
    background:#ff4c15;
    z-index:1;
}
</style>
