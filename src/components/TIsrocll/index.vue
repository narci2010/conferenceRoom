<template>
  <div class="t-iscroll">
    <div id="t-iscroll-wrapper">
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import IScroll from 'iscroll'
  export default {
    name: 'TIScroll',
    data () {
      return {
      }
    },
    components: {
    },
    mounted () {
      window.iScroll = new IScroll('#t-iscroll-wrapper', {
        mouseWheel: true,
        scrollbars: true,
        fade: true
      })
      this.modifyHeight()
    },
    beforeRouteLeave (to, from, next) {
      window.iScroll.scrollTo(0, 0)
      next()
    },
    methods: {
      modifyHeight () {
        let div = document.querySelector('#t-iscroll-wrapper>div')
        if (div) {
          div.style.height = document.querySelector('.view').clientHeight + 'px'
          window.iScroll.refresh()
        }
      }
    }
  }
</script>

<style scoped lang="less">
  #t-iscroll-wrapper{
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    >div{
      overflow: hidden;
    }
  }
</style>
