<script type="text/javascript">
  import ShopHeader from './components/shopheader';
  import FoodsList from '../../foods-list/js/app.vue';
  import { Throttle } from './utils/util.js';

  export default {
    data(){
      return {
        opacity: 1,                   //.page向上滚动时，.shopheader的透明效果
        liOpacity: 0,                 //.page向下pan时，隐藏的li元素的透明渐变效果
        shopheaderH: 110,             //.shopheader默认高度
        currentView: 'FoodsList'
      }
    },
    components: {
      ShopHeader,
      FoodsList
    },
    route: {
    },
    created: function(){
    },
    ready: function(){
      Throttle.bindEvents(this.handlePageScroll, this, '.page');
    },
    methods: {
      //处理page部分滚动，页面头部渐变消失效果
      handlePageScroll: function(){
        var scrollTop = this.$els.page.scrollTop;
        this.opacity = 1 - scrollTop / 110;
      },
      //处理page部分，向pan的时候的头部效果
      handlePagePandown: function(event){
        if(event.deltaY <= 110){
          this.shopheaderH = 110 + event.deltaY;
          this.liOpacity = event.deltaY / 110;
        }else{
          this.shopheaderH = 110;
          this.liOpacity = 0;
        }
      },
      //pandown事件结束，页面中的状态
      handlePagePanend: function(){
        this.shopheaderH = 110;
        this.liOpacity = 0;
      }
    }
  }
</script>
<template>
  <div class="page shop-page" 
    v-touch:pandown="handlePagePandown($event)"
    v-touch:panend="handlePagePanend"
    v-el:page
  >
    <shop-header
      :opacity="opacity"
      :li-opacity="liOpacity"
      :shopheader-h="shopheaderH"
    >
    </shop-header>
    <component :is="currentView" keep-alive></component>    
  </div>
</template>
<style lang="sass">
::-webkit-scrollbar {
    width: 0;
}

</style>
