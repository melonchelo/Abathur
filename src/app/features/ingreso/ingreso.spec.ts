import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { API_BASE_URL } from '../../core/api-url.token';
import { Ingreso } from './ingreso';

describe('Ingreso (F-07)', () => {
  let fixture: ComponentFixture<Ingreso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ingreso],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        { provide: API_BASE_URL, useValue: 'http://localhost:3000/api' },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Ingreso);
    await fixture.whenStable();
  });

  it('se crea', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});