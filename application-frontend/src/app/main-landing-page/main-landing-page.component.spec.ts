import { TestBed, async } from '@angular/core/testing';
import { MainLandingComponent } from './main-landing-page.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainLandingComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MainLandingComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'main-landing-page'`, () => {
    const fixture = TestBed.createComponent(MainLandingComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('main-landing-page');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(MainLandingComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to main-landing-page!');
  });
});
