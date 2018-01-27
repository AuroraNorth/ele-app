//配置购物车数量模块
const state={
    id:null,
    count:0
};

const mutations={
    modifyCount(state,param){
        state.count=param;
    }
}

const actions={
    modifYCountAction(module,param){
        module.commit('modifyCount',param.count);
    }
}

const cartCountModule={
    //拥有独立的命名空间
    namespaced:true,
    state,
    mutations,
    actions
}

export default cartCountModule;

