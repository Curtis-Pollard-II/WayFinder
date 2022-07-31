import {reservationsService} from "../services/ReservationsService.js"
import { ProxyState } from "../AppState.js";



export class ReservationsController{
    constructor(){
        console.log('reservations controller loaded');
    }


    createReservation(tripId){
        window.event.preventDefault()
        console.log('creating an reservation for the trip', tripId);
        let form = window.event.target
        let newReservation = {
            type: form.type.value,
            name: form.name.value,
            code: form.code.value,
            address: form.address.value,
            date: form.date.value,
            cost: parseInt(form.cost.value),
            tripId: tripId
        }
        console.log('new reservation from the controller', newReservation);
        reservationsService.createReservation(newReservation)
    }

    async deleteReservation(id){
        if(await Pop.confirm()){
            console.log('deleting reservation', id);
            reservationsService.deleteReservation(id)
        }
    }
}