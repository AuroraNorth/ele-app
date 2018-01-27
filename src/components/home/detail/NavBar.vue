<template>
    <div class="navbar one-bottom-px" :class="{active:isActive}">
        <ul class="nav">
            <li><a href="#">点餐</a></li>
            <li><a href="#">评价</a></li>
            <li><a href="#">商家</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'detail-nav',
    props:{
        isActive:Boolean
    },
    /* watch:{
        passMsg(){
            console.log(this.passMsg)
            if(this.passMsg<=-140){
                this.isActive=true;
            }else{
                this.isActive=false;
            }
        }
    }, */
    mounted(){
        
    }

}
</script>

<style scoped>
.navbar{
    width:100%;
    position:absolute;
    left:0;
    top:140px;
   
    background:#fff;
}
.navbar.active{
    width:100%;
    position:absolute;
    left:0;
    top:0;
}
.nav{
    width: 100%;
    height: 35px;
}
.nav li{
    width: 33%;
    height: 35px;
    float: left;
    text-align:center;
    display:flex;
    justify-content: center
}
.nav li a{
    display: block;
    width: 30px;
    font-size: 14px;
    color:#666;
    height:35px;
    line-height: 35px;
}

</style>
