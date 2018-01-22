<template>
    <div class="nav">
        
    </div>
</template>

<script>
import {getFoodNavData} from '../../../service/HomeService'
export default {
    name:'food-nav',
    data(){
        return{
            listData:[]
        }
    },
    methods:{
        requestData(){
            getFoodNavData(20004689,114.059563,22.54286,h5)
            .then((result)=>{
                this.listData=this.listData.concat(result);
            })
        }
    },
    mounted(){
        this.requestData();
    }
}
</script>

<style>

</style>
