<template>
  <div class="video-box">
    <VideoTag>{{tagTitle}}</VideoTag>
    <slot></slot>
  </div>
</template>

<script>
  import VideoTag from './VideoTag'
  export default {
    name: 'videobox',
    props: {
      tagTitle: String
    },
    components: {
      VideoTag
    }
  }
</script>

<style scoped lang="less">
  .video-box{
    padding: 10px;
    z-index: 999;
    background-color: #fff;
    box-shadow: 0 1px 1px 2px hsla(0,0%,75%,.35);
  }
</style>
