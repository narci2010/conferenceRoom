export default class EventEmiter {
  constructor () {
    this.eventListeners = {}
  }
  // 监听事件
  $on (eventName, callback) {
    this.eventListeners[eventName] = this.eventListeners[eventName] || []
    this.eventListeners[eventName].push(callback)
  }
  // 触发事件
  $emit (eventName, ...args) {
    let listeners = this.eventListeners[eventName]
    if (listeners) {
      listeners.forEach(callback => {
        callback(...args)
      })
    }
  }
  // 移除事件监听
  $removeListeners (eventName) {
    delete this.eventListeners[eventName]
  }
}
