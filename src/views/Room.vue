<template>
  <div class="room">
    <div class="container">
      <header class="room-hd">
        <div class="host-pic">
          <img title="陶炜" src="http://static.hdslb.com/live-static/live-room/images/gift-section/gift-39.gif?12cc11">
        </div>
        <div class="host-title">上波分 美滋滋</div>
        <div class="detail">
          <span class="user" title="陶炜">陶炜</span>
          <span class="p-num" title="在线人数：102人"><i class="iconfont icon-user"></i>102</span>
          <span class="state" title="已开始：102分钟"><i class="iconfont icon-time"></i>100分钟</span>
        </div>
      </header>
      <div class="main">
        <div class="host-video">
          <TVideo :src="localVideoSrc"></TVideo>
        </div>
        <div class="chat hidden-xs hidden-sm">
          <header>
            <span :class="{'active': !sideIsChat}" @click="sideIsChat = false"><i class="iconfont icon-user-list"></i>用户</span>
            <span :class="{'active': sideIsChat}" @click="sideIsChat = true"><i class="iconfont icon-chat"></i>聊天</span>
          </header>
          <div v-if="sideIsChat" class="chat-box">
            <ul class="chat-list">
              <li>啦啦啦</li>
            </ul>
            <div class="ctrl-panel">
              <SendBox @send="sendMsg" placeholder="请输入弹幕DA☆ZE～"></SendBox>
            </div>
          </div>
          <div v-else class="user-list-box">

          </div>
        </div>
      </div>
      <div class="notice hidden-xs hidden-sm">
        我打算看的距离喀什的卡拉时间的卡上来看大开杀戒道路喀什角动量喀什大肆夸奖的坷拉三季稻阿斯利康大家咯楼上单我打算看的距离喀什的卡拉时间的卡上来看大开杀戒道路喀什角动量喀什大肆夸奖的坷拉三季稻阿斯利康大家咯楼上单我打算看的距离喀什的卡拉时间的卡上来看大开杀戒道路喀什角动量喀什大肆夸奖的坷拉三季稻阿斯利康大家咯楼上单我打算看的距离喀什的卡拉时间的卡上来看大开杀戒道路喀什角动量喀什大肆夸奖的坷拉三季稻阿斯利康大家咯楼上单我打算看的距离喀什的卡拉时间的卡上来看大开杀戒道路喀什角动量喀什大肆夸奖的坷拉三季稻阿斯利康大家咯楼上单
      </div>
    </div>
    <TFooter></TFooter>
  </div>
</template>

<script>
  import DragBox from '../components/DragBox'
  import VideoBox from '../components/VideoBox'
  import TVideo from '../components/TVideo'
  import SendBox from '../components/SendBox'
  import Panel from '../components/Panel'
  import webRtc from '../webRtc'
  import api from '../api'
  export default {
    name: 'room',
    components: {
      DragBox, VideoBox, TVideo, SendBox, Panel
    },
    data () {
      return {
        localVideoSrc: null,
        sideIsChat: true
      }
    },
    methods: {
      sendMsg (msg) {
        api.sendMessage(this.$route.params.id, msg)
      }
    },
    beforeDestroy () {
    },
    mounted () {
      webRtc.getLocalCameraStreams().then(src => {
        this.localVideoSrc = src
      })
      this.$echo.join('chat-room.1')
      .listen('ChatMessageWasReceived', (e) => {
        console.log(e)
      })
    }
  }
</script>

<style lang="less" scoped>
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

