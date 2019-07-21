import { TestBed } from '@angular/core/testing';

import { DataGenService } from './data-gen.service';

describe('DataGenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataGenService = TestBed.get(DataGenService);
    expect(service).toBeTruthy();
  });
});
