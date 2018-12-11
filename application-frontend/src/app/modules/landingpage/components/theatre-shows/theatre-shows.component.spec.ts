import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatreShowsComponent } from './theatre-shows.component';

describe('TheatreShowsComponent', () => {
  let component: TheatreShowsComponent;
  let fixture: ComponentFixture<TheatreShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheatreShowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheatreShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
