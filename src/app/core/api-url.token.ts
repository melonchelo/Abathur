import { InjectionToken } from '@angular/core';

/** Base de la API. Los servicios la inyectan; ninguno escribe la URL a mano. */
export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');
