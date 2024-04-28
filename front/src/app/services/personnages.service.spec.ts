import { TestBed } from '@angular/core/testing';

import { PersonnagesService } from './personnages.service';

describe('PersonnagesService', () => {
  let service: PersonnagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonnagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
