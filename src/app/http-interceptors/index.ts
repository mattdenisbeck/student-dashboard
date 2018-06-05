/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CachingInterceptor } from './caching-interceptor';
import { NoopInterceptor } from './noop-interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },

  { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },
];
