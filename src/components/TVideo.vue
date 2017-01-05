<template>
  <div class="tvideo">
    <video :src="src" autoplay @volumechange="volume = $event.volume"></video>
    <div class="volume-bar"></div>
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
        volume: 0
      }
    },
    mounted () {
    },
    methods: {
    }
  }
</script>

<style scoped lang="less">

</style>
