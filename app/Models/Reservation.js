import { generateId } from "../Utils/generateId.js"



export class Reservation {
    constructor(data){
        this.id = generateId()
        this.type = data.type,
        this.name = data.name,
        this.code = data.code,
        this.address = data.address,
        this.date = data.date,
        this.cost = data.cost
        this.tripId = data.tripId
    }

    get Template(){
        return`
        <div class="fs-5 col-2 p-1">${this.type}</div>
        <div class="fs-5 col-2 p-1">${this.name}</div>
        <div class="fs-5 col-2 p-1">${this.code}</div>
        <div class="fs-5 col-2 p-1">${this.address}</div>
        <div class="fs-5 col-2 p-1">${this.date}</div>
        <div class="fs-5 col-2 p-1">${this.cost}</div>
        `
    }
}
