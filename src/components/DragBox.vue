<template>
  <div class="drag-box" @mouseout="showHeader = false" @mouseover="showHeader = true"  :style="{'left': pos.x, 'top': pos.y}" >
    <header @mousedown="mousedown" :class="{'show-header': showHeader}" class="move"><template v-if="showHeader">点击按住拖动</template></header>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'dragbox',
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
        showHeader: false,
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
  display: inline-block;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
  .move{
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    background-color: transparent;
    transition: background-color .2s;
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
