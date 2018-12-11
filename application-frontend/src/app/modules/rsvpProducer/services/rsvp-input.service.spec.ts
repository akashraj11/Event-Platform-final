import { TestBed } from '@angular/core/testing';

import { RsvpInputService } from './rsvp-input.service';

describe('RsvpInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RsvpInputService = TestBed.get(RsvpInputService);
    expect(service).toBeTruthy();
  });
});
