<script type="text/javascript">
  import Vue from 'vue'
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
          // this.$refs.scroller.$el.scrollTop = scrollTop
          document.querySelector('#content').scrollTop = scrollTop
        })
      },
      deactivate (transition) {
        // scrollTop = this.$refs.scroller.$el.scrollTop
        document.querySelector('#content').scrollTop = scrollTop
        transition.next()
      }
    },
  }
</script>
<template>
  <div class="vc-page" transition="app">
    <div class="vc-page-content" id="content">      
      
    </div>

  </div>
</template>
<style lang="sass">
  .vc-page{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    background-color: #FFF;
    justify-content: center;
    align-items: flex-start;
  }
  .vc-page-content{
    width: 100%;
    flex: 1;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    position: relative;
  }
  .home-test{
    background: url('../img/bd_logo.png') no-repeat;
    height: 200px;
    width: 100%;
    background-size: 100%;
  }

</style>