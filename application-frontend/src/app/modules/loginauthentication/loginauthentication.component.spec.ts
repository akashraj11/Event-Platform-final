import { TestBed, async } from '@angular/core/testing';
import { LoginauthenticationComponent } from './loginauthentication.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginauthenticationComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LoginauthenticationComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'loginForm'`, () => {
    const fixture = TestBed.createComponent(LoginauthenticationComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('loginForm');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(LoginauthenticationComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to loginForm!');
  });
});
