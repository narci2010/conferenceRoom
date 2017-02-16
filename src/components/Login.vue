<template>
  <transition name="fade">
    <div class="login" v-if="value">
      <div class="mask"></div>
      <div class="login-box">
        <div class="login-hd">
          <div class="close" @click="close"><i class="iconfont icon-close"></i></div>
          <h3>登录</h3>
        </div>
        <div class="body">
          <div class="input">
            <i class="iconfont icon-user"></i>
            <input type="text" placeholder="请输入用户名"/>
          </div>
          <div class="input">
            <i class="iconfont icon-pwd"></i>
            <input type="password" placeholder="请输入密码"/>
          </div>
          <div class="input">
            <button class="sub-btn">登录</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  export default{
    name: 'Login',
    props: {
      value: Boolean
    },
    data () {
      return {
      }
    },
    methods: {
      close () {
        this.value = false
        this.$emit('input', this.value)
      }
    },
    components: {
    }
  }
</script>

<style lang="less" scoped>
  .login{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    .mask{
      position: absolute;
      background-color: #000;
      opacity: .7;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .login-box{
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1001;
      transform: translate(-50%,-50%);
      width: 400px;
      height: 300px;
      background-color: #fff;
      box-shadow: 0 0 4px rgba(0,0,0,.15);
      visibility: visible;
      border-radius: 4px;
      border: 1px solid rgb(255, 255, 255);
      >.login-hd{
        padding-left: 50px;
        padding-top: 15px;
        border-bottom: 1px #E9E9E9 solid;
        position: relative;
        >.close{
          z-index: 1003;
          position: absolute;
          right: 0;
          top: 0;
          width: 35px;
          height: 35px;
          text-align: center;
          line-height: 35px;
          cursor: pointer;
          &:hover > i{
            font-weight: bold;
            color: #000;
          }
          >i{
            font-size: 14px;
            color: #666;
          }
        }
        >h3{
          color: #2C81AF;
          padding: 15px 0;
          position: relative;
          margin: 0;
          &::after{
            content: '';
            position: absolute;
            width: 50px;
            height: 3px;
            display: block;
            bottom: -3px;
            left: -4px;
            background-color: #2C81AF;
          }
        }
      }
    }
    .body{
      padding: 30px 50px;
      .input{
        margin-bottom: 20px;
        position: relative;
        >.iconfont{
          position: absolute;
          top: 7px;
          left: 8px;
          color: #BABABA;
          font-size: 22px;
          &.icon-user{
            font-size: 19px;
            top: 8px;
          }
        }
        input{
          color: #444;
          width: 100%;
          height: 40px;
          outline: 0;
          border: 1px solid #ddd;
          transition: border-color .3s ease 0s;
          font-size: 14px;
          padding-left: 35px;
          &:focus{
            border: 1px solid #BABABA;
          }
        }
        >.sub-btn{
          outline: 0;
          width: 100%;
          height: 40px;
          line-height: 40px;
          color: #fff;
          cursor: pointer;
          display: block;
          font-size: 16px;
          letter-spacing: 2px;
          text-align: center;
          border: none;
          background-color: #1296DB;
          border-radius: 2px;
          margin: 35px auto 0;
          &:hover{
            background-color: #5B7BDB;
          }
          &:active{
            background-color: #316cdb;
          }
        }
      }
    }
  }
</style>
