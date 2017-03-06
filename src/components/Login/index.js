import Login from './Login'

export default {
  install (Vue, options = {}) {
    let LoginConstructor = Vue.extend(Login)
    Vue.prototype.$showLogin = () => {
      let instance = new LoginConstructor()
      instance.$mount()
      document.body.appendChild(instance.$el)
      return instance
    }
    Vue.mixin({
      created () {
      }
    })
  }
}
