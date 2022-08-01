import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";
import { Reservation } from "./Reservation.js";




export class Trip {
    constructor(data) {
        this.id = data.id || generateId()
        this.name = data.name
    }

    get Template() {
        return `
        
      <div class="container p-2">
        
        <button type="button" class="btn btn-info p-2" data-toggle="collapse" data-target="#demo">${this.name}</button>
                
        <div id="demo" class="collapse in row p-5">
            <div class="col-12 p-2 bg-info">
              <h1 class="text-center text-white border-bottom">${this.name}<span class="fs-5 ps-5"><i class="p-2 selectable" onclick="app.tripsController.deleteTrip('${this.id}')">Delete Trip</i></span></h1>
              
              <div class="row p-2">
                <div class="fs-5 col-2 ps-3 p-1"><b class="border-bottom border-dark"> Type</b></div>
                <div class="fs-5 col-2 p-1"><b class="border-bottom border-dark"> Name</b></div>
                <div class="fs-5 col-2 p-1"><b class="border-bottom border-dark"> Code</b></div>
                <div class="fs-5 col-2 p-1"><b class="border-bottom border-dark"> Address</b></div>
                <div class="fs-5 col-2 p-1"><b class="border-bottom border-dark"> Date</b></div>
                <div class="fs-5 col-2 p-1"><b class="border-bottom border-dark"> Cost</b></div>
              </div>
              <div id="reservation-info" class="row text-dark p-2">

                ${this.Reservations}

              </div>

              <form id="reservation-form" onsubmit="app.reservationsController.createReservation('${this.id}')">
                <div class="row">
                  <div class="pb-3 pt-3" >
                    <input required name="type" id="type" class="col-2" type="text"><input required name="name" id="name"class="col-2" type="text"><input required name="code" id="code" class="col-2" type="text"><input required name="address" id="address" class="col-2" type="text"><input required name="date" id="date" class="col-2" type="date"><input required name="cost" id="cost" class="col-2 " type="number">
                  </div>
                  <div class="row">
                    <button class="btn btn-primary rounded offset-4 col-4 fs-2" >Submit New Reservation</button>
                  </div>
                </div>
              </form>

                <form class="p-3">
                  <textarea class="col-5 p-3" name="text" id="text" cols="30" rows="10"></textarea>
                  <i class="selectable px-2" name="text" id="text" onclick="app.notesController.createNote('${this.id}')">Save Note</i>
                </form>
              

              <div class="row pe-4 text-end">
                <h3>TOTAL: $ ${this.TripTotal}</h3>
              </div>
            </div>
          </div>
        </div>
    
        `
    }


get Reservations(){
    let template = ''
    let reservations = ProxyState.reservations.filter(res => res.tripId == this.id).sort((a, b) => a.date - b.date)
    reservations.forEach(res => template += res.Template)
    
    
    if(template){
        return template 
    }else{
        return '<p> No Info Entered yet </p>'
    }
}

get TripTotal(){
  let total = 0
  let reservations = ProxyState.reservations.filter(reservation => reservation.tripId == this.id)
  reservations.forEach(reservation => total += reservation.cost)
  return total
}


}