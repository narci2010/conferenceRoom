<template>
  <div class="room">
    <header class="room-hd">
      <div class="host-pic">
        <img src="http://static.hdslb.com/live-static/live-room/images/gift-section/gift-39.gif?12cc11">
      </div>
      <div class="host-title">上波分 美滋滋</div>
    </header>
    <div class="main">
      <div class="host-video">
        <video  src="http://cn-zjjh-cmcc-v-03.acgvideo.com/vg5/3/87/12548079-1.mp4?expires=1483630500&ssig=6VXBaP_ZkJ0qzn_--c5teg&oi=1880810468&nfa=BaDS8BUFZDb8iKo4Vfwarw==&dynamic=1"></video>
      </div>
      <div class="chat">
        <ul class="chat-list">
          <li>啦啦啦</li>
        </ul>
        <div class="ctrl-panel">
          <SendBox placeholder="请输入弹幕DA☆ZE～"></SendBox>
        </div>
      </div>
    </div>
    <!--<DragBox>-->
      <!--<VideoBox tagTitle="me">-->
        <!--<video :src="localVideoSrc" autoplay></video>-->
      <!--</VideoBox>-->
    <!--</DragBox>-->
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
  }
  .main{
    position: relative;
    padding-right: 320px;
    .host-video{
      video{
        width: 100%;
      }
    }
    .chat{
      position: absolute;
      width: 300px;
      height: 500px;
      right: 0px;
      top: 0;
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
        position: absolute;
        padding: 10px 10px 5px 10px;
        background-color: #fff;
        border-top: 1px solid #ddd;
        bottom: 0;
      }
    }
  }
</style>
