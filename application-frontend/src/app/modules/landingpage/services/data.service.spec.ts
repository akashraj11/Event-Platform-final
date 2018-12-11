import { TestBed } from '@angular/core/testing';

import { DataService1 } from './data.service';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataService1 = TestBed.get(DataService1);
    expect(service).toBeTruthy();
  });
});
