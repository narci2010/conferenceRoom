import InputPassWord from './InputPassWord'

export default {
  install (Vue, options = {}) {
    let InputPassWordConstructor = Vue.extend(InputPassWord)
    Vue.prototype.$showInputPassWord = (rid, succCallback) => {
      let instance = new InputPassWordConstructor({data: {rid, succCallback}})
      instance.$mount()
      document.body.appendChild(instance.$el)
      return instance
    }
    Vue.mixin({
    })
  }
}
