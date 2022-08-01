import { ProxyState } from "../AppState.js";
import { Note } from "../Models/Note.js";
import { Reservation } from "../Models/Reservation.js";
import { Trip } from "../Models/Trip.js";




export function saveState(){
    console.log('saving');
    let data = {
      reservations : ProxyState.reservations,
      trips: ProxyState.trips,
      notes: ProxyState.notes,
    }
    localStorage.setItem('way-finder', JSON.stringify(data))
  
  }
  
  export function loadState(){
    console.log('loading');
    
    let rawData = localStorage.getItem('way-finder')
    if(rawData){
      let data = JSON.parse(rawData)
      ProxyState.trips = data.trips.map(t => new Trip(t))
      ProxyState.reservations = data.reservations.map(reservation => new Reservation(reservation))
      ProxyState.notes = data.notes.map(n => new Note(n))
    }
    
  
  
  }