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
      <ul ref="cList" class="chat-list-ul">
        <li v-for="item in chatList"><a href="#" target="_blank" class="name">{{item.real_name}}：</a>{{item.message}}</li>
      </ul>
      <SendBox @send="sendMsg" placeholder="请输入弹幕DA☆ZE～"></SendBox>
    </div>
    <!--本地视频-->
    <DragBox>
      <VideoBox tagTitle="me">
        <video autoplay muted class="local_video" id="local" :src="localVideoSrc"></video>
      </VideoBox>
    </DragBox>
  </div>
</template>

<script>
  import HostWebRtc from '../webRtc/HostWebRtc'
  import TVideo from '../components/TVideo'
  import DragBox from '../components/DragBox'
  import VideoBox from '../components/VideoBox'
  import SendBox from '../components/SendBox'
  import api from '../api'
  export default{
    name: 'host',
    data () {
      return {
        localVideoSrc: null,
        normals: {},
        chatList: [],
        hostWebRtc: null,
        roomInfo: {},
        timer: null
      }
    },
    components: {
      TVideo, DragBox, VideoBox, SendBox
    },
    methods: {
      sendMsg (msg) {
        api.sendMessage(this.$route.params.id, msg)
      },
      dataURLtoBlob (dataurl) {
        let arr = dataurl.split(',')
        let mime = arr[0].match(/:(.*?);/)[1]
        let bstr = window.atob(arr[1])
        let n = bstr.length
        let u8arr = new Uint8Array(n)
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n)
        }
        return new window.Blob([u8arr], {type: mime})
      },
      captureImage () {
        let video = document.querySelector('#local')
        let canvas = document.createElement('canvas')
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)
        api.uploadPicture(this.dataURLtoBlob(canvas.toDataURL())).then(res => {
          api.modifyRoom(this.$router.params.id, {
            'current_frame_cover': res.picture
          })
        })
      }
    },
    beforeDestroy () {
      if (this.timer) {
        window.clearInterval(this.timer)
      }
      api.closeLive()
      this.hostWebRtc.closeLocalCameraStream()
    },
    mounted () {
      api.startLive()
      api.getRoomInfo(this.$route.params.id).then(res => {
        this.roomInfo = res.data.data
        if (!this.roomInfo.is_custom_cover === false) {
          this.timer = setInterval(() => {
            // 上传封面
            console.log(this.captureImage())
          }, 10000)
        }
      })
      if (this.$echo === undefined) {
        api.createEcho()
      }
      this.hostWebRtc = new HostWebRtc(this.$route.params.id, this.$echo)
      this.hostWebRtc.$on('localStream', stream => {
        this.localVideoSrc = stream
      })
      this.hostWebRtc.$on('join', (uid, normalUser) => {
        this.normals[uid] = normalUser
        this.$forceUpdate()
      })
      this.hostWebRtc.$on('add_iceCandidate', (uid, iceCandidate) => {
        this.normals[uid].pc.addIceCandidate(new window.RTCIceCandidate(iceCandidate))
      })
      this.hostWebRtc.$on('onaddstream_src', (uid, src) => {
        this.normals[uid].src = src
        this.$forceUpdate()
      })
      this.$echo.join('chat-room.' + this.$route.params.id)
        .listen('ChatMessageWasReceived', (e) => {
          this.chatList.push(e)
          let cList = this.$refs['cList']
          cList.scrollTop = cList.scrollHeight
        })
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
  top: 65px;
  bottom: 0;
  .send-box{
    position: absolute;
    bottom: 0;
    left: 10px;
    right: 10px;
  }
  .chat-list-ul {
    padding: 10px;
    margin: 0;
    overflow-y: scroll;
    position: absolute;
    top: 0;
    bottom: 75px;
    width: 100%;
    li {
      font-size: 13px;
      margin-bottom: 5px;
      .name {
        color: #1497DB;
        text-decoration: none;
      }
    }
  }
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
