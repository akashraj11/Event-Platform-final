import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsvpDetailsComponent } from './rsvp-details.component';

describe('RsvpDetailsComponent', () => {
  let component: RsvpDetailsComponent;
  let fixture: ComponentFixture<RsvpDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsvpDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsvpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
