/**
 * F-03 · Rol de la cuenta.
 * El mismo literal viaja en el JSON (`admin`, `moderador`, `cliente`).
 */
export type Rol = 'admin' | 'moderador' | 'cliente';

/** Alias del backlog (`Role`). */
export type Role = Rol;

/** Lista cerrada: el compilador avisa si falta un rol. */
export const ROLES: readonly Rol[] = ['admin', 'moderador', 'cliente'];
