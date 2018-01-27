//处理服务,发送请求
import axios from 'axios'
import Api from '../api'
import {handleImage} from '../util/handleImage'
/* let path=Api.BANNER_URL+'latitude=22.54286&longitude=114.059563&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template'
        axios.get(path)
        .then((response)=>{
            console.log('请求成功li');
            response.data[0].entries.map(item=>{
             info=`<li>${item.name}</li>`
            });
        })
        .catch((error)=>{`
          console.log('请求失败了')
        }) */
//输出的不是默认值,接收时要用{}

//1.请求banner的函数
export function getBannerData(lat,lon,tmp){
    //用promise处理异步回调请求(因为异步导致数据返回不出去)
    return new Promise((resolve,reject)=>{
        //创建get,请求banner数据
        axios.get(Api.BANNER_URL,{
            params:{
                'latitude':lat,
                'longitude':lon,
                'templates':tmp
            }
        })
        //请求成功
        .then((response)=>{
            //遍历轮播图数据
            let newData=response.data[0].entries.map(item=>{
                return{
                    name:item.name,
                    img:handleImage(item.image_hash, 90)
                }
            });
            //处理数据,八个数据放一页,每八个数据作为数组的一个元素
            let resultData=[];
            while(newData.length>0){
                let result=newData.splice(0,8);
                resultData.push(result);
            }
            //成功时会执行resolve,在外一层执行.then
            //resolve(newData)包裹这数据,传给调用者
            resolve(resultData);
            
        })
        //.then,因为promise被return了,可在最外层.then
        //请求失败
        .catch((error)=>{

        })

    })
}

//2.请求首页推荐商家的函数
export function getHomeSeller(lat, lon, offset, limit){
    return new Promise((resolve,reject)=>{
        axios.get(Api.SELLER_URL,{
            params:{
                latitude: lat,
                longitude: lon,
                offset,
                limit,
                extras: ['activities', 'tags'],
                extra_filters: 'home',
                rank_id: '984553df2830414c9058eaff4b63bbaa',
                terminal: 'h5'
            }
        })
        .then(response=>{
            //console.log(response)
            let result =response.data.items.map(item=>{
                return{
                    img:handleImage(item.restaurant.image_path,90),
                    name:item.restaurant.name,
                    rating:item.restaurant.rating,
                    recent_order_num:item.restaurant.recent_order_num,
                    distance:item.restaurant.distance,
                    order_lead_time:item.restaurant.order_lead_time,
                    float_delivery_fee:item.restaurant.float_delivery_fee,
                    id:item.restaurant.id,
                    activities:item.restaurant.activities?item.restaurant.activities.map(act=>{
                        return{
                            icon_name:act.icon_name,
                            icon_color:act.icon_color,
                            description:act.description,

                        }
                    }):null,
                    isShow:false,
                    //piecewise_agent_fee:item.restaurant.piecewise_agent_fee
                    recommend:{
                        color:item.restaurant.recommend?item.restaurant.recommend.color:'',
                        reason:item.restaurant.recommend?item.restaurant.recommend.reason:'',
                        image_hash:item.restaurant.recommend.image_hash?handleImage(item.restaurant.recommend.image_hash, 10):''
                    },
                    delivery_mode:item.restaurant.delivery_mode?item.restaurant.delivery_mode:null,
                }
            })
            
            resolve(result);
        })
        .catch(error=>{

        })
    })
}


//3.子页面food
export function getFoodNavData(ent,lon,lat,term){
    
    return new Promise((resolve,reject)=>{
        
        axios.get(Api.FOOD_URL,{
            params:{
                entry_id:ent,
                longitude:lon,
                latitude:lat,
                terminal:term
            }
        })
        .then((response)=>{
            console.log(response)
            let result=response.data.map(item=>{
                return{
                    id:item.id,
                    name:item.name,
                    category_ids:item.restaurant_category_ids
                }
            })
            resolve(result);
        })
        .catch((error)=>{
            
        })
    })
    
}

