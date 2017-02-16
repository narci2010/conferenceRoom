<template>
  <div class="drag-box" :class="{'dialog-box': isDialog}" @mouseout="showHeader = false" @mouseover="showHeader = true"  :style="{'left': pos.x, 'top': pos.y}" >
    <header @mousedown="mousedown" :class="{'show-header': showHeader || isDialog, 'dialog-hd': isDialog}" class="move">
      <template v-if="showHeader || isDialog">{{isDialog ? title : '点击按住拖动'}}</template>
      <div v-if="isDialog" class="close"><i class="iconfont icon-close"></i></div>
    </header>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'dragbox',
    props: {
      isDialog: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      }
    },
    components: {
    },
    data () {
      return {
        pos: {
          x: '0px',
          y: '0px'
        },
        offset: {
          x: 0,
          y: 0
        },
        showHeader: true,
        isDown: false
      }
    },
    mounted () {
      document.addEventListener('mousemove', event => {
        if (this.isDown) {
          this.pos.x = event.clientX - this.offset.x + 'px'
          this.pos.y = event.clientY - this.offset.y + 'px'
        }
      })
      document.addEventListener('mouseup', () => {
        this.isDown = false
      })
    },
    methods: {
      mousedown (event) {
        this.isDown = true
        this.offset.x = event.offsetX
        this.offset.y = event.offsetY
      }
    }
  }
</script>

<style scoped lang="less">
.drag-box{
  position: fixed;
  z-index: 999;
  display: inline-block;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
  &.dialog-box{
    box-shadow: 0 0 4px rgba(0,0,0,.25)
  }
  .move{
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    background-color: transparent;
    transition: background-color .2s;
    &.dialog-hd{
      height: 40px;
      line-height: 40px;
      font-size: 18px;
      position: relative;
      .close{
        width: 40px;
        height: 40px;
        position: absolute;
        right: 0;
        top: 0;
        font-size: 14px;
        cursor: pointer;
        &>i{
          transition: transform .3s;
        }
        &:hover{
          background-color: #1296DB;
        }
        &:hover>i {
          transform: rotate(90deg)!important;
        }
      }
    }
    &:hover{
      background-color: #32B3DD;
      cursor: move;
    }
    &.show-header{
       background-color: #4FC1E9;
    }
  }
}
</style>
