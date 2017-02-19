import TIscroll from './index.vue'

export default {
  install (Vue, options = {}) {
    Vue.prototype.$afterRouteLeave = () => {
      TIscroll.methods.modifyHeight()
    }
    Vue.component(TIscroll.name, TIscroll)
    Vue.mixin({
      created () {
        TIscroll.methods.modifyHeight()
      }
    })
  }
}