//4.商家菜单详情
export function getSellerMenu(id){
   return new Promise((resolve,reject)=>{
       axios.get(Api.SELLER_MENU,{
            params:{
                restaurant_id:id
            }
       })
       .then(response=>{
           console.log(response);
           let result=response.data.map(item=>{
               return{
                    description:item.description,
                    grey_icon_url:handleImage(item.grey_icon_url,90),
                    icon_url:handleImage(item.icon_url,90),
                    //选规格
                    is_selected:item.is_selected,
                    name:item.name,
                    type:item.type ,
                    foods:item.foods.map(foods=>{
                        return{
                            activity:foods.activity,
                            attributes:foods.attributes?foods.attributes:null,
                            description:foods.description,
                            img:handleImage(foods.image_path,65),
                            min_purchase:foods.min_purchase,
                            month_sales:foods.month_sales,
                            name:foods.name,
                            pinyin_name:foods.pinyin_name,
                            rating:foods.rating,
                            rating_count:foods.rating_count,
                            satisfy_count:foods.satisfy_count,
                            satisfy_rate:foods.satisfy_rate,
                            //特价商品细化
                            specfoods:foods.specfoods.map(spe=>{
                                return{
                                    price:spe.price,
                                    original_price:spe.original_price,
                                    recent_rating:spe.recent_rating
                                }
                            }),
                            /* price:foods.specfoods.price,
                            original_price:foods.specfoods.original_price,
                            recent_rating:foods.specfoods.recent_rating, */
                            //又包含规格和尺寸
                            specs:foods.specfoods.specs,
                            tips:foods.tips
                        }

                    }) 
               }
           })
           resolve(result);
       })
       .catch(error=>{

       })
   })
}


//5.商家详情
export function getSellerDetail(id,term,lat,lon){
    return new Promise((resolve,reject)=>{
        axios.get(Api.SELLER_DETAIL+'/'+id,{
             params:{
                 
                extras: ['activities', 'albums','license','identification','qualification'],
                terminal:term,
                latitude:lat,
                longitude:lon
             }
        })
        .then(response=>{
            console.log(response)
            let result ={
                img:handleImage(response.data.image_path,90),
                name:response.data.name,
                rating:response.data.rating,
                count:response.data.recent_order_num,
                distance:response.data.distance,
                time:response.data.order_lead_time,
                fee:response.data.float_delivery_fee,
                id:response.data.id,
                rule_fee:response.data.piecewise_agent_fee,
                mode:response.data.delivery_mode?response.data.delivery_mode:null,
                activities:response.data.activities?response.data.activities.map(act=>{
                    return{
                        description:act.description,
                        icon_color:act.icon_color,
                        icon_name:act.icon_name,
                        name:act.name,
                        id:act.id
                    }
                }):null
            }
            
            resolve(result);
        })
        .catch(error=>{
            
        })
    })
 }

//请求初始化位置
export function getLocation(lat,lon){
    return new Promise((resolve,reject)=>{
        axios.get(Api.LOCATION_URL,{
            params:{
                latitude:lat,
                longitude:lon
            }
        })
        .then(response=>{
            resolve(response.data.name)
        })
    })
}

//搜索地址请求
export function searchAddressList(keyword,offset,limit,lat,lon){
    return new Promise((resolve,reject)=>{
        axios.get(Api.SEARCH_ADDRESS_URL,{
            params:{
                keyword,
                offset,
                limit,
                longitude:lon,
                latitude:lat
            }
        })
        .then(response=>{
            let addressList=response.data.map(item=>{
                return{
                    name: item.name,
                    lon: item.longitude,
                    lat: item.latitude,
                    address: item.address
                }
            })
            resolve(addressList);
        })
    })   
}

//搜索商家商品
export function getSellerAndGoods(kw,latitude,longitude,city_id){
    return new Promise((resolve,reject)=>{
       axios.get(Api.SEARCH_SELLER,{
            params:{
                kw,
                latitude,
                longitude,
                city_id
            }
       })
       .then(response=>{
           console.log(response)
           let result={
              words:response.data.words,
              restaurants:response.data.restaurants.map(item=>{
                  return{
                      distance:item.distance,
                      fee:item.float_delivery_fee,
                      img:handleImage(item.image_path,20),
                      name:item.name,
                      rating:item.rating,
                      count:item.recent_order_num,
                      /* tagName:item.tags?item.tags.name:null,
                      color:item.tags?item.tags.name_color:null, */
                      tags:item.tags?item.tags.map(item2=>{
                          return{
                            name:item2.name,
                            color:item2.name_color
                          }
                      }):null
                      //color:item.tags.name_color
                  }
              })
           }
           console.log(result)
           resolve(result);
       })
       .catch(error=>{

       })
    })
}

//热门搜索
export function getHotSearch(latitude,longitude){
    return new Promise((resolve,reject)=>{
        axios.get(Api.HOT_SERRCH,{
            params:{
                latitude,
                longitude
            }
        })
        .then(response=>{
            console.log(response)
            let result=response.data.map(item=>{
                return{
                    word:item.word
                }
            })
            resolve(result);
        })
        .catch(error=>{
            
        })
    })
}

