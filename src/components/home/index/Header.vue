<template>
<header class="header">
    <div class="location">西部硅谷</div>
    <search-bar></search-bar>
</header>
</template>

<script>
import Search from './Search'
export default {
    name:'home-header',
    components:{
        [Search.name]:Search
    }
}
</script>

<style scoped>
.header{
    width: 100%;
    height: 80px;
    background-image: linear-gradient(90deg,#0af,#0085ff);
     overflow: hidden;
}
.location{
    width: 100%;
    height: 17px;
    padding-left: 14px;
    margin-top: 17px;
   color:#fff;
}

</style>
