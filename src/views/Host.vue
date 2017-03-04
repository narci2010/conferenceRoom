<template>
  <div class="host">
    <div class="video-list">
      <ul>
        <li class="col-xs-6 col-sm-6 col-md-4 col-lg-3" v-for="item in normals">
          <TVideo :src="item.src"></TVideo>
        </li>
      </ul>
    </div>
    <div class="chat-list">

    </div>
    <!--本地视频-->
    <DragBox>
      <VideoBox tagTitle="me">
        <video autoplay muted class="local_video" :src="localVideoSrc"></video>
      </VideoBox>
    </DragBox>
  </div>
</template>

<script>
  import HostWebRtc from '../webRtc/HostWebRtc'
  import TVideo from '../components/TVideo'
  import DragBox from '../components/DragBox'
  import VideoBox from '../components/VideoBox'
  export default{
    name: 'host',
    data () {
      return {
        localVideoSrc: null,
        normals: {}
      }
    },
    components: {
      TVideo, DragBox, VideoBox
    },
    mounted () {
      let hostWebRtc = new HostWebRtc(this.$route.params.id, this.$echo)
      hostWebRtc.$on('localStream', stream => {
        this.localVideoSrc = stream
      })
      hostWebRtc.$on('join', (uid, normalUser) => {
        this.normals[uid] = normalUser
        this.$forceUpdate()
      })
      hostWebRtc.$on('add_iceCandidate', (uid, iceCandidate) => {
        this.normals[uid].pc.addIceCandidate(new window.RTCIceCandidate(iceCandidate))
      })
      hostWebRtc.$on('onaddstream_src', (uid, src) => {
        this.normals[uid].src = src
        this.$forceUpdate()
      })
//      setTimeout(() => {
//        this.$updataIscroll(window.innerHeight - 50)
//      }, 10)
//      window.onresize = () => {
//        this.$updataIscroll(window.innerHeight - 50)
//      }
    }
  }
</script>

<style scoped lang="less">
  .local_video{
    width: 300px;
  }
.chat-list{
  position: fixed;
  right: 0;
  width: 300px;
  background-color: #fff;
  top: 45px;
  bottom: 0;
}
.video-list{
  padding-right: 300px;
  overflow: hidden;
  ul {
    overflow: hidden;
    padding: 0;
    padding-left: 15px;
    li{
      padding-right: 15px;
      padding-bottom: 15px;
      float: left;
    }
  }
}
</style>
