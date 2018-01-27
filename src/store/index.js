
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import locationModule from './location'
import cartCountModule from './count'
//创建仓库对象
export default new Vuex.Store({
    //给仓库配置模块
    modules:{
        //key值模块名字：在外部访问，就直接使用这个名字
        // value值模块对象
        location:locationModule,
        cart:cartCountModule
    }
})
/* const state={
    latitude:null,
    longitude:null
}

const mutations ={
    //修改维度的方法
    modifyLatitude(state,param){
        state.latitude=param;
    },
    //修改经度的方法
    modifyLongitude(state,param){
        console.log('chufale');
        state.longitude=param;
    }
}

//创建全局状态管理的仓库
//第二个store的s要大写
const store=new Vuex.Store({
    //配置仓库拥有的所有内容

     //全局状态
    // 再外部访问：组件的dom结构中$store.state   组件的js中this.$store.state
    // 外部不能直接修改state，将修改操作放在mutations
    state:state,
    //全局计算状态
    getters:{},

     // 修改全局状态方法
    // key值为修改的方法名字，value为修改state具体操作
    mutations:mutation,

    //包含了逻辑处理的代码,事件
    actions:{
        //定位时间触发
        //context也就是store,action是参数
        getLocationAction(context,action){
            context.commit('modifyLatitude',action.lat);
            context.commit('modifyLongitude',action.lon);
        }
    },

    //将状态划分成模块
    modules:{}
})

export default store;


 */