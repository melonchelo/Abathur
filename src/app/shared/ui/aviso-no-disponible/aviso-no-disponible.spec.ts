import { ComponentFixture, TestBed } from '@angular/core/testing';

import { crearErrorApi } from '../../../core/models/error-api';
import {
  AvisoNoDisponible,
  crearErrorNoDisponible,
} from './aviso-no-disponible';

describe('AvisoNoDisponible', () => {
  let fixture: ComponentFixture<AvisoNoDisponible>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvisoNoDisponible],
    }).compileComponents();

    fixture = TestBed.createComponent(AvisoNoDisponible);
  });

  it('muestra que el componente todavía no está disponible', async () => {
    fixture.componentRef.setInput('nombrePantalla', 'Listado de artículos');
    fixture.componentRef.setInput('codigoTicket', 'F-10');
    await fixture.whenStable();

    const texto = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(texto).toContain('Listado de artículos');
    expect(texto).toContain('F-10');
    expect(texto).toContain('Este componente todavía no está disponible');
  });

  it('respeta un ErrorApi recibido por input', async () => {
    const error = crearErrorApi('COMPONENTE_NO_DISPONIBLE', 'Mensaje custom.');
    fixture.componentRef.setInput('nombrePantalla', 'Prueba');
    fixture.componentRef.setInput('error', error);
    await fixture.whenStable();

    const texto = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(texto).toContain('Mensaje custom.');
  });
});

describe('crearErrorNoDisponible (constructor_alias)', () => {
  it('arma el código y el mensaje esperados', () => {
    expect(crearErrorNoDisponible('Listado de propuestas')).toEqual({
      code: 'COMPONENTE_NO_DISPONIBLE',
      message: 'Este componente todavía no está disponible: Listado de propuestas.',
    });
  });
});
