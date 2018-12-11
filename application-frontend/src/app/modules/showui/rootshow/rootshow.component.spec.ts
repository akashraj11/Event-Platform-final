import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootShowComponent } from './rootshow.component';

describe('DeleteComponent', () => {
  let component: RootShowComponent;
  let fixture: ComponentFixture<RootShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
