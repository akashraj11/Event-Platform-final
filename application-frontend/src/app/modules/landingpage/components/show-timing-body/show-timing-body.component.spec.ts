import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTimingBodyComponent } from './show-timing-body.component';

describe('ShowTimingBodyComponent', () => {
  let component: ShowTimingBodyComponent;
  let fixture: ComponentFixture<ShowTimingBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTimingBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTimingBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
