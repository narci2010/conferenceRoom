<template>
  <div id="app">
    <transition :name="routerTransitionName">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      routerTransitionName: 'slide-left'
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.routerTransitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style>
  html, body{
    overflow-x: hidden;
    background-color: #F6F6F6;
    font-family: "Microsoft YaHei",Arial,Helvetica,sans-serif;
  }
  *{
    box-sizing: border-box;
  }
  .view {
    position: absolute;
    width: 100%;
    transition: all .5s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }
  @font-face {
    font-family: RBNo2Light; /*这里是说明调用来的字体名字*/
    src: url('./assets/fonts/RBNo2Light.otf'); /*这里是字体文件路径*/
  }
</style>
