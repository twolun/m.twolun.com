<script type="text/javascript">
  import './components/shopbody/shopbody.scss';
  import MenuNav from './components/menu-nav';
  import MenuList from './components/menu-list';
  import CartFooter from './components/cart-footer';

  // import store from './store';
  import { pageInit } from './store/actions';


  export default {
    data(){
      return {
        cartShaking: false,           //购物车添加后动画提示，仅仅是一个动画标志，使用双向数据绑定
        // cartNums: 0,                  //购物车数量，比较重要的数据，使用单向数据绑定
        maskIsShow: false,            //蒙板显示效果
      }
    },
    components: {
      MenuNav,
      MenuList,
      CartFooter,
    },
    route: {
    },
    created: function(){
      this.pageInit();
    },
    methods: {
      
      //购物车数据操作方法
      handleChangeCartNums: function(num){
        var that = this;
        if(this.cartShaking){
          return false;
        }
        this.cartShaking = true;
        setTimeout(() => {
            this.cartShaking = false;
        }, 500);

      }
    },
    // store,
    vuex: {
      actions: {
        pageInit
      }
    }
  }
</script>
<template>
  <div class="shopbody">
          <menu-nav ></menu-nav>
          <menu-list
            @change-cart="handleChangeCartNums"
          > </menu-list>      
        <cart-footer
      :cart-shaking="cartShaking"
      @change-cart="handleChangeCartNums"
    >
    </cart-footer>
  </div>
</template>
