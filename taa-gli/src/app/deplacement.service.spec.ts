import { TestBed } from '@angular/core/testing';

import { DeplacementService } from './deplacement.service';

describe('DeplacementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeplacementService = TestBed.get(DeplacementService);
    expect(service).toBeTruthy();
  });
});
