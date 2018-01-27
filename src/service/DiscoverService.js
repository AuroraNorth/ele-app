//处理服务,发送请求
import axios from 'axios'
import Api from'../api'
import {handleImage} from '../util/handleImage'

//发现页面的中间内容区
export function getDiscoverData(plat,bloc,lat,lon){
    //用promise处理异步回调请求(因为异步导致数据返回不出去)
    
    return new Promise((resolve,reject)=>{
        axios.get(Api.CONTENT_URL,{
            params:{
                'platform':plat,
                'block_index':bloc,
                'latitude':lat,
                'longitude':lon
            }
        })
        //请求成功
        .then((response)=>{
            console.log(response)
           let contentData=response.data[1].map(item=>{
                return{
                    title:item.title,
                    subtitle:item.subtitle,
                    title_color:item.title_color,
                    main_pic_hash:handleImage(item.main_pic_hash,45)
                }
            })
            resolve(contentData);
        })
        //请求失败
        .catch((error)=>{
            
        })
    })
}

//为你推荐
export function getDiscoverRecommend(latitude,longitude,offset,limit){
    return new Promise((resolve,reject)=>{
        axios.get(Api.DISCOVER_RECOMMEND,{
            params:{
                latitude,
                longitude,
                offset,
                limit
            }
        })
        .then(response=>{
            let result=response.data.items.map(item=>{
                return{
                    name:item.food.name,
                    price:item.food.price,
                    original_price:item.food.original_price?item.food.original_price:null,
                    satisfy_rate:item.food.satisfy_rate,
                    restaurant:item.food.restaurant_name,
                    month_sales:item.food.month_sales,
                    img:handleImage(item.food.image_path,147)
                }
            })
            resolve(result);
        })
        .catch(error=>{
            
        })
    })
}


