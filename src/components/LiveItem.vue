<template>
  <div class="live-item-wapper col-xs-12 col-sm-6 col-md-4 col-lg-3">
    <div :class="{'disabled': disabled}" class="live-item">
      <a class="cover" @click="goRoom">
        <div class="mask">
          <i class="iconfont" :class="{'icon-play': room.need_password === 0,'icon-password': room.need_password === 1}"></i>
        </div>
        <img :src="room.cover.r" :title="room.title"/>
      </a>
      <footer>
        <h3>
          <a href="javascript:;" :title="room.title" @click="goRoom">{{room.title}}</a>
        </h3>
        <a href="#" :title="room.user.real_name"><img :src="room.user.avatar.is">{{room.user.real_name}}</a>
        <span>
          <span class="p-num" :title="'在线人数：' + room.online_user_number + '人'"><i class="iconfont icon-user"></i>{{room.online_user_number}}</span>
          <span class="state">
            <i class="iconfont icon-time"></i>
            <template v-if="!disabled">{{room.last_open_time | startedTime}}</template>
            <template v-else>{{room.last_open_time | onlyDate}}</template>
          </span>
        </span>
      </footer>
    </div>
  </div>
</template>

<script>
    export default {
      props: {
        room: Object,
        disabled: Boolean
      },
      data () {
        return {
        }
      },
      components: {
      },
      methods: {
        goRoom () {
          if (!this.disabled) {
            if (this.room.need_password === 1) {
              // 需要密码
              this.$showInputPassWord(this.room.id, () => {
                this.$router.push({name: 'room', params: { id: this.room.id }})
              })
            } else {
              this.$router.push({name: 'room', params: { id: this.room.id }})
            }
          }
        }
      }
    }
</script>

<style scoped lang="less">
.live-item-wapper{
  padding: 10px;
}
.disabled *, .disabled{
  cursor: not-allowed;
}
@media(max-width:768px){
  .live-item-wapper{
    padding: 5px;
  }
}
.live-item{
  cursor: pointer;
  &:not(.disabled):hover{
      border-bottom-color: transparent;
      box-shadow: 2px 2px 4px rgba(0,0,0,.25)
  }
  &:not(.disabled):hover >.cover > img{
    transform: scale(1.2);
  }
  &:not(.disabled):hover >.cover > .mask{
    opacity: 1;
  }
  transition: box-shadow .3s, border-bottom .3s;
  border-bottom: 1px solid #F0F0F0;
  background-color: #fff;
  .cover{
    position: relative;
    overflow: hidden;
    width: 100%;
    display: block;
    .mask{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      z-index: 10;
      transition: opacity .3s;
      &::after{
        content: '';
        position: absolute;
        z-index: 10;
        background-color: black;
        opacity: .5;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
      i{
        position: absolute;
        color: #fff;
        z-index: 11;
        font-size: 32px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    img{
      transition: transform .3s;
      width: 100%;
      min-height: 145px;
    }
  }
  footer{
    position: relative;
    height: 52px;
    >h3{
      height: 20px;
      margin: 0;
      margin-top: 3px;
      padding: 0 20px 0 5px;
      font-size: 16px;
      line-height: 20px;
      overflow: hidden;
      >a{
        white-space: nowrap;
        text-overflow: ellipsis;
        -ms-text-overflow: ellipsis;
        color: #3A3A3A;
        font-weight: normal;
        text-decoration: none;
      }
    }
    >a{
      position: absolute;
      left: 5px;
      bottom: 5px;
      text-decoration: none;
      color: #666;
      font-size: 14px;
      line-height: 22px;
      img{
        float: left;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        margin-right: 3px;
      }
    }
    >span{
      position: absolute;
      right: 7px;
      bottom: 7px;
      cursor: pointer;
      font-size: 12px;
      color: #888;
      .iconfont{
        font-size: 16px;
        margin-right: 2px;
        &.icon-user{
          font-size: 14px;
        }
      }
      .p-num{
        margin-right: 4px;
      }
    }
  }
}
</style>
