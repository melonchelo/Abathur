import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { ServicioAuth } from '../../../core/servicio-auth';
import { DirectivaHasRole } from '../../directives/directiva-has-role';

/**
 * F-06 · Componente shell / layout.
 * F-08 · navegación condicional con `appHasRole`.
 */
@Component({
  imports: [RouterLink, RouterLinkActive, RouterOutlet, DirectivaHasRole],
  selector: 'app-carcasa',
  styleUrl: './carcasa.css',
  templateUrl: './carcasa.html',
})
export class Carcasa {
  readonly auth = inject(ServicioAuth);

  salir(): void {
    this.auth.logout();
  }
}

/** Alias del backlog (`Shell`). */
export { Carcasa as Shell };
