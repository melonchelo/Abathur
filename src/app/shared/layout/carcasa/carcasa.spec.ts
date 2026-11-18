import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Carcasa } from './carcasa';

describe('Carcasa (F-06 · shell)', () => {
  let componente: Carcasa;
  let fixture: ComponentFixture<Carcasa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carcasa],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Carcasa);
    componente = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('se crea', () => {
    expect(componente).toBeTruthy();
  });
});
