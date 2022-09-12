import { TestBed } from '@angular/core/testing';

import { LibSmartService } from './lib-smart.service';

describe('LibSmartService', () => {
  let service: LibSmartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibSmartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
