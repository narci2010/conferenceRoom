<template>
  <div class="video-tag">
    <div class="content"><slot></slot></div>
    <div class="mask"></div>
  </div>
</template>

<script>
  export default {
    name: 'videotag'
  }
</script>

<style scoped lang="less">
.video-tag{
  position: absolute;
  top: 50px;
  left: 20px;
  .content{
    position: relative;
    padding: 3px 10px;
    color: #fff;
    z-index: 2;
    font-family: 'RBNo2Light';
    font-size: 26px;
    opacity: .8;
  }
  .mask{
    background-color: #000;
    opacity: .4;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
  }
}
</style>
