import BaseWebRtc from './BaseWebRtc'
import api from '../api'

export default class NormalWebRtc extends BaseWebRtc {
  constructor (roomId, $echo) {
    super(roomId, $echo)

    this.$echo.private('user.' + api.getSelfId()).listen('AnswerWasReceived', (e) => {
      // 返序列化
      e.answer = JSON.parse(e.answer)
      this.pc.setRemoteDescription(new window.RTCSessionDescription(e.answer))
    })
    // 发送ICE候选到主持人
    this.pc.onicecandidate = (event) => {
      api.sendObj2Host(this.rommId, 'ice_candidate', event.candidate)
    }
    this.pc.onaddstream = (event) => {
      this.$emit('host_video', window.URL.createObjectURL(event.stream))
    }
    this.getLocalCameraStreams().then(stream => {
      this.pc.addStream(stream)
      this.pc.createOffer((offer) => {
        this.pc.setLocalDescription(offer)
        api.sendObj2Host(this.rommId, 'offer', offer).then(res => {}, res => {})
      }, (error) => {
        console.error('创建offer出错:' + error)
      })
    })
  }
}
