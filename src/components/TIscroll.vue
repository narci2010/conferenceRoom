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
    name: 'tIScroll',
    data () {
      return {
        tScroll: null
      }
    },
    components: {
    },
    watch: {
      '$route' (to, from) {
        setTimeout(() => {
          this.modifyHeight()
          this.tScroll.refresh()
        }, 600)
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.modifyHeight()
        this.tScroll = new IScroll('#t-iscroll-wrapper', {
          mouseWheel: true,
          scrollbars: true,
          fade: true
        })
      })
    },
    methods: {
      modifyHeight () {
        document.querySelector('#t-iscroll-wrapper>div').style.height = document.querySelector('.view').clientHeight + 'px'
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
