<template>
  <div id="app">
    <nprogress-container></nprogress-container>
    <THeader></THeader>
      <transition :name="routerTransitionName">
        <router-view class="view"></router-view>
      </transition>
  </div>
</template>

<script>
import THeader from './components/THeader'
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
export default {
  name: 'app',
  components: {
    THeader, NprogressContainer
  },
  data () {
    return {
      routerTransitionName: 'slide-left',
      me: null
    }
  },
  watch: {
    '$route' (to, from) {
      const toPath = to.path.split('/').length
      const fromPath = from.path.split('/').length
      const history = window.sessionStorage
      if (history.getItem(toPath)) {
        this.routerTransitionName = 'slide-right'
        history.removeItem(toPath)
      } else {
        this.routerTransitionName = 'slide-left'
        history.setItem(fromPath, 1)
      }
      // this.routerTransitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style>
  html, body{
    overflow-x: hidden;
    background-color: #F7F7F7;
    font-family: "Microsoft YaHei",Arial,Helvetica,sans-serif;
  }
  ul,li {
    list-style: none;
  }
  *{
    user-select: initial!important;
    box-sizing: border-box;
  }
  video{
    transform: scaleX(-1);
  }
  .nprogress-container{
    position: fixed!important;
    width: 100%;
    z-index: 9999;
    top: 0;
    height: 2px;
  }
  .nprogress-container #nprogress .spinner{
    position: fixed!important;
  }
  .view {
    top: 70px;
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .fade-in-linear-enter-active,
  .fade-in-linear-leave-active {
    transition: opacity 200ms linear;
  }
  .fade-in-linear-enter,
  .fade-in-linear-leave,
  .fade-in-linear-leave-active {
    opacity: 0;
  }

  .el-fade-in-enter-active,
  .el-fade-in-leave-active {
    transition: all .3s cubic-bezier(.55,0,.1,1);
  }
  .el-fade-in-enter,
  .el-fade-in-leave-active {
    opacity: 0;
  }

  .el-zoom-in-center-enter-active,
  .el-zoom-in-center-leave-active {
    transition: all .3s cubic-bezier(.55,0,.1,1);
  }
  .el-zoom-in-center-enter,
  .el-zoom-in-center-leave-active {
    opacity: 0;
    transform: scaleX(0);
  }

  .el-zoom-in-top-enter-active,
  .el-zoom-in-top-leave-active {
    opacity: 1;
    transform: scaleY(1);
    transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms;
    transform-origin: center top;
  }
  .el-zoom-in-top-enter,
  .el-zoom-in-top-leave-active {
    opacity: 0;
    transform: scaleY(0);
  }

  .el-zoom-in-bottom-enter-active,
  .el-zoom-in-bottom-leave-active {
    opacity: 1;
    transform: scaleY(1);
    transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms;
    transform-origin: center bottom;
  }
  .el-zoom-in-bottom-enter,
  .el-zoom-in-bottom-leave-active {
    opacity: 0;
    transform: scaleY(0);
  }

  .collapse-transition {
      transition: 0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out;
  }

  /*栅格系统*/
  .col-xs-1,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,.col-xs-12,
  .col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,
  .col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12
  {
      position: relative;
      min-height: 1px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      float: left;
  }
  @media (min-width: 1201px){
    .col-lg-12{width:100%}
    .col-lg-11{width:91.66666667%}
    .col-lg-10{width:83.33333333%}
    .col-lg-9{width:75%}
    .col-lg-8{width:66.66666667%}
    .col-lg-7{width:58.33333333%}
    .col-lg-6{width:50%}
    .col-lg-5{width:41.66666667%}
    .col-lg-4{width:33.33333333%}
    .col-lg-3{width:25%}
    .col-lg-2{width:16.66666667%}
    .col-lg-1{width:8.33333333%}
  }
  @media (min-width: 1001px) and (max-width: 1200px){
    /*栅格*/
    .col-md-12{width:100%}
    .col-md-11{width:91.66666667%}
    .col-md-10{width:83.33333333%}
    .col-md-9{width:75%}
    .col-md-8{width:66.66666667%}
    .col-md-7{width:58.33333333%}
    .col-md-6{width:50%}
    .col-md-5{width:41.66666667%}
    .col-md-4{width:33.33333333%}
    .col-md-3{width:25%}
    .col-md-2{width:16.66666667%}
    .col-md-1{width:8.33333333%}
  }
  @media(min-width:768px) and (max-width: 1000px){
      .col-sm-12{width:100%}
      .col-sm-11{width:91.66666667%}
      .col-sm-10{width:83.33333333%}
      .col-sm-9{width:75%}
      .col-sm-8{width:66.66666667%}
      .col-sm-7{width:58.33333333%}
      .col-sm-6{width:50%}
      .col-sm-5{width:41.66666667%}
      .col-sm-4{width:33.33333333%}
      .col-sm-3{width:25%}
      .col-sm-2{width:16.66666667%}
      .col-sm-1{width:8.33333333%}
  }
  @media(max-width:768px){
      .col-xs-12{width:100%}
      .col-xs-11{width:91.66666667%}
      .col-xs-10{width:83.33333333%}
      .col-xs-9{width:75%}
      .col-xs-8{width:66.66666667%}
      .col-xs-7{width:58.33333333%}
      .col-xs-6{width:50%}
      .col-xs-5{width:41.66666667%}
      .col-xs-4{width:33.33333333%}
      .col-xs-3{width:25%}
      .col-xs-2{width:16.66666667%}
      .col-xs-1{width:8.33333333%}
  }

  /*响应式工具--hidden*/
  @media (min-width: 1001px){
    .hidden-md{display:none!important;}
  }
  @media(min-width:768px) and (max-width: 1000px){
    .hidden-sm{display:none!important;}
  }
  @media(max-width:768px){
    .hidden-xs{display:none!important;}
  }
  /*响应式工具--visible*/
  @media (min-width: 1001px){
    .visible-md{display: block;}
    .visible-md-block{display: block;}
    .visible-md-inline{display: inline;}
    .visible-md-inline-block{display: inline-block;}
  }
  @media(min-width:768px) and (max-width: 1000px){
    .visible-sm{display: block;}
    .visible-sm-block{display: block;}
    .visible-sm-inline{display: inline;}
    .visible-sm-inline-block{display: inline-block;}
  }
  @media(max-width:768px){
    .visible-xs{display: block;}
    .visible-xs-block{display: block;}
    .visible-xs-inline{display: inline;}
    .visible-xs-inline-block{display: inline-block;}
  }

  /*响应式工具--push、pull*/
  @media (min-width: 1001px){
    /*push*/
    .col-md-pull-12{right:100%}
    .col-md-pull-11{right:91.66666667%}
    .col-md-pull-10{right:83.33333333%}
    .col-md-pull-9{right:75%}
    .col-md-pull-8{right:66.66666667%}
    .col-md-pull-7{right:58.33333333%}
    .col-md-pull-6{right:50%}
    .col-md-pull-5{right:41.66666667%}
    .col-md-pull-4{right:33.33333333%}
    .col-md-pull-3{right:25%}
    .col-md-pull-2{right:16.66666667%}
    .col-md-pull-1{right:8.33333333%}
    .col-md-pull-0{right:auto}
    /*push*/
    .col-md-push-12{left:100%}
    .col-md-push-11{left:91.66666667%}
    .col-md-push-10{left:83.33333333%}
    .col-md-push-9{left:75%}
    .col-md-push-8{left:66.66666667%}
    .col-md-push-7{left:58.33333333%}
    .col-md-push-6{left:50%}
    .col-md-push-5{left:41.66666667%}
    .col-md-push-4{left:33.33333333%}
    .col-md-push-3{left:25%}
    .col-md-push-2{left:16.66666667%}
    .col-md-push-1{left:8.33333333%}
  }
  @media(min-width:768px) and (max-width: 1000px){
    /*push*/
    .col-sm-pull-12{right:100%}
    .col-sm-pull-11{right:91.66666667%}
    .col-sm-pull-10{right:83.33333333%}
    .col-sm-pull-9{right:75%}
    .col-sm-pull-8{right:66.66666667%}
    .col-sm-pull-7{right:58.33333333%}
    .col-sm-pull-6{right:50%}
    .col-sm-pull-5{right:41.66666667%}
    .col-sm-pull-4{right:33.33333333%}
    .col-sm-pull-3{right:25%}
    .col-sm-pull-2{right:16.66666667%}
    .col-sm-pull-1{right:8.33333333%}
    .col-sm-pull-0{right:auto}
    /*push*/
    .col-sm-push-12{left:100%}
    .col-sm-push-11{left:91.66666667%}
    .col-sm-push-10{left:83.33333333%}
    .col-sm-push-9{left:75%}
    .col-sm-push-8{left:66.66666667%}
    .col-sm-push-7{left:58.33333333%}
    .col-sm-push-6{left:50%}
    .col-sm-push-5{left:41.66666667%}
    .col-sm-push-4{left:33.33333333%}
    .col-sm-push-3{left:25%}
    .col-sm-push-2{left:16.66666667%}
    .col-sm-push-1{left:8.33333333%}
  }
  @media(max-width:768px){
    /*push*/
    .col-xs-pull-12{right:100%}
    .col-xs-pull-11{right:91.66666667%}
    .col-xs-pull-10{right:83.33333333%}
    .col-xs-pull-9{right:75%}
    .col-xs-pull-8{right:66.66666667%}
    .col-xs-pull-7{right:58.33333333%}
    .col-xs-pull-6{right:50%}
    .col-xs-pull-5{right:41.66666667%}
    .col-xs-pull-4{right:33.33333333%}
    .col-xs-pull-3{right:25%}
    .col-xs-pull-2{right:16.66666667%}
    .col-xs-pull-1{right:8.33333333%}
    .col-xs-pull-0{right:auto}
    /*push*/
    .col-xs-push-12{left:100%}
    .col-xs-push-11{left:91.66666667%}
    .col-xs-push-10{left:83.33333333%}
    .col-xs-push-9{left:75%}
    .col-xs-push-8{left:66.66666667%}
    .col-xs-push-7{left:58.33333333%}
    .col-xs-push-6{left:50%}
    .col-xs-push-5{left:41.66666667%}
    .col-xs-push-4{left:33.33333333%}
    .col-xs-push-3{left:25%}
    .col-xs-push-2{left:16.66666667%}
    .col-xs-push-1{left:8.33333333%}
  }
  /*container*/
  .container {padding-right: 15px;padding-left: 15px;margin-right: auto;margin-left: auto;box-sizing: border-box;}
  @media (min-width: 1201px){
    .container {
      width: 1170px;
    }
  }
  @media (min-width: 1001px) and (max-width: 1200px){
    .container{width: 970px;}
  }
  @media(min-width:768px) and (max-width: 1000px){
    .container{width: 750px;}
  }
  @media(max-width:768px){
    .container{width:100%;}
  }

  @font-face {
    font-family: RBNo2Light; /*这里是说明调用来的字体名字*/
    src: url('./assets/fonts/RBNo2Light.otf'); /*这里是字体文件路径*/
  }
  @font-face {
    font-family: 'iconfont';  /* project id 233303 */
    src: url('//at.alicdn.com/t/font_ngukuepd9e50o1or.eot');
    src: url('//at.alicdn.com/t/font_ngukuepd9e50o1or.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_ngukuepd9e50o1or.woff') format('woff'),
    url('//at.alicdn.com/t/font_ngukuepd9e50o1or.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_ngukuepd9e50o1or.svg#iconfont') format('svg');
  }
  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-sousuo:before { content: "\e600"; }
  .icon-kaibo:before { content: "\e740"; }
  .icon-user:before { content: "\e625"; }
  .icon-play:before {content: "\e646";}
  .icon-pause:before {content: "\e601";}
  .icon-time:before {content: "\e614";}
  .icon-close:before {content: "\e63d";}
  .icon-pwd:before {content: "\e610";}
  .icon-down:before {content: "\e622";}
  .icon-triangle:before {content: "\e609";}
  .icon-user-list:before {content: "\e632";}
  .icon-chat:before {content: "\e635";}
</style>
