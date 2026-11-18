import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { leerErrorApi } from '../../core/leer-error-api';
import { ServicioAuth } from '../../core/servicio-auth';

/** F-07 · Formulario reactivo de ingreso y manejo de error de credenciales. */
@Component({
  selector: 'app-ingreso',
  imports: [ReactiveFormsModule],
  templateUrl: './ingreso.html',
  styleUrl: './ingreso.css',
})
export class Ingreso {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(ServicioAuth);
  private readonly router = inject(Router);

  readonly mensajeError = signal<string | null>(null);
  readonly enviando = signal(false);

  readonly formulario = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  enviar(): void {
    this.mensajeError.set(null);
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }
    this.enviando.set(true);
    this.auth.login(this.formulario.getRawValue()).subscribe({
      next: () => {
        this.enviando.set(false);
        void this.router.navigateByUrl('/');
      },
      error: (error: unknown) => {
        this.enviando.set(false);
        this.mensajeError.set(leerErrorApi(error).message);
      },
    });
  }
}

/** Alias del mockup (`IngresoPage`). */
export { Ingreso as IngresoPage };