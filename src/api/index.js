
//用于放置axios请求的路径

//图片域名
const IMAGE_HOST='http://fuss10.elemecdn.com/';

//常量声明一般用大写与变量区分
/* 
首页轮播图接口
参数:
latitude=22.54286
longitude=114.059563
templates[]=[main_templat,favourable_template,svip_template]
*/
//首页轮播图接口
const BANNER_URL='/restapi/shopping/openapi/entries';

/*
首页推荐商家请求接口
参数：
?latitude=22.54286
&longitude=114.059563
&offset=0
&limit=12
&extras[]=activities   tags
&extra_filters=home
&rank_id=984553df2830414c9058eaff4b63bbaa
&terminal=h5
*/
//首页推荐商家请求接口
const SELLER_URL = '/restapi/shopping/v3/restaurants';

export default{
    IMAGE_HOST,
    BANNER_URL,
    SELLER_URL
}