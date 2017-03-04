import EvemtEmiter from './EventEmiter'
export default class BaseWebRtc extends EvemtEmiter {
  constructor (roomId, $echo) {
    super()
    this.rommId = roomId
    this.$echo = $echo
    this.iceServer = {
      'iceServers': [{
        'url': 'stun:stun.l.google.com:19302'
      }]
    }
    this.pc = new window.RTCPeerConnection(this.iceServer)
  }
  getLocalCameraStreams (opt = {video: true, audio: true}) {
    return new Promise((resolve, reject) => {
      window.navigator.mediaDevices.getUserMedia(opt).then(stream => {
        this.$emit('localStream', window.URL.createObjectURL(stream))
        resolve(stream)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
