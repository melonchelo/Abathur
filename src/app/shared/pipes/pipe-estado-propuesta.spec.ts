import { PipeEstadoPropuesta } from './pipe-estado-propuesta';

describe('PipeEstadoPropuesta (F-09)', () => {
  const pipe = new PipeEstadoPropuesta();

  it('traduce cada estado del contrato', () => {
    expect(pipe.transform('en_votacion')).toBe('En votación');
    expect(pipe.transform('controvertida')).toBe('Controvertida');
    expect(pipe.transform('rechazada')).toBe('Rechazada');
  });
});