import EvemtEmiter from './EventEmiter'
export default class TWebRtc extends EvemtEmiter {
  constructor (roomId) {
    super()
    this.rommId = roomId
  }
}
