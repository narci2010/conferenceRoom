<template>
  <div class="host">
    <div class="video-list">
      <ul>
        <li class="col-xs-6 col-sm-6 col-md-4 col-lg-3" v-for="n in 15">
          <TVideo src="/static/dsm.mp4"></TVideo>
        </li>
      </ul>
    </div>
    <div class="chat-list">
      asdasdasd
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
    },
    mounted () {
      setTimeout(() => {
        this.$updataIscroll(window.innerHeight - 50)
      }, 10)
      window.onresize = () => {
        this.$updataIscroll(window.innerHeight - 50)
      }
    }
  }
</script>

<style scoped lang="less">
.chat-list{
  position: fixed;
  right: 0;
  width: 300px;
  background-color: #fff;
  top: 45px;
  bottom: 0;
}
.video-list{
  padding-right: 300px;
  overflow: hidden;
  ul {
    overflow: hidden;
    padding: 0;
    padding-left: 15px;
    li{
      padding-right: 15px;
      padding-bottom: 15px;
      float: left;
    }
  }
}
</style>
