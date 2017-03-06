<template>
  <div class="home">
      <div class="container content">
        <div class="rooms">
          <h3>正在会议</h3>
          <LiveItem :room="room" v-for="room in startRooms"></LiveItem>
        </div>
        <div class="rooms">
          <h3>历史会议</h3>
          <LiveItem disabled :room="room" v-for="room in closeRooms"></LiveItem>
        </div>
      </div>
    <TFooter></TFooter>
  </div>
</template>

<script>
  import LiveItem from '../components/LiveItem'
  import api from '../api'
  export default {
    name: 'home',
    components: {
      LiveItem
    },
    data () {
      return {
        startRooms: [],
        closeRooms: []
      }
    },
    mounted () {
      api.getRooms(1).then(res => {
        this.startRooms = res.data.data
      })
      api.getRooms(0).then(res => {
        this.closeRooms = res.data.data
      })
    }
  }
</script>

<style lang="less" scoped>
  .content{
    overflow: hidden;
    .rooms{
      width: 100%;
      overflow: hidden;
      h3{
        margin: 20px 0;
        height: 31px;
        font-size: 24px;
        font-weight: 400;
      }
    }
  }
</style>
