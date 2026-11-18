import type { Rol } from './rol';

/**
 * F-03 · Cuenta de la plataforma.
 * Un solo `role` por usuario. Desactivar no borra historia.
 */
export interface Usuario {
  id: string;
  username: string;
  /** Seudónimo: identidad visible. */
  alias: string;
  role: Rol;
  active: boolean;
  reputation: number;
  createdAt: string;
}

/** Alias del contrato del backend (`User`). */
export type User = Usuario;

export interface PedidoLogin {
  username: string;
  password: string;
}

export interface RespuestaLogin {
  token: string;
  user: Usuario;
}
