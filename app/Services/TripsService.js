import {ProxyState} from "../AppState.js"
import {Trip} from "../Models/Trip.js"



class TripsService{
    createTrip(newTrip){
        console.log('creating part in the service', newTrip);
        ProxyState.trips = [...ProxyState.trips, new Trip(newTrip)]
        console.log(ProxyState.trips);
    }

    deleteTrip(id){
        console.log('deleting trip form the service', id);
        ProxyState.trips = ProxyState.trips.filter(t => t.id != id)
    }

editNote(id, newText){
    let trip = ProxyState.trips.find(t => t.id == id)
    trip.notes = newText
    ProxyState.trips = ProxyState.trips
}

}

export const tripsService = new TripsService()