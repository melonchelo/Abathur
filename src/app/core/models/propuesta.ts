import type { DetalleArticulo } from './articulo';
import type { ArticuloPropuesto } from './articulo-propuesto';
import type { EstadoPropuesta } from './estado-propuesta';
import type { EventoReputacion } from './evento-reputacion';
import type { ConteoVotos } from './voto';

/** F-03 · Creación (sin artículo) o modificación (con versión de base). */
export type TipoPropuesta = 'creacion' | 'modificacion';

/** Resultado comunitario al cerrar con quórum. No publica solo. */
export type ResultadoComunitario = 'recomendada' | 'desaconsejada' | 'controvertida';

/** Decisión final del administrador. */
export type ResultadoDecision = 'aceptar' | 'rechazar';

/**
 * Cómo se relaciona la decisión con el resultado comunitario.
 * - `acorde`: coincide con recomendada/desaconsejada y hubo quórum.
 * - `apartada`: se aparta, o el resultado fue controvertida.
 * - `excepcional`: se resolvió sin quórum.
 */
export type TipoDecision = 'acorde' | 'apartada' | 'excepcional';

export interface DecisionPropuesta {
  outcome: ResultadoDecision;
  kind: TipoDecision;
  reason: string | null;
  markedBaseAsError: boolean;
  decidedBy: string;
  decidedByAlias: string;
  decidedAt: string;
  publishedArticleId: string | null;
  publishedVersionId: string | null;
}

/**
 * F-03 · Propuesta de creación o modificación.
 * `proposed.content` es Markdown, igual que en el artículo publicado.
 */
export interface Propuesta {
  id: string;
  kind: TipoPropuesta;
  articleId: string | null;
  baseVersionId: string | null;
  authorId: string;
  authorAlias: string;
  proposed: ArticuloPropuesto;
  status: EstadoPropuesta;
  communityResult: ResultadoComunitario | null;
  tally: ConteoVotos;
  votingOpenedAt: string | null;
  votingClosedAt: string | null;
  decision: DecisionPropuesta | null;
  createdAt: string;
}

/** Alias del contrato del backend (`Proposal`). */
export type Proposal = Propuesta;

export interface PedidoCrearPropuesta {
  articleId: string | null;
  baseVersionId: string | null;
  proposed: ArticuloPropuesto;
}

export interface PedidoDecision {
  outcome: ResultadoDecision;
  reason: string | null;
  markBaseAsError: boolean;
}

export interface ResultadoDecisionPropuesta {
  proposal: Propuesta;
  article: DetalleArticulo | null;
  reputationEvents: readonly EventoReputacion[];
}
