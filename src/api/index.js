
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

//发现的内容区
/* 
?platform=1
&block_index=0
&latitude=22.54286&
longitude=114.059563
*/
const CONTENT_URL='/restapi/member/v1/discover';

//home下面的food的nav
/* 
https://h5.ele.me/restapi/shopping/v2/foods_page/sift_factors?entry_id=20004689&longitude=121.473701&latitude=31.23037&terminal=h5
?entry_id=20004689
&longitude=113.837884
&latitude=22.626024
&terminal=h5
 */
const FOOD_URL='/restapi/shopping/v2/foods_page/sift_factors';

//商家菜单详情
/* 
/restapi/shopping/v2/menu?restaurant_id=154898684
*/
const SELLER_MENU='/restapi/shopping/v2/menu'

//商家详情
/* 
/restapi/shopping/restaurant
/155170084
?extras[]=activities
&extras[]=albums
&extras[]=license
&extras[]=identification
&extras[]=qualification
&terminal=h5
&latitude=22.543672
&longitude=114.059616
*/
const SELLER_DETAIL='/restapi/shopping/restaurant'

//请求地址
//参数：
// latitude
//longitude
const LOCATION_URL='/restapi/bgs/poi/reverse_geo_coding';

//搜索地址
/* 
参数：
keyword=
&offset=0
&limit=20
&latitude=22.54286
&longitude=114.059563
*/
const SEARCH_ADDRESS_URL='/restapi/bgs/poi/search_poi_nearby';



export default{
    IMAGE_HOST,
    BANNER_URL,
    SELLER_URL,
    CONTENT_URL,
    FOOD_URL,
    SELLER_MENU,
    SELLER_DETAIL,
    LOCATION_URL,
    SEARCH_ADDRESS_URL
    
}

