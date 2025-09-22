import { TestBed } from '@angular/core/testing';

import { Preivew } from './preivew';

describe('Preivew', () => {
  let service: Preivew;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Preivew);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
