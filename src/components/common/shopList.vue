<template>
    <div class="shoplist_container">
      <ul v-if="shopListArr.length" type="1">
         <h3>dasdsa</h3>
      </ul>
      <div >啊大大</div>
    </div>
</template>

<script>
  import { mapState } from "vuex"
  import { shopList } from "../../service/getData"
  import { imgBaseUrl } from "../../config/env"
  import {  } from "../../config/utils"
  import { getImgPath,loadMore } from "./mixin"

  export default {
    data(){
      return {
        offset: 0, // 批次加载店铺列表，每次加载20个 limit = 20
        shopListArr:[], // 店铺数据集合
        preventRepeatReuqest: false, // 到达底部加载数据，
        showBackStatus:false, //显示返回顶部按钮
        showLoading:true, // 显示加载动画
        touched: false, // 没有更多数据
        imgBaseUrl, // 图片路径
      }
    },
    props:["restaurantCategoryId","restaurantCategoryIds",'sortByType', 'deliveryMode', 'supportIds', 'confirmSelect', 'geohash'],  // 父传子参数
    // 页面
    mounted(){
      this.initData();
      this.getInit();
    },
    // 计算属性
    computed:{
      ...mapState([
        "latitude",
        "longitude"
      ])

    },
    components:{

    },
    methods:{
      // 初始化获取数据
      async initData(){
        let res = await shopList(this.latitude,this.longitude, this.offset, this.restaurantCategoryId)
        // 往下执行
        console.log(res); // 会返回请求结果
      },

      getInit(){
        let result;
        shopList(this.latitude,this.longitude, this.offset, this.restaurantCategoryId).then((res) => {
          result = res;
        })
        console.log("result",result);// undefined
      }
    },
    watch:{

    }
  }
</script>

<style lang="scss">

</style>
