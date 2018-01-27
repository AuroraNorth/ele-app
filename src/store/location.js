//配置模块
const state={
    lat:null,
    lon:null,
    address:''  
};

const mutations={
    modifyLat(state,param){
        state.lat=param;
    },
    modifyLon(state,param){
        state.lon=param;
    },
    modifyAddress(state,param){
        state.address=param;
    }
};

const actions={
    //获得经度和纬度
    //因为参数在该方法了接收,第二个参数省略了
    initLocation(module){
        //执行定位
        /* navigator.geolocation.getCurrentPosition(
            function(position){
                console.log(position)
            },
            function(error){
                console.log('error')
            }
        ) */
        setTimeout(()=>{
            let lon = '113.844314';
            let lat = '22.631697';
            module.commit('modifyLat',lat);
            module.commit('modifyLon',lon);
        },0);
    },
    modifyAddressAction(module,param){
        module.commit('modifyAddress',param.address)
    },
    modifyLocationAction(module,param){
        //重新手动选择位置
        module.commit('modifyLon', param.lon);
        module.commit('modifyLat', param.lat);
        module.commit('modifyAddress', param.address);
    }
};

const locationModule={
    //拥有独立的命名空间
    namespaced:true,
    state,
    mutations,
    actions
}

export default locationModule;
