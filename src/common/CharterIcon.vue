//小图标'特,首'的样式
<template>
    <span class="icon" :style="{background:'#'+color}">{{name}}</span>
</template>

<script>
export default {
    name:'charter-icon',
    props:{
        name:String,
        color:String
    }
}
</script>

<style scoped>
.icon{
    color:#fff;
    border-radius: 2px;
    font-size: 12px;
    padding:1px 1px 0px;
    line-height:12px;
}
</style>
