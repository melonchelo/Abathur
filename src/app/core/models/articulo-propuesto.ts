import type { Fuente } from './fuente';

/**
 * F-03 · Cuerpo tipado de un artículo (alta o propuesta).
 * `content` es Markdown (`#`, `##`, párrafos, listas con `-`). Sin HTML.
 */
export interface ArticuloPropuesto {
  title: string;
  summary: string;
  /** Markdown tal cual viaja y se guarda. */
  content: string;
  categoryId: string;
  tags: readonly string[];
  sources: readonly Fuente[];
}

/** Alias del roadmap (`ProposedArticle`). */
export type ProposedArticle = ArticuloPropuesto;
