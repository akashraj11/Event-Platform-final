import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserregistrationComponent } from './user-registration.component';

describe('UserregistrationComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        UserregistrationComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UserregistrationComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'stepper'`, () => {
    const fixture = TestBed.createComponent(UserregistrationComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('stepper');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(UserregistrationComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to stepper!');
  });
});
