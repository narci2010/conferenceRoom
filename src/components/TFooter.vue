<template>
  <div class="t-footer">
    &copy; <a target="_blank" href="http://e8net.cn">e8net</a>
  </div>
</template>

<script>
  export default{
    name: 'TFooter',
    data () {
      return {
      }
    },
    components: {
    }
  }
</script>

<style scoped lang="less">
.t-footer{
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 35px;
  color: #666;
  overflow: hidden;
  a{
    text-decoration: none;
    color: #666;
  }
}
</style>
