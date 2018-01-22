/* 子页面 */
<template>
    <div class="subpage" :id="pageId">
        <slot></slot>
    </div>
</template>

<script>
export default {
    //接收外部传来的id
    name:'sub-page',
    props:{
        pageId:String
    }
}
</script>

<style>
    .subpage{
        width: 100%;
        
        position: absolute;
        top:0;
        left: 0;
        bottom:0;
        z-index:5;
        background:#fff;
        /* background:#fff; */
    }
</style>












