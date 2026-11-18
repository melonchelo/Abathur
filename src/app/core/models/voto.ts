/** F-03 · Elección del moderador. Sin abstención en esta entrega. */
export type EleccionVoto = 'a_favor' | 'en_contra';

/** Alias del contrato del backend (`VoteChoice`). */
export type VoteChoice = EleccionVoto;

export const ELECCIONES_VOTO: readonly EleccionVoto[] = ['a_favor', 'en_contra'];

/**
 * F-03 · Voto inmutable.
 * `weightAtVote` es el peso congelado por el servidor (JSON camelCase).
 */
export interface Voto {
  id: string;
  proposalId: string;
  moderatorId: string;
  moderatorAlias: string;
  choice: EleccionVoto;
  /** Peso calculado al guardar. No cambia después. */
  weightAtVote: number;
  createdAt: string;
}

/** Alias del contrato del backend (`Vote`). */
export type Vote = Voto;

/** El cliente solo elige; el peso lo pone el servidor. */
export interface PedidoEmitirVoto {
  choice: EleccionVoto;
}

/** Totales de la votación (quórum = 3 votos). */
export interface ConteoVotos {
  votes: number;
  favor: number;
  contra: number;
  quorum: boolean;
}

/** Alias del contrato del backend (`VoteTally`). */
export type VoteTally = ConteoVotos;
