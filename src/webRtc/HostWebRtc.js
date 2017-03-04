import BaseWebRtc from './BaseWebRtc'
import api from '../api'

export default class NormalWebRtc extends BaseWebRtc {
  constructor (roomId, $echo) {
    super(roomId, $echo)
    this.getLocalCameraStreams().then(stream => {
      this.$echo.private('user.' + api.getSelfId()).listen('ObjWasReceived', (e) => {
        // 返序列化
        e.obj = JSON.parse(e.obj)
        if (e.type === 'offer') {
          // 接收到用户的offer
          let normalUser = {
            id: e.user_id,
            src: null,
            pc: new window.RTCPeerConnection(this.iceServer)
          }
          normalUser.pc.addStream(stream)
          normalUser.pc.onaddstream = (event) => {
            this.$emit('onaddstream_src', e.user_id, window.URL.createObjectURL(event.stream))
          }
          normalUser.pc.setRemoteDescription(new window.RTCSessionDescription(e.obj), () => {
            normalUser.pc.createAnswer((desc) => {
              normalUser.pc.setLocalDescription(desc)
              api.sendAnswer(normalUser.id, desc)
            }, (error) => {
              console.error('出错了：' + error)
            })
          }, (error) => {
            console.error('出错了：' + error)
          })
          this.$emit('join', e.user_id, normalUser)
        } else if (e.type === 'ice_candidate') {
          // 接收到用户的ice 候选
          if (e.obj !== null) {
            this.$emit('add_iceCandidate', e.user_id, e.obj)
            // this.videos[data.uid].pc.addIceCandidate(new window.RTCIceCandidate(data.candidate))
          }
        }
      })
    })
  }
}
