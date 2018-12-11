import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTheatreComponent } from './body.component';

describe('BodyComponent', () => {
  let component: BodyTheatreComponent;
  let fixture: ComponentFixture<BodyTheatreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyTheatreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyTheatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
