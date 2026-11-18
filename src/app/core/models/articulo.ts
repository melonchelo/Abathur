import type { ArticuloPropuesto } from './articulo-propuesto';
import type { Fuente } from './fuente';

/**
 * F-03 · Versión publicada de un artículo.
 * Inmutable: no se reescribe ni se borra.
 */
export interface VersionArticulo {
  id: string;
  articleId: string;
  versionNumber: number;
  title: string;
  summary: string;
  /** Markdown tal como se publicó. */
  content: string;
  categoryId: string;
  tags: readonly string[];
  sources: readonly Fuente[];
  changeSummary: string;
  publishedBy: string;
  publishedByAlias: string;
  publishedAt: string;
  /** Propuesta de origen. `null` si la publicó el administrador directo. */
  proposalId: string | null;
  isCurrent: boolean;
}

/** Alias del contrato del backend (`ArticleVersion`). */
export type ArticleVersion = VersionArticulo;

/** Resumen de artículo para listados. */
export interface ResumenArticulo {
  id: string;
  title: string;
  summary: string;
  categoryId: string;
  currentVersionId: string;
  currentVersionNumber: number;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  /** Calculado: hay una propuesta abierta (ni aceptada ni rechazada). */
  underReview: boolean;
}

/** Alias del contrato del backend (`ArticleSummary`). */
export type ArticleSummary = ResumenArticulo;

/** Detalle con la versión vigente embebida. */
export interface DetalleArticulo extends ResumenArticulo {
  currentVersion: VersionArticulo;
}

/** Alias del contrato del backend (`ArticleDetail`). */
export type ArticleDetail = DetalleArticulo;

/** Pedido de alta de artículo base (admin). */
export interface PedidoCrearArticulo extends ArticuloPropuesto {
  changeSummary?: string;
}
