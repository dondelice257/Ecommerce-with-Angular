import { TestBed } from '@angular/core/testing';

import { CartInterceptor } from './cart.interceptor';

describe('CartInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CartInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CartInterceptor = TestBed.inject(CartInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
