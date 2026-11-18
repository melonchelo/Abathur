import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

/**
 * F-06 · Componente shell / layout.
 * Marca, navegación con `routerLink` y el `router-outlet` de las pantallas hijas.
 */
@Component({
  imports: [RouterLink, RouterOutlet],
  selector: 'app-carcasa',
  styleUrl: './carcasa.css',
  templateUrl: './carcasa.html',
})
export class Carcasa {}

/** Alias del backlog (`Shell`). */
export { Carcasa as Shell };
