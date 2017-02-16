<template>
  <div class="home">
    <div class="container content">
      <LiveItem v-for="n in 3"></LiveItem>
    </div>
    <TFooter></TFooter>
  </div>
</template>

<script>
  import LiveItem from '../components/LiveItem'
  export default {
    name: 'home',
    components: {
      LiveItem
    },
    data () {
      return {
      }
    },
    mounted () {
    }
  }
</script>

<style lang="less" scoped>
  .content{
    padding-top: 30px;
    overflow: hidden;
  }
</style>
