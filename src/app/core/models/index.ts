/**
 * Módulo · modelos del contrato compartido con la API.
 * Nombres en español para la defensa; los alias en inglés siguen el backlog.
 */

export type { ErrorApi, ApiError } from './error-api';
export { crearErrorApi } from './error-api';

export type { Rol, Role } from './rol';
export { ROLES } from './rol';

export type { EstadoPropuesta, ProposalStatus } from './estado-propuesta';
export { ESTADOS_PROPUESTA } from './estado-propuesta';

export type { EstadoCarga, LoadState } from './estado-carga';

export type { Fuente, Source } from './fuente';

export type { ArticuloPropuesto, ProposedArticle } from './articulo-propuesto';

export type {
  VersionArticulo,
  ArticleVersion,
  ResumenArticulo,
  ArticleSummary,
  DetalleArticulo,
  ArticleDetail,
  PedidoCrearArticulo,
} from './articulo';

export type {
  Categoria,
  Category,
  PedidoCrearCategoria,
  PedidoActualizarCategoria,
} from './categoria';

export type {
  TipoPropuesta,
  ResultadoComunitario,
  ResultadoDecision,
  TipoDecision,
  DecisionPropuesta,
  Propuesta,
  Proposal,
  PedidoCrearPropuesta,
  PedidoDecision,
  ResultadoDecisionPropuesta,
} from './propuesta';

export type {
  EleccionVoto,
  VoteChoice,
  Voto,
  Vote,
  PedidoEmitirVoto,
  ConteoVotos,
  VoteTally,
} from './voto';
export { ELECCIONES_VOTO } from './voto';

export type {
  TipoEventoReputacion,
  ReputationEventType,
  EventoReputacion,
  ReputationEvent,
  ResumenReputacion,
  ReputationSummary,
} from './evento-reputacion';

export type {
  Usuario,
  User,
  PedidoLogin,
  LoginRequest,
  RespuestaLogin,
  LoginResponse,
} from './usuario';
