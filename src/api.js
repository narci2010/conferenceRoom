import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://192.168.7.239:8080/api'
Vue.http.options.emulateJSON = true
import io from 'socket.io-client'
window.io = io
import Echo from 'laravel-echo'

let api = {
  // 登录
  login (name, password) {
    return ajax('auth/login', 'post', {
      options: {
        name,
        password
      },
      succCallBack (res) {
        window.localStorage.token = res.data.token
      }
    })
  },
  getMe () {
    return ajax('me', 'get', {
      options: {
        headers: {
          Authorization: 'Bearer ' + this.getToken()
        }
      },
      succCallBack (res) {
        window.localStorage.selfId = res.data.data.id
        api.createEcho()
      }
    })
  },
  createEcho () {
    Vue.prototype.$echo = new Echo({
      broadcaster: 'socket.io',
      host: 'http://192.168.7.239:6001',
      auth: {
        headers: {
          'Authorization': 'Bearer ' + api.getToken()
        }
      }
    })
  },
  getSelfId () {
    return window.localStorage.selfId
  },
  getToken () {
    return window.localStorage.token
  },
  logout () {
    return ajax('auth/logout', 'get', {
      options: {
        headers: {
          Authorization: 'Bearer ' + this.getToken()
        }
      },
      succCallBack (res) {
        delete window.localStorage.token
      }
    })
  },
  // 更新token
  refreshToken () {
    return ajax('auth/refresh_token', 'post', {
      options: {
        headers: {
          Authorization: 'Bearer ' + this.getToken()
        }
      },
      succCallBack (res) {
        window.localStorage.token = res.data.token
      },
      errCallBack (res) {
        Vue.prototype.$message('身份信息过期，请重新登录')
        Vue.prototype.$showLogin()
      }
    })
  },
  loggedIn () {
    return !!window.localStorage.token
  },
  // 创建房间
  createRoom (room) {
    let temp = {...room}
    temp.is_custom_cover = temp.is_custom_cover ? '1' : '0'
    temp.need_password = temp.need_password ? '1' : '0'
    return ajax('rooms', 'post', {
      body: {
        ...temp
      },
      options: {
        headers: {
          Authorization: 'Bearer ' + this.getToken()
        }
      }
    })
  },
  // 修改房间信息
  modifyRoom (id, room) {
    let temp = {...room}
    temp.is_custom_cover = temp.is_custom_cover ? '1' : '0'
    temp.need_password = temp.need_password ? '1' : '0'
    return ajax('rooms/' + id, 'put', {
      body: {
        ...temp
      },
      options: {
        headers: {
          Authorization: 'Bearer ' + this.getToken()
        }
      }
    })
  },
  // 开播
  startLive () {
    return ajax('rooms/start_live', 'get', {
      options: {
        headers: {
          Authorization: 'Bearer ' + this.getToken()
        }
      }
    })
  },
  // 关播
  closeLive () {
    return ajax('rooms/close_live', 'get', {
      options: {
        headers: {
          Authorization: 'Bearer ' + this.getToken()
        }
      }
    })
  },
  // 获取房间列表
  getRooms (status) {
    return ajax('rooms', 'get', {
      options: {
        params: {
          status
        }
      }
    })
  },
  inputRoomPassWord (id, password) {
    return ajax('room/' + id + '/input_password', 'post', {
      options: {
        headers: {
          Authorization: 'Bearer ' + this.getToken()
        }
      },
      body: {
        password
      }
    })
  },
  uploadPicture (pic) {
    return ajax('ajax_upload_picture', 'post', {
      options: {
        headers: {
          Authorization: 'Bearer ' + this.getToken()
        }
      },
      body: {
        file: pic
      }
    })
  },
  // 获取房间信息
  getRoomInfo (id) {
    return ajax('room/' + id, 'get')
  },
  // 获取在线用户列表
  getOnlineUsers (id) {
    return ajax('room/' + id + '/online_users', 'get')
  },
  // 发送信息
  sendMessage (roomId, msg) {
    return ajax('room/' + roomId + '/send_message', 'post', {
      body: {
        msg
      },
      options: {
        headers: {
          Authorization: 'Bearer ' + this.getToken()
        }
      }
    })
  },
  // 发送对象给host
  sendObj2Host (roomId, type, obj) {
    return ajax('room/' + roomId + '/send_obj', 'post', {
      body: {
        type,
        obj: JSON.stringify(obj)
      },
      options: {
        headers: {
          Authorization: 'Bearer ' + this.getToken()
        }
      }
    })
  },
  // 发送应答
  sendAnswer (userId, answer) {
    return ajax('rooms/send_answer', 'post', {
      body: {
        user_id: userId,
        answer: JSON.stringify(answer)
      },
      options: {
        headers: {
          Authorization: 'Bearer ' + this.getToken()
        }
      }
    })
  }
}
Vue.prototype.$getToken = api.getToken
export default api
/**
 ajax 请求
 @param url
 @param type get|post|put|jsonp ....
 @param options options = {
                                body: request body
                                options: ..,
                                succCallBack: Function
                                errCallBack: Function
                          }
 @return Promise
 */
function ajax (url, type, options) {
  return new Promise(function (resolve, reject) {
    options = options || {}
    if (options.body === undefined) {
      options.body = options.options
      options.options = undefined
    }
    Vue.http[type](url, options.body, options.options).then(res => {
      // 请求成功
      resolve(res)
      if (options.succCallBack !== undefined) {
        options.succCallBack(res)
      }
    }, res => {
      // 出错了
      if (res.status === 401) {
        if (res.data.code === 401.1) {
          // token 过期 请求refreshToken
          api.refreshToken()
        }
      }
      if (res.data !== null && res.data.message !== null) {
        Vue.prototype.$message(res.data.message)
        reject(res)
        if (options.errCallBack !== undefined) {
          options.errCallBack(res)
        }
      } else {
        Vue.prototype.$message('网络错误')
        reject(res)
      }
    })
  })
}
