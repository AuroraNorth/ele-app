<template>
    <header class="app-header">
    <span class="left" @click="leftAction()"><img src="../../static/img/log_03.png" alt=""></span>
    <h1>{{title}}</h1>
    </header>
</template>

<script>
export default {
    name:'app-header',
    props:{
        title:String
    },
    methods:{
        leftAction(){
            this.$emit('goBack');
            this.$emit('refresh');
        }
    }
}
</script>

<style scoped>
.app-header{
    width: 100%;
    height: 44px;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    position: relative;
}
.app-header h1{
    width: 100%;
    height: 100%;
    line-height: 44px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    font-weight: normal;
}
.left{
    display:block;
    width: 21px;
    height: 20px;
    position: absolute;
    left:10px;
    top:13px;
}
</style>
