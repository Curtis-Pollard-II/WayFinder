import { notesService } from "../Services/NotesService.js";



export class NotesController{
    constructor(){
        console.log('notes controller loaded');
    }

createNote(tripId){
    window.event.preventDefault()
    let form = window.event.target
    let newNote = {
        text: form.value,
        tripId: tripId
    }
    notesService.createNote(tripId, newNote)

}


}