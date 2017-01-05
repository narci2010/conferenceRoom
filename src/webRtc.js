export default {
  getLocalCameraStreams (opt = {video: true, audio: true}) {
    return new Promise((resolve, reject) => {
      window.navigator.mediaDevices.getUserMedia(opt).then(stream => {
        resolve(window.URL.createObjectURL(stream))
      }).catch(err => {
        reject(err)
      })
    })
  }
}
