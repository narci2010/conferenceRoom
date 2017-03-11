<template>
  <div class="tvideo">
    <video crossOrigin="anonymous" ref="video" :src="src"></video>
    <div class="control">
      <div class="control-btn">
        <i @click="isPause = true" v-if="!isPause" title="暂停" class="iconfont icon-pause"></i>
        <i @click="isPause = false" v-else title="播放" class="iconfont icon-play"></i>
      </div>
      <div class="volume" :style="{width: val + 'px'}"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tvideo',
    props: {
      src: String
    },
    data () {
      return {
        isPause: false,
        video: null,
        analyser: null,
        dataArray: null,
        val: 0
      }
    },
    watch: {
      'isPause' () {
        if (this.isPause) {
          this.video.pause()
        } else {
          this.video.play()
        }
      }
    },
    mounted () {
      this.video = this.$refs['video']
      this.video.play()
      window.AudioContext = window.AudioContext || window.webkitAudioContext
      let ctx = new window.AudioContext()
      this.analyser = ctx.createAnalyser()
      this.dataArray = new Uint8Array(this.analyser.frequencyBinCount)
      ctx.createMediaElementSource(this.$refs.video).connect(this.analyser)
      this.analyser.connect(ctx.destination)
      this.changeVolume()
    },
    methods: {
      changeVolume () {
        window.requestAnimationFrame(this.changeVolume)
        this.analyser.getByteFrequencyData(this.dataArray)
        this.val = (this.dataArray.reduce((previous, current) => {
          return previous + current
        }) / this.analyser.frequencyBinCount) * 2.5
      }
    }
  }
</script>

<style scoped lang="less">
  .tvideo, video{
    background-color: #333;
    width: 100%;
    height: 100%;
  }
  .tvideo{
    position: relative;
    padding-bottom: 40px;
    .control{
      border: 1px solid #ececec;
      border-right: none;
      height: 40px;
      background-color: #FFF;
      position: absolute;
      bottom: 0;
      width: 100%;
      z-index: 12;
      .control-btn{
        position: absolute;
        top: 8px;
        left: 10px;
        cursor: pointer;
        color: #A0A0AB;
        i{
          position: absolute;
          font-size: 22px;
          &.icon-play{
            font-size: 18px;
            top: 3px;
            left: 2px;
          }
        }
      }
      .volume{
        position: absolute;
        left: 0;
        bottom:0;
        height: 3px;
        background-color: #007fff;
      }
    }
  }
</style>
