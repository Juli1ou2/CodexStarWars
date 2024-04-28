import { TestBed } from '@angular/core/testing';

import { EspecesService } from './especes.service';

describe('EspecesService', () => {
  let service: EspecesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspecesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
