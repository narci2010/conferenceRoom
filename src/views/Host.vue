<template>
  <div class="host">
    <div class="video-list">
      <ul>
        <li class="col-xs-5 col-sm-4 col-md-3 col-lg-2" v-for="n in 10"><TVideo src="/static/dsm.mp4"></TVideo></li>
      </ul>
    </div>
    <div class="chat-list">

    </div>
  </div>
</template>

<script>
  import TVideo from '../components/TVideo'
  export default{
    name: 'host',
    data () {
      return {
      }
    },
    components: {
      TVideo
    }
  }
</script>

<style scoped lang="less">
.chat-list{
  position: fixed;
  right: 0;
  width: 300px;
  background-color: #fff;
  top: 80px;
  bottom: 0;
}
.video-list{
  padding-right: 320px;
  overflow: hidden;
  ul {
    padding-right:15px;
    padding-left:15px;
    margin-right:auto;
    margin-left:auto;
    overflow: hidden;
    li{
      float: left;
      margin-right: 20px;
      margin-bottom: 20px;
    }
  }
}
</style>
