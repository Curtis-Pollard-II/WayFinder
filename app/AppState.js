import { Reservation } from "./Models/Reservation.js"
import { Trip } from "./Models/Trip.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  /** @type {import('./Models/Party').Party[]} */
  trips = [
    new Trip({
      name: 'Boston Vacation'
    }),
  ]

  reservations = [
    new Reservation({
      
      type: 'park',
      name: 'Alamo',
      code: 'thde4545jjr',
      address: '544 sinclair way',
      date: "",
      cost: 34,
       })
  ]








}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
