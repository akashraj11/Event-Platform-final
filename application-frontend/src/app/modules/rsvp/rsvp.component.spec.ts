import { TestBed, async } from '@angular/core/testing';
import { RsvpComponent } from './rsvp.component';

describe('RsvpComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RsvpComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RsvpComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'rsvp-frontend'`, () => {
    const fixture = TestBed.createComponent(RsvpComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('rsvp-frontend');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(RsvpComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to rsvp-frontend!');
  });
});
