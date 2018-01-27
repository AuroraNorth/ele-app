<template>
<div class="content">
    <div class="blue">
        <div class="log">
            <img class="left2" src="../../../../static/img/log_06.png" alt="">
            <div class="right">
                <p class="p1">登录/注册</p>
                <p class="p2"><img src="../../../../static/img/log02_03.png" alt=""><span>登录后享受更多特权</span></p>
            </div>
            <img class="small-arrow" src="../../../../static/img/log_09.png" alt="">
        </div>
    </div>
    <div class="wrapper">
        <div class="l-r">
            <div class="b-left"><img src="../../../../static/img/log_14.png" alt=""><span>红包</span></div>
            <div class="b-right"><img src="../../../../static/img/log_16.png" alt=""><span>金币</span></div>
        </div>
        
        <div class="first">
            <img src="../../../../static/img/log_20.png" alt="">
            <span>我的地址</span>
            <img class="gray-arrow" src="../../../../static/img/log_01.png" alt="">
        </div>
        <div class="second">
            <div>
                <img src="../../../../static/img/log_23.png" alt="">
                <span class="up">金币商城</span>
                <img class="gray-arrow" src="../../../../static/img/log_01.png" alt="">
            </div>
            <div>
                <img src="../../../../static/img/log_25.png" alt="">
                <span>分享拿5元现金</span>
                <img class="down" src="../../../../static/img/log_01.png" alt="">
            </div>
        </div>
        <div class="second">
            <div>
                <img src="../../../../static/img/log_27.png" alt="">
                <span class="up">我的客服</span>
                <img class="gray-arrow" src="../../../../static/img/log_01.png" alt="">
            </div>
            <div>
                <img src="../../../../static/img/log_29.png" alt="">
                <span>下载饿了么APP</span>
                <img class="down" src="../../../../static/img/log_01.png" alt="">
            </div>
        </div>
       
    </div>
    
</div>
    
</template>

<script>
import Api from '../../../api/index'
export default {
    name:'mine-content'
}
</script>

<style scoped>
.wrapper{
    width:100%;
    min-height:487px;
    background:#eee;
    overflow: hidden;
}
.blue{
    width:100%;
    padding:21px 0;
    background-image: linear-gradient(90deg,#0af,#0085ff);
}
.log{
    width: 100%;
    overflow: hidden;
    margin-left:15px;
    position: relative;
}
.log .small-arrow{
    position: absolute;
    right:25px;
    top:23px;
}
.left2{
    display: block;
    float:left;
    width: 51px;
    height: 51px;
}
.right{
    float:left;
    margin-left:18px;
}
.p1{
    height:36px;
    line-height:36px;
    color:#fff;
    font-size:19px;
    font-weight: bolder;
}
.p2{
    font-size:12px;
    color:#fff;
    height:12px;
    line-height:12px;
}
.p2 img{
    float: left;
}
.p2 span{
    display: block;
    height:12px;
    line-height:12px;
    float:left;
}
.l-r{
    overflow: hidden;
    border-bottom:1px solid #ececec;
}
.b-left{
    float: left;
    width: 49.8%;
    height:70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size:12px;
    background:#fff;

    
}
.b-left img{
    width: 22px;
    height: 22px;
    display: block;
}
.b-right{
    float: right;
    width: 49.8%;
    height:70px;
    font-size:12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:#fff;
}
.b-right img{
    width: 22px;
    height: 22px;
    
}
.first{
    width: 100%;
    height: 38px;
    line-height:38px;
    background:#fff;
    border-top:1px solid #ececec;
    border-bottom:1px solid #ececec;
    margin-top:8px;
    overflow: hidden;
    position: relative;
}
.first img{
    margin:10px;
    float: left;
}
.first span{
    display: block;
    height: 38px;
    line-height:38px;
    float: left;
}
.first .gray-arrow{
    position: absolute;
    right:10px;
    top:5px;
}
.second{
    width: 100%;
    height: 78px;
    line-height:38px;
    background:#fff;
    border-top:1px solid #ececec;
    border-bottom:1px solid #ececec;
    margin-top:8px;
    overflow: hidden;
    position: relative;
}
.second div{
    overflow: hidden;
}
.second img{
    margin:10px;
    float: left;
}
.second span{
    width: 88.9%;
    display: block;
    height: 38px;
    line-height:38px;
    float: left;
    
}
.up{
    border-bottom:1px solid #ececec;
}
.second .gray-arrow{
    position: absolute;
    right:10px;
    top:5px;
}
.second .down{
    position: absolute;
    right:10px;
    bottom:5px;
}
</style>
