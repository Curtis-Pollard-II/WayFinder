import { Reservation } from "../Models/Reservation.js";
import { ProxyState } from "../AppState.js";


class ReservationsService{
    createReservation(newReservation){
        console.log('creating reservation in the service', newReservation);
        ProxyState.reservations = [...ProxyState.reservations, new Reservation(newReservation)]
        console.log(ProxyState.reservations);
    }

    deleteReservation(id) {
        console.log('deleteing reservations', id);
        ProxyState.reservations = ProxyState.reservations.filter(reservation => reservation.id != id)
    }

}

export const reservationsService = new ReservationsService()