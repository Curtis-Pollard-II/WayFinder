import {ProxyState} from "../AppState.js"
import {Trip} from "../Models/Trip.js"



class TripsService{
    createTrip(newTrip){
        console.log('creating part in the service', newTrip);
        ProxyState.trips = [...ProxyState.trips, new Trip(newTrip)]
        console.log(ProxyState.trips);
    }



}

export const tripsService = new TripsService()