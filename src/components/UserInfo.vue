<template>
  <div class="user-info">
    <div :title="info.name" class="nav-user-title">
      <img :src="info.avatar.xs"/>
      <span>{{info.name}}</span>
      <i class="iconfont icon-down"></i>
    </div>
    <div class="detail">
      <span @click="exit" title="安全退出" class="exit">退出</span>
      <i class="iconfont icon-triangle"></i>
      <div class="content">
        <a href="#" class="face" :title="info.name"><img :src="info.avatar.b" :title="info.name"/></a>
        <p class="uname">{{info.name}}</p>
        <div class="member-menu">
          <ul>
            <li><a href="javascript:;">个人中心</a></li>
            <li><a href="javascript:;">房间设置</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import api from '../api'
  export default{
    name: 'userInfo',
    props: {
      info: Object
    },
    data () {
      return {
      }
    },
    methods: {
      exit () {
        api.logout()
        this.$emit('log_out')
      }
    }
  }
</script>

<style scoped lang="less">
  @keyframes scale-in-ease{
    0% {
      opacity: 0;
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      opacity: 1;
      transform: scale(1) perspective(1200px)
    }
  }
  .user-info{
    position: relative;
    &:hover{
      color: #1497DB;
    }
    &:hover>.nav-user-title>.iconfont{
      transform: rotate(180deg);
    }
    &:hover>.detail{
      display: block;
      animation: scale-in-ease cubic-bezier(.22,.58,.12,.98) .5s;
    }
  }
  .nav-user-title{
    cursor: pointer;
    img{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      position: relative;
      top: 10px;
      margin-right: 3px;
    }
    .iconfont{
      transition: transform .3s;
      margin-left: 3px;
      font-size: 14px;
      float: right;
    }
  }
  .detail{
    display: none;
    position: absolute;
    z-index: 10;
    top: 43px;
    background-color: #fff;
    border-top: 2px solid #1296DB;
    box-shadow: 0 3px 8px 2px rgba(1,1,1,.25);
    right: 0;
    min-width: 270px;
    padding: 15px;
    .exit{
      cursor: pointer;
      position: absolute;
      right: 10px;
      top: 10px;
      line-height: 1;
      color: #999;
      &:hover{
        color: #1296DB;
      }
    }
    >.iconfont{
      position: absolute;
      top: -28px;
      color: #1296DB;
      right: 30px;
    }
    .content{
      line-height: 1;
      .face{
        display: block;
        text-align: center;
        img{
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin: 0 auto;
        }
      }
      .uname{
        text-align: center;
        margin-top: 15px;
        color: #666;
      }
      .member-menu{
        margin: 20px 20px 0px 10px;
        border-top: 1px solid #e5e9ef;
        overflow: hidden;
        >ul{
          padding: 0;
          overflow: hidden;
          margin: 10px 0;
          >li{
            float: left;
            list-style: none;
            width: 50%;
            >a{
              white-space: nowrap;
              color: #222;
              line-height: 28px;
              text-align: center;
              margin: 0 auto;
              display: block;
              text-decoration: none;
              font-size: 12px;
              &:hover{
                color: #00a1d6;
              }
            }
          }
        }
      }
    }
  }
</style>
