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
  /** @type {import('./Models/Reservation').Reservation[]} */
  reservations = [
    new Reservation({
      type: 'parking',
      name: 'alamo',
      code: '689689wewewe',
      address: '3434 Branburry st',
      date: '02-09-2022',
      cost: 34,
    }),
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
