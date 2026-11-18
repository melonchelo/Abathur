import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inicio } from './inicio';

describe('Inicio (F-06 · home)', () => {
  let componente: Inicio;
  let fixture: ComponentFixture<Inicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inicio],
    }).compileComponents();

    fixture = TestBed.createComponent(Inicio);
    componente = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('se crea', () => {
    expect(componente).toBeTruthy();
  });
});
