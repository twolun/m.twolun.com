<script type="text/javascript">
    import 'common.scss';
    import store from './store';
    export default {
        store,
        vuex: {
        getters: {
            route: (state) => state.route,
            isLoading: (state) => state.isLoading,
            direction: (state) => state.direction
        }
      }
    }
</script>
<template>
  <div class="container">
      <router-view
        class="view"
        keep-alive
        :transition="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')"
        >
      </router-view>
  </div>
</template>

<style lang="less">
::-webkit-scrollbar {
    width: 0;
}

body, .page {
    background-color: #FBF9FE;
}

.page {
    position: relative;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}
.container, .page{
    height: 100%; 
}

body {
    overflow-x: hidden;
}

.slide-transition {
    transition: all 0.3s ease;
    width: 100%;
}

.slide-enter {
    left: 100%;
}

.slide-leave {
    left: 100%;
}

.app-transition {
    transition: opacity 0.3s ease;
}

.app-enter, .app-leave {
    opacity: 0;
}
.v-link-active {
    color: red;
}
[v-cloak] {
    display: none;
}
.weui_cell_ft:after {
    content: " ";
    display: inline-block;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    height: 8px;
    width: 8px;
    border-width: 2px 2px 0 0;
    border-color: #c8c8cd;
    border-style: solid;
    position: relative;
    top: 0;
    margin-left: .3em;
}

/**
* vue-router transition
*/
.vux-pop-out-transition,
.vux-pop-in-transition {
  width: 100%;
  animation-duration: 0.5s;
  animation-fill-mode: both;
  backface-visibility: hidden;
  opacity: 1;
}
.vux-pop-out-enter,
.vux-pop-out-leave,
.vux-pop-in-enter,
.vux-pop-in-leave {
  will-change: transform;
  height: 100%;
  position: absolute;
  left: 0;
}
.vux-pop-out-enter {
  animation-name: popInLeft;
}
.vux-pop-out-leave {
  animation-name: popOutRight;
}
.vux-pop-in-enter {
  perspective: 1000;
  animation-name: popInRight;
}
.vux-pop-in-leave {
  animation-name: popOutLeft;
}
@keyframes popInLeft {
  from {
    transform: translate3d(-100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes popOutLeft {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-100%, 0, 0);
    // transform: translate3d(0, 0, 0);
    
  }
}
@keyframes popInRight {
  from {
    transform: translate3d(100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes popOutRight {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(100%, 0, 0);
  }
}

</style>
