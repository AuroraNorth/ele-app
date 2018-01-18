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

//请求首页推荐商家的函数
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
            console.log(response)
            let result =response.data.items.map(item=>{
                return{
                    img:handleImage(item.restaurant.image_path,90),
                    name:item.restaurant.name,
                    rating:item.restaurant.rating,
                    recent_order_num:item.restaurant.recent_order_num,
                    distance:item.restaurant.distance,
                    order_lead_time:item.restaurant.order_lead_time,
                    activities:item.restaurant.activities?item.restaurant.activities.map(act=>{
                        return{
                            icon_name:act.icon_name,
                            icon_color:act.icon_color,
                            description:act.description,

                        }
                    }):null,
                    isShow:false,
                    //piecewise_agent_fee:item.restaurant.piecewise_agent_fee
                    float_delivery_fee:item.restaurant.float_delivery_fee,
                    recommend:{
                        color:item.restaurant.recommend?item.restaurant.recommend.color:'',
                        reason:item.restaurant.recommend?item.restaurant.recommend.reason:'',
                        image_hash:item.restaurant.recommend.image_hash?handleImage(item.restaurant.recommend.image_hash, 10):''
                    }
                }
            })
            
            resolve(result);
        })
        .catch(error=>{

        })
    })
}




