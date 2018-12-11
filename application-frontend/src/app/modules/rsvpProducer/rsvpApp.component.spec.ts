import { TestBed, async } from '@angular/core/testing';
import { RsvpAppComponent } from './rsvpApp.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RsvpAppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RsvpAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'rsvp'`, () => {
    const fixture = TestBed.createComponent(RsvpAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('rsvp');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(RsvpAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to rsvp!');
  });
});
