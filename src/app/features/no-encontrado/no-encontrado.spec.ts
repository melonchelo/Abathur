import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { NoEncontrado } from './no-encontrado';

describe('NoEncontrado (F-06 · not-found)', () => {
  let componente: NoEncontrado;
  let fixture: ComponentFixture<NoEncontrado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoEncontrado],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(NoEncontrado);
    componente = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('se crea', () => {
    expect(componente).toBeTruthy();
  });
});
