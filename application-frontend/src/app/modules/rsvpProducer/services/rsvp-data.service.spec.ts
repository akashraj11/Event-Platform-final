import { TestBed } from '@angular/core/testing';

import { RsvpDataService } from './rsvp-data.service';

describe('RsvpDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RsvpDataService = TestBed.get(RsvpDataService);
    expect(service).toBeTruthy();
  });
});
