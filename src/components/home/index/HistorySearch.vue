<template>
    <div class="history-search" v-if="isShow">
         <h3>历史搜索 <img class="delete" src="../../../../static/img/search_11.png" alt=""></h3>
    </div>
   
</template>

<script>
export default {
    
    name:'history-search',
    data(){
        return{
            isShow:true
        }
    },
    mounted(){
        this.$center.$on('show',(val)=>{
            if(val){
             //若keyword有值,则该组件隐藏
              this.isShow=false;  
            }else{
                this.isShow=true;
            }
            
        })
    },
    beforeDestroyed(){
        this.$center.$off('show');
    }
}
</script>

<style>
h3{
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding-left:11px;
    position: relative;
    color:#666;
    box-sizing: border-box;
}
.delete{
    position: absolute;
    right:12px;
    top:16px;
}
</style>
