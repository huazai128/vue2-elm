import fetch from "../config/fetch";
import { getStore } from "../config/utils";

/**
 * 获取首页默认地址
 */

export const cityGuess = () => fetch('/v1/cities', {
  type: 'guess'
});


/**
 * 获取首页热门城市
 */

export const hotcity = () => fetch('/v1/cities', {
  type: 'hot'
});


/**
 * 获取首页所有城市
 */

export const groupcity = () => fetch('/v1/cities', {
  type: 'group'
});

/**
 * 获取用户信息
 */

export const getUser = () => fetch('/v1/user', {user_id: getStore('user_id')});

/**
 *个人中心里编辑地址
 */

export const getAddressList = (user_id) => fetch('/v1/users/'+user_id+'/addresses');

// 根据城市ID 获取城市信息
export const currentCity = (cityId) => fetch('/v1/cities/' + cityId);

// 根据城市ID和输入框内容搜索
export const searchCity = (cityId,cityName) => fetch("/v1/pois",{
  type:"search",
  city_id:cityId,
  keyword:cityName
})

// 获取msite页面视频分类
export const msiteFoodTypes = (geohash) => fetch("/v2/index_entry",{
  geohash,
  group_type: '1',
  'flags[]': 'F'
})

// 获取商品集合
export const shopList = (latitude, longitude, offset, restaurant_category_id = '', restaurant_category_ids = '', order_by = '', delivery_mode = '', support_ids = []) => {
  let supportStr = '';
  support_ids.forEach(item => {
    if (item.status) {
      supportStr += '&support_ids[]=' + item.id;
    }
  });
  let data = {
    latitude,
    longitude,
    offset,
    limit: '20',
    'extras[]': 'activities',
    keyword: '',
    restaurant_category_id,
    'restaurant_category_ids[]': restaurant_category_ids,
    order_by,
    'delivery_mode[]': delivery_mode + supportStr
  };
  return fetch('/shopping/restaurants', data);
};

// 获取msite页面地址信息
export const msiteAddress = (geohash) => fetch('/v2/pois/' + geohash)


