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
          <video controls src="http://cn-zjjh3-dx-v-06.acgvideo.com/vg2/5/97/14170209-1.mp4?expires=1487268300&platform=html5&ssig=bQvfmy8L_jz11oh3ZUyGAw&oi=1919292107&nfa=BaDS8BUFZDb8iKo4Vfwarw==&dynamic=1"></video>
        </div>
        <div class="chat hidden-xs hidden-sm">
          <ul class="chat-list">
            <li>啦啦啦</li>
          </ul>
          <div class="ctrl-panel">
            <SendBox placeholder="请输入弹幕DA☆ZE～"></SendBox>
          </div>
        </div>
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
  // import webRtc from '../webRtc'
  export default {
    name: 'room',
    components: {
      DragBox, VideoBox, TVideo, SendBox
    },
    data () {
      return {
        localVideoSrc: null
      }
    },
    mounted () {
      // webRtc.getLocalCameraStreams().then(src => {
        // this.localVideoSrc = src
      // })
    }
  }
</script>

<style lang="less" scoped>
  .room-hd {
    margin-top: 30px;
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
      flex-direction: row;
      flex: 1;
      video{
        width: 100%;
        height: 500px;
        background-color: #000;
      }
    }
    .chat{
      width: 300px;
      height: 500px;
      border: 1px solid #ececec;
      border-top: 0;
      background-color: #fbfbfb;
      padding-bottom: 91px;
      .chat-list{
        overflow-x: hidden;
        overflow-y: scroll;
        height: 100%;
        padding: 10px;
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
  @media (min-width: 1201px){
    .chat {
      width: 300px!important;
    }
  }
  @media (min-width: 1001px) and (max-width: 1200px){
    .chat {
      width: 250px!important;
    }
  }
</style>
