<template>
  <div id="app">
   
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  
    <tabs></tabs>
  
  
  </div>
</template>
 
<script>
//vuex.mapState,vuex.mapGetters写在computed中
import Tabs from './common/Tabs'
export default {
    components:{
      [Tabs.name]:Tabs
    },
    created(){
      //因为模块定义了独立命名空间,要加模块名
      this.$store.dispatch('location/initLocation');
    }
}
</script>

<style>

</style>
