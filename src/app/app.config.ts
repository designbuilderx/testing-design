import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
// import { NGX_MONACO_EDITOR_CONFIG } from 'ngx-monaco-editor-v2';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient()
    // provideZoneChangeDetection({eventCoalescing: true}),
    // {
    //   provide: NGX_MONACO_EDITOR_CONFIG,
    //   useValue: {
    //     baseUrl: '/assets/monaco/vs'
    //   }
    // }
  ]
};
