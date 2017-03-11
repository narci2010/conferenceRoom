import EvemtEmiter from './EventEmiter'
// let ctx = new window.AudioContext()
// let analyser = ctx.createAnalyser()
// let dataArray = new Uint8Array(analyser.frequencyBinCount)
// let localVolume = null
// function changeVolume () {
//   if (localVolume === null) {
//     localVolume = document.querySelector('.local-volume')
//   }
//   window.requestAnimationFrame(changeVolume)
//   analyser.getByteFrequencyData(dataArray)
//   let height = (dataArray.reduce((previous, current) => {
//     return previous + current
//   }) / analyser.frequencyBinCount)
//   localVolume.style.height = height * 10 + 'px'
// }

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
        this.localStream = stream
        this.$emit('localStream', window.URL.createObjectURL(stream))
        // ctx.createMediaStreamSource(stream).connect(analyser)
        // analyser.connect(ctx.destination)
        // changeVolume()
        resolve(stream)
      }).catch(err => {
        reject(err)
      })
    })
  }
  closeLocalCameraStream () {
    this.localStream.getVideoTracks()[0].stop()
  }
}
