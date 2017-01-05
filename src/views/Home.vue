<template>
  <div class="home">
    <DragBox>
      <VideoBox tagTitle="me">
        <video :src="localVideoSrc" autoplay></video>
      </VideoBox>
    </DragBox>
  </div>
</template>

<script>
  import DragBox from '../components/DragBox'
  import VideoBox from '../components/VideoBox'
  import TVideo from '../components/TVideo'
  import webRtc from '../webRtc'
  export default {
    name: 'home',
    components: {
      DragBox, VideoBox, TVideo
    },
    data () {
      return {
        localVideoSrc: null
      }
    },
    mounted () {
      webRtc.getLocalCameraStreams().then(src => {
        this.localVideoSrc = src
      })
    }
  }
</script>

<style lang="less" scoped>
</style>
