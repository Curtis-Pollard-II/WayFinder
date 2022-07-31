import { ProxyState } from "../AppState.js";
import { tripsService } from "../Services/TripsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";




function _draw(){
    let template = ''
    // this is where I will need to sort by date | (See big cheese)
    let trips = ProxyState.trips ;
    trips.forEach(t => template += t.Template)
    document.getElementById('trip-card').innerHTML = template
    
}


export class TripsController{
    constructor(){
        ProxyState.on('trips',_draw)
        ProxyState.on('reservations', _draw)
        ProxyState.on('trips', saveState)
        ProxyState.on('reservations', saveState)
        loadState()
        _draw()
     }
    
    createTrip(){
        window.event.preventDefault()
        console.log('createing trip');
        let form = window.event.target
        let newTrip = {
            name: form.name.value,
            
        }
        console.log(newTrip);
        tripsService.createTrip(newTrip)
        _draw()
}
}