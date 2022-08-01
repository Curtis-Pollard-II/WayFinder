import { ProxyState } from "../AppState.js";
import { Note } from "../Models/Note.js";



class NotesService{
    createNote(id, newNote){
        console.log('creating note in the service', newNote);
        let notes = ProxyState.notes.find (n => n.id == id)
        notes.text = newNote
        ProxyState.notes = ProxyState.notes
        console.log(ProxyState.notes);
    }
}

export const notesService = new NotesService()