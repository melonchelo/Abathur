import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPropuestas } from './listado-propuestas';

describe('ListadoPropuestas (F-16 · esqueleto)', () => {
  let componente: ListadoPropuestas;
  let fixture: ComponentFixture<ListadoPropuestas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoPropuestas],
    }).compileComponents();

    fixture = TestBed.createComponent(ListadoPropuestas);
    componente = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('se crea', () => {
    expect(componente).toBeTruthy();
  });

  it('informa que todavía no está disponible', () => {
    const texto = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(componente.estado.status).toBe('error');
    expect(texto).toContain('Este componente todavía no está disponible');
    expect(texto).toContain('F-16');
  });
});
