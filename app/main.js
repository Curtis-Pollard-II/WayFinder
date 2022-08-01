import { TripsController } from "./Controllers/TripsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { ReservationsController } from "./Controllers/ReservationsController.js"
import { NotesController } from "./Controllers/NotesController.js";

class App {
  // valuesController = new ValuesController();

tripsController = new TripsController();
reservationsController = new ReservationsController();
notesController = new NotesController();


}

window["app"] = new App();
