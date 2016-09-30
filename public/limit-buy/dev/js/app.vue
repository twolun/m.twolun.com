<script type="text/javascript">
  import Vue from 'vue';
  import Vcontent from 'Vcontent';
  let scrollTop = 0
  export default {
    data(){
      return {
        bd_logo: metadata.host + '/htmlImg/bd_logo.png'
      }
    },
    route: {
      activate (transition) {
        transition.next()
        Vue.nextTick(() => {
          this.$refs.scroller.$el.scrollTop = scrollTop
          // document.querySelector('#content').scrollTop = scrollTop
        })
      },
      deactivate (transition) {
        scrollTop = this.$refs.scroller.$el.scrollTop
        // document.querySelector('#content').scrollTop = scrollTop
        transition.next()
      }
    },
    components: {
      Vcontent
    }
  }
</script>
<template>
  <div class="vc-page" transition="app">
    <vcontent v-ref:scroller>  
        <div class="limit-buy">
        <h2> 限时抢购 </h2>
          
        </div>   
    </vcontent>

  </div>
</template>
<style lang="sass">

  .home-test{
    background: url('../img/bd_logo.png') no-repeat;
    height: 200px;
    width: 100%;
    background-size: 100%;
  }

</style>