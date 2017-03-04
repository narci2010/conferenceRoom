<template>
  <div class="room">
    <div class="container">
      <header class="room-hd">
        <div class="host-pic">
          <img :title="roomInfo.user.real_name" :src="roomInfo.user.avatar.l">
        </div>
        <div class="host-title">{{roomInfo.title}}</div>
        <div class="detail">
          <span class="user" :title="roomInfo.user.real_name">{{roomInfo.user.real_name}}</span>
          <span class="p-num" :title="'在线人数：' + roomInfo.online_user_number + '人'"><i class="iconfont icon-user"></i>{{roomInfo.online_user_number}}</span>
          <span class="state"><i class="iconfont icon-time"></i>{{roomInfo.last_open_time | startedTime}}</span>
        </div>
      </header>
      <div class="main">
        <div class="host-video">
          <TVideo :src="hostVideoSrc"></TVideo>
        </div>
        <div class="chat hidden-xs hidden-sm">
          <header>
            <span :class="{'active': !sideIsChat}" @click="sideIsChat = false"><i class="iconfont icon-user-list"></i>用户</span>
            <span :class="{'active': sideIsChat}" @click="sideIsChat = true"><i class="iconfont icon-chat"></i>聊天</span>
          </header>
          <div v-if="sideIsChat" class="chat-box">
            <ul ref="cList" class="chat-list">
              <li v-for="item in chatList"><a href="#" target="_blank" class="name">{{item.real_name}}：</a>{{item.message}}</li>
            </ul>
            <div class="ctrl-panel">
              <SendBox @send="sendMsg" placeholder="请输入弹幕DA☆ZE～"></SendBox>
            </div>
          </div>
          <div v-else class="user-list-box">
            <ul>
              <li v-for="user in userList">
                <a href="#" target="_blank"><img :src="user.avatar.is"> <span>{{user.real_name}}</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="notice hidden-xs hidden-sm">
        {{roomInfo.notice}}
      </div>
    </div>
    <!--本地视频-->
    <DragBox>
      <VideoBox tagTitle="me">
        <video autoplay muted class="local_video" :src="localVideoSrc"></video>
      </VideoBox>
    </DragBox>
    <TFooter></TFooter>
  </div>
</template>

<script>
  import DragBox from '../components/DragBox'
  import VideoBox from '../components/VideoBox'
  import TVideo from '../components/TVideo'
  import SendBox from '../components/SendBox'
  import Panel from '../components/Panel'
  import api from '../api'
  import NormalWebRtc from '../webRtc/NormalWebRtc'
  export default {
    name: 'room',
    components: {
      DragBox, VideoBox, TVideo, SendBox, Panel
    },
    data () {
      return {
        localVideoSrc: null,
        hostVideoSrc: null,
        sideIsChat: true,
        chatList: [],
        userList: [],
        roomInfo: {
          user: {
            avatar: {}
          }
        }
      }
    },
    methods: {
      sendMsg (msg) {
        api.sendMessage(this.$route.params.id, msg)
      },
      getUserList () {
        api.getOnlineUsers(this.$route.params.id).then(res => {
          this.userList = res.data.data
        })
      }
    },
    beforeDestroy () {
    },
    mounted () {
      let normalWebRtc = new NormalWebRtc(this.$route.params.id, this.$echo)
      normalWebRtc.$on('localStream', src => {
        this.localVideoSrc = src
      })
      normalWebRtc.$on('host_video', src => {
        this.hostVideoSrc = src
      })
      this.$echo.join('chat-room.' + this.$route.params.id)
      .here(() => {
        // 更新在线用户列表
        this.getUserList()
        api.getRoomInfo(this.$route.params.id).then(res => {
          this.roomInfo = res.data.data
        })
      })
      .joining(this.getUserList)
      .leaving(this.getUserList)
      .listen('ChatMessageWasReceived', (e) => {
        this.chatList.push(e)
        let cList = this.$refs['cList']
        cList.scrollTop = cList.scrollHeight
      })
    }
  }
</script>

<style lang="less" scoped>
  .local_video{
    width: 300px;
  }
  .room-hd {
    height: 77px;
    padding: 7px;
    margin-bottom: 10px;
    border-bottom: 1px solid #F0F0F0;
    background-color: #fff;
    position: relative;
    padding-left: 85px;
    .host-pic{
      position: absolute;
      left: 7px;
      >img{
        height: 60px;
        width: 60px;
      }
    }
    .host-title {
      color: #3a3a3a;
      font-size: 24px;
      line-height: 30px;
      height: 30px;
      margin: 0 0 8px;
      white-space: nowrap;
      word-wrap: normal;
      -ms-text-overflow: ellipsis;
      text-overflow: ellipsis;
    }
    .detail{
      margin-top: 10px;
      margin-left: 3px;
      font-size: 14px;
      color: #666;
      >span{
        margin-right: 10px;
        .iconfont{
          margin-right: 3px;
          &.icon-user{
            font-size: 14px;
          }
        }
      }
    }
  }
  .main{
    position: relative;
    display: flex;
    margin-bottom: 20px;
    .host-video{
      height: 500px;
      flex-direction: row;
      flex: 1;
    }
    .chat{
      width: 300px;
      height: 500px;
      border: 1px solid #ececec;
      border-top: 0;
      background-color: #fbfbfb;
      display: flex;
      flex-direction: column;
      >header{
        >span{
          background-color: #E8E8E8;
          font-size: 14px;
          cursor: pointer;
          width: 50%;
          float: left;
          text-align: center;
          line-height: 40px;
          .iconfont{
            font-size: 14px;
            margin-right: 10px;
          }
          &:hover{
            color: #1497DB
          }
          &.active{
            background-color: #fff;
            color: #1497DB
          }
        }
      }
      .user-list-box{
        flex: 1;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        ul{
          padding: 0;
          margin: 0;
          li:hover{
            background-color: #f9f9f9;
          }
          a{
            padding: 10px;
            text-decoration: none;
            color: #666;
            display: flex;
            img{
              width: 25px;
              height: 25px;
            }
            span{
              margin-left: 10px;
              flex: 1;
              line-height: 25px;
            }
          }
        }
      }
      .chat-box{
        flex: 1;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        .chat-list{
          padding: 10px;
          flex: 1;
          margin: 0;
          overflow-y: scroll;
          li{
            font-size: 13px;
            margin-bottom: 5px;
            .name{
              color: #1497DB;
              text-decoration: none;
            }
          }
        }
        .ctrl-panel{
          width: 100%;
          padding: 10px 10px 5px 10px;
          background-color: #fff;
          border-top: 1px solid #ddd;
        }
      }
    }
  }
  .notice{
    background-color: #fff;
    margin-top: 20px;
    padding: 15px;
    font-size: 14px;
    white-space: pre-wrap;
    color: #6d757a;
    line-height: 25px;
    word-wrap: break-word;
  }
  @media (min-width: 1201px){
    .chat{
      width: 300px!important;
    }
  }
  @media (min-width: 1001px) and (max-width: 1200px){
    .chat{
      width: 250px!important;
    }
  }
</style>

