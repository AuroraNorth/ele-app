<template>
    <div class="header">
        <div class="top"> <span @click="goback()">&lt;</span></div>
    </div>
</template>

<script>
export default {
    name:'detail-header',
    methods:{
        goback(){
            this.$router.back();
        }
    }
}
</script>

<style>
.top{
    width: 100%;
    height:58px;
    background-color: rgba(119,103,137,.43);
    overflow:hidden;
    
}
.top span{
    display:block;
    width: 21px;
    height: 21px;
    color:#fff;
    font-size:14px;
    transform: scaleY(2.2);
    position: absolute;
    left:10px;
    top:5px;
}
</style>
