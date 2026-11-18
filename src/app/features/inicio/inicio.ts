import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/** F-06 · Pantalla inicial dentro de la carcasa. */
@Component({
  imports: [RouterLink],
  selector: 'app-inicio',
  styleUrl: './inicio.css',
  templateUrl: './inicio.html',
})
export class Inicio {}

/** Alias del backlog (`Home`). */
export { Inicio as Home };
