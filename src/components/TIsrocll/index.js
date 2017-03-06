import TIscroll from './TIsrocll.vue'

export default {
  install (Vue, options = {}) {
    Vue.prototype.$updataIscroll = (heiht) => {
      setTimeout(() => {
        TIscroll.methods.modifyHeight(heiht)
      }, 0)
    }
    Vue.component(TIscroll.name, TIscroll)
    Vue.mixin({
      created () {
        TIscroll.methods.modifyHeight()
      }
    })
  }
}
