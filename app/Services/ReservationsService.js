import { Reservation } from "../Models/Reservation.js";
import { ProxyState } from "../AppState.js";


class ReservationsService{
    createReservation(newReservation){
        console.log('creating reservation in the service', newReservation);
        ProxyState.reservations = [...ProxyState.reservations, new Reservation(newReservation)]
        console.log(ProxyState.reservations);
    }

}

export const reservationsService = new ReservationsService()