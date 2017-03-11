<template>
  <transition name="fade">
    <div class="input-password" v-show="visible">
      <div class="mask"></div>
      <div v-loading="loading" class="input-password-box">
        <div class="input-password-hd">
          <div class="close" @click="close"><i class="iconfont icon-close"></i></div>
          <h3>输入房间密码</h3>
        </div>
        <div class="body">
          <div class="input">
            <i class="iconfont icon-pwd"></i>
            <input autocomplete="off" @keydown.enter="enter" v-model="password" type="password" placeholder="请输入房间密码"/>
          </div>
          <div class="input">
            <TButton @click.native="enter">进入</TButton>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  import TButton from '../TButton'
  import api from '../../api'
  export default{
    name: 'inputPassWord',
    data () {
      return {
        visible: false,
        loading: false,
        password: '',
        rid: 0,
        succCallback: null
      }
    },
    mounted () {
      this.visible = true
    },
    methods: {
      destroyElement () {
        this.$el.removeEventListener('transitionend', this.destroyElement)
        this.$el.parentNode.removeChild(this.$el)
        this.$destroy(true)
      },
      close () {
        this.visible = false
        this.$el.addEventListener('transitionend', this.destroyElement)
      },
      enter () {
        api.inputRoomPassWord(this.rid, this.password).then(res => {
          this.visible = false
          this.succCallback()
        })
      }
    },
    components: {
      TButton
    }
  }
</script>

<style lang="less" scoped>
  @media(max-width:768px){
    .login-box{
      width: 100%;
    }
  }
  .input-password{
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
    .input-password-box{
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1001;
      transform: translate(-50%,-50%);
      width: 400px;
      height: 255px;
      background-color: #fff;
      box-shadow: 0 0 4px rgba(0,0,0,.15);
      visibility: visible;
      border-radius: 4px;
      border: 1px solid rgb(255, 255, 255);
      >.input-password-hd{
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
            width: 125px;
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
      }
    }
  }
</style>
