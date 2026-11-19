import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';

import { ModuloIncompleto } from './modulo-incompleto';

describe('ModuloIncompleto', () => {
  let fixture: ComponentFixture<ModuloIncompleto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuloIncompleto],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                titulo: 'Detalle de artículo',
                ticket: 'F-12',
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ModuloIncompleto);
    await fixture.whenStable();
  });

  it('muestra que el módulo está pendiente y no se traba', () => {
    const texto = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(texto).toContain('Detalle de artículo');
    expect(texto).toContain('F-12');
    expect(texto).toContain('módulo todavía está pendiente');
  });
});
