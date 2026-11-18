import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { API_BASE_URL } from '../../../core/api-url.token';
import { Carcasa } from './carcasa';

describe('Carcasa (F-06 · shell)', () => {
  let componente: Carcasa;
  let fixture: ComponentFixture<Carcasa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carcasa],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        { provide: API_BASE_URL, useValue: 'http://localhost:3000/api' },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Carcasa);
    componente = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('se crea', () => {
    expect(componente).toBeTruthy();
  });
});
