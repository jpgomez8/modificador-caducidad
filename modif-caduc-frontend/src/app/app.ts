import { Component } from "@angular/core";
import { ModificadorCaducidadComponent } from "./components/modificador-caducidad/modificador-caducidad.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [ModificadorCaducidadComponent],
  templateUrl: "./app.html",
})
export class AppComponent {}
