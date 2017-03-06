<template>
  <div class="t-header">
    <header>
      <div class="container content">
        <a href="#/home" class="logo"><img src="../assets/logo.png"><span>视频会议室</span></a>
        <span class="search hidden-xs">
          <input placeholder="房间号或房间名" type="text">
          <button type="button" class="iconfont icon-sousuo search-btn"></button>
        </span>
        <span class="right">
          <div class="start">
            <i class="iconfont icon-kaibo"></i>
            <a @click="startMeet" href="javascript:;">开会</a>
          </div>
          <div class="un-login-btn" v-if="$root.me == null">
            <i class="iconfont icon-user"></i>
            <a class="clickstat" href="javascript:;" @click="$showLogin">登录</a>
            <i class="cut">|</i>
            <a href="#">注册</a>
          </div>
          <UserInfo @log_out="logOut" :info="$root.me" v-else></UserInfo>
        </span>
      </div>
    </header>
  </div>
</template>

<script>
  import api from '../api'
  import UserInfo from './UserInfo'
  export default {
    name: 'THeader',
    data () {
      return {
      }
    },
    components: {
      UserInfo
    },
    mounted () {
      if (api.loggedIn()) {
        api.getMe().then(res => {
          this.$root.me = res.data.data
        })
      }
    },
    methods: {
      logOut () {
        this.$root.me = null
      },
      startMeet () {
        if (this.$root.me && this.$root.me.room_id !== '') {
          this.$router.push({name: 'host', params: {id: this.$root.me.room_id}})
        } else {
          this.$router.push({name: 'createRoom'})
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .t-header{
    height: 50px;
    header{
      position: fixed!important;
      top: 0;
      width: 100%;
      z-index: 100;
      font-size: 12px;
      background-color: #fff;
      border-bottom: 1px solid #e2e2e2;
      box-shadow: 0 0 6px rgba(0,0,0,.06);
      height: 50px;
      .content{
        position: relative;
        padding-left: 150px;
        height: 100%;
        .logo{
          text-decoration: none;
          height: 36px;
          position: absolute;
          top: 7px;
          left: 15px;
          color: #333;
          img{
            height: 100%;
            margin-right: 10px;
          }
          span{
            font-size: 18px;
            position: relative;
            top: -10px;
          }
        }
        .search{
          float: left;
          margin: 10px 0 0 20px;
          position: relative;
          input{
            border-radius: 3px;
            border: 1px solid #e0e0e0;
            padding: 4px 26px 4px 12px;
            width: 180px;
            height: 30px;
            line-height: 20px;
            color: #999;
            outline: 0;
            font-size: 12px;
            transition: border-color .3s;
            &:focus{
              border-color: #4FC1E9;
              box-shadow: 0 0 6px rgba(0,0,0,.06);
            }
            &:focus+.search-btn{
              color: #1497DB;
            }
          }
          .search-btn{
            font-size: 15px;
            position: absolute;
            right: 0;
            top: 0;
            height: 30px;
            width: 26px;
            cursor: pointer;
            border: 0;
            outline: 0;
            background-color: transparent;
            color: #999;
            transition: color .3s;
          }
        }
        .right{
          float: right;
          line-height: 50px;
          >div{
            float: left;
            margin-left: 10px;
            &.start{
              margin-right: 15px;
            }
            .iconfont{
              margin-right: 2px;
              font-size: 20px;
              color: #8A8A8A;
              &.icon-user{
                font-size: 15px;
              }
            }
            a{
              font-size: 12px;
              color: #666;
              text-decoration: none;
              transition: color .3s;
              line-height: 20px;
              &:hover{
                color: #1497DB;
              }
            }
            &.un-login-btn{
              .cut{
                font-style: normal;
                padding: 0 2px;
              }
            }
          }
        }
      }
    }
  }
</style>
