import { TestBed } from '@angular/core/testing';

import { FuterService } from './futer.service';

describe('FuterService', () => {
  let service: FuterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
