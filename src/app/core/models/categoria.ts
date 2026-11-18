/**
 * F-03 · Categoría del árbol de conocimiento.
 * `parentId` es `null` en las categorías raíz.
 */
export interface Categoria {
  id: string;
  name: string;
  description: string | null;
  parentId: string | null;
  createdAt: string;
}

/** Alias del contrato del backend (`Category`). */
export type Category = Categoria;

/** Pedido de alta de categoría. */
export interface PedidoCrearCategoria {
  name: string;
  description: string | null;
  parentId: string | null;
}

/** Pedido de actualización parcial. */
export interface PedidoActualizarCategoria {
  name?: string;
  description?: string | null;
  parentId?: string | null;
}
