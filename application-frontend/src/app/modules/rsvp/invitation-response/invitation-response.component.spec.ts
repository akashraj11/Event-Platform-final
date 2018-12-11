import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationResponseComponent } from './invitation-response.component';

describe('InvitationResponseComponent', () => {
  let component: InvitationResponseComponent;
  let fixture: ComponentFixture<InvitationResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitationResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
