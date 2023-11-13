import { TestBed } from '@angular/core/testing';

import { WebfunService } from './webfun.service';

describe('WebfunService', () => {
  let service: WebfunService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebfunService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
