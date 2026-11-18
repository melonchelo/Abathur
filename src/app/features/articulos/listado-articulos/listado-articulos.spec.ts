import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoArticulos } from './listado-articulos';

describe('ListadoArticulos (F-10 · esqueleto)', () => {
  let componente: ListadoArticulos;
  let fixture: ComponentFixture<ListadoArticulos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoArticulos],
    }).compileComponents();

    fixture = TestBed.createComponent(ListadoArticulos);
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
    expect(texto).toContain('F-10');
  });
});
