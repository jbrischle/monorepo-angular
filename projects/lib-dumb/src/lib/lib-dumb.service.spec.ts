import { TestBed } from '@angular/core/testing';

import { LibDumbService } from './lib-dumb.service';

describe('LibDumbService', () => {
  let service: LibDumbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibDumbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
