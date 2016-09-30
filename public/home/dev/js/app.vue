<script>
import NavComponent from './components/nav';
import ShopList from './components/shopList';

export default {
  data () {
    return {
      
    }
  },
  components: {
    NavComponent,
    ShopList
  },
}
</script>
<template>
  <div class="page" transition="app">
    <nav-component></nav-component>
    <shop-list></shop-list>
  </div>
</template>
