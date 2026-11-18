import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Placeholder F-08 · Ruta solo `admin` para probar `roleGuard`.
 * El listado de usuarios real llega en F-32.
 */
@Component({
  selector: 'app-aviso-solo-admin',
  imports: [RouterLink],
  templateUrl: './aviso-solo-admin.html',
  styleUrl: './aviso-solo-admin.css',
})
export class AvisoSoloAdmin {}