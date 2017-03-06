import Message from './Message'

export default {
  install (Vue, options = {}) {
    let MessageConstructor = Vue.extend(Message)
    Vue.prototype.$message = (options) => {
      if (typeof options === 'string') {
        options = {
          msg: options
        }
      }
      let instance = new MessageConstructor({
        data: options
      })
      instance.$mount()
      document.body.appendChild(instance.$el)
      return instance
    }
  }
}
