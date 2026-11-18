import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

import { API_BASE_URL } from './api-url.token';
import { ACCESS_TOKEN_STORAGE_KEY } from './auth.interceptor';
import type { PedidoLogin, RespuestaLogin, Rol, Usuario } from './models';

const USER_STORAGE_KEY = 'abathur.user';

/**
 * F-07 · Sesión JWT: login, usuario en memoria y comprobación de rol.
 */
@Injectable({ providedIn: 'root' })
export class ServicioAuth {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(API_BASE_URL);
  private readonly router = inject(Router);

  private readonly usuarioSignal = signal<Usuario | null>(leerUsuarioGuardado());

  readonly usuario = this.usuarioSignal.asReadonly();
  /** Alias del backlog (`user`). */
  readonly user = this.usuario;
  readonly autenticado = computed(() => this.usuarioSignal() !== null);
  readonly isAuthenticated = this.autenticado;
  readonly rol = computed(() => this.usuarioSignal()?.role ?? null);
  readonly role = this.rol;

  ingresar(credenciales: PedidoLogin): Observable<RespuestaLogin> {
    return this.http
      .post<RespuestaLogin>(`${this.baseUrl}/auth/login`, credenciales)
      .pipe(
        tap((respuesta) => {
          localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, respuesta.token);
          localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(respuesta.user));
          this.usuarioSignal.set(respuesta.user);
        }),
      );
  }

  /** Alias del backlog (`login`). */
  login(credenciales: PedidoLogin): Observable<RespuestaLogin> {
    return this.ingresar(credenciales);
  }

  yo(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}/me`).pipe(
      tap((usuario) => {
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(usuario));
        this.usuarioSignal.set(usuario);
      }),
    );
  }

  /** Alias del backlog (`me`). */
  me(): Observable<Usuario> {
    return this.yo();
  }

  salir(): void {
    localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
    localStorage.removeItem(USER_STORAGE_KEY);
    this.usuarioSignal.set(null);
    void this.router.navigateByUrl('/ingreso');
  }

  /** Alias del backlog (`logout`). */
  logout(): void {
    this.salir();
  }

  tieneRol(...roles: readonly Rol[]): boolean {
    const actual = this.usuarioSignal()?.role;
    return actual !== undefined && actual !== null && roles.includes(actual);
  }

  /** Alias del backlog (`hasRole`). */
  hasRole(...roles: readonly Rol[]): boolean {
    return this.tieneRol(...roles);
  }

  restaurarSesion(): void {
    const token = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
    if (token === null || token === '') {
      this.usuarioSignal.set(null);
      return;
    }
    const guardado = leerUsuarioGuardado();
    if (guardado !== null) {
      this.usuarioSignal.set(guardado);
    }
  }

  /** Alias del backlog (`restoreSession`). */
  restoreSession(): void {
    this.restaurarSesion();
  }
}

/** Alias del backlog (`AuthService`). */
export { ServicioAuth as AuthService };

function leerUsuarioGuardado(): Usuario | null {
  const raw = localStorage.getItem(USER_STORAGE_KEY);
  if (raw === null || raw === '') {
    return null;
  }
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!esUsuario(parsed)) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function esRegistro(valor: unknown): valor is Record<string, unknown> {
  return typeof valor === 'object' && valor !== null;
}

function esUsuario(valor: unknown): valor is Usuario {
  if (!esRegistro(valor)) {
    return false;
  }
  return (
    typeof valor['id'] === 'string' &&
    typeof valor['username'] === 'string' &&
    typeof valor['alias'] === 'string' &&
    typeof valor['role'] === 'string' &&
    typeof valor['active'] === 'boolean' &&
    typeof valor['reputation'] === 'number' &&
    typeof valor['createdAt'] === 'string'
  );
}