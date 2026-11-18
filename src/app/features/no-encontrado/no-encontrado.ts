import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/** F-06 · Ruta comodín: página no encontrada. */
@Component({
  imports: [RouterLink],
  selector: 'app-no-encontrado',
  styleUrl: './no-encontrado.css',
  templateUrl: './no-encontrado.html',
})
export class NoEncontrado {}

/** Alias del backlog (`NotFound`). */
export { NoEncontrado as NotFound };
