<template>
    <page pageId="order" >
        <app-header title="发现" @goBack="goBackAction()"></app-header>
        <img class="people" src="//fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png">
        <h4>登陆后查看外卖订单</h4>
        <button>立即登录</button>
    </page>
</template>

<script>
import Page from '../../common/Page.vue'
import AppHeader from '../../common/AppHeader'
export default {
    components:{
        [Page.name]:Page,
        [AppHeader.name]:AppHeader
    }
}
</script>

<style scoped>

.people{
    width: 62.5%;
    height:62.5% ;
    margin-top:19%;
    margin-left:19%;
}
h4{
    width: 153px;
    height: 20px;
    line-height: 20px;
    margin:20px auto;
    font-size:16px;
    color:#999;
}
button{
    width: 120px;
    height: 39px;
    line-height:39px;
    background:#56d176;
    margin-left:32%;
    font-size:13px;
    color:#fff;
}
</style>

