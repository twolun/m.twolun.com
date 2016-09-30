<script type="text/javascript">
    import 'common.scss';
    export default {
        
    }
</script>
<template>
  <div class="container js_container">
      <!-- main view -->
      <router-view
        class="view"
        keep-alive
        transition="slide">
      </router-view>
  </div>
</template>

<style lang="less">

body, .page {
    background-color: #FBF9FE;
}

.container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
}

.page {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}

body {
  overflow-x: hidden;
}

.slide-transition {
  transition: left 0.3s ease;
  width: 100%;
}

.slide-enter, .slide-leave {
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


</style>
