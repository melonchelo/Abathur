import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ACCESS_TOKEN_STORAGE_KEY, authInterceptor } from './auth.interceptor';

describe('authInterceptor', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([authInterceptor])),
        provideHttpClientTesting(),
      ],
    });
    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
  });

  it('agrega el JWT a cada pedido cuando hay sesión', () => {
    localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, 'jwt-de-prueba');

    http.get('/api/articles').subscribe();
    http.get('/api/me').subscribe();

    for (const url of ['/api/articles', '/api/me']) {
      const req = httpMock.expectOne(url);
      expect(req.request.headers.get('Authorization')).toBe('Bearer jwt-de-prueba');
      req.flush({});
    }
  });

  it('no manda Authorization si no hay token', () => {
    http.get('/api/articles').subscribe();

    const req = httpMock.expectOne('/api/articles');
    expect(req.request.headers.has('Authorization')).toBe(false);
    req.flush({});
  });
});
