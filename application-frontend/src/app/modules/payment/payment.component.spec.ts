import { TestBed, async } from '@angular/core/testing';
import { PaymentAppComponent } from './payment.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PaymentAppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PaymentAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'paymentUI'`, () => {
    const fixture = TestBed.createComponent(PaymentAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('paymentUI');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(PaymentAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to paymentUI!');
  });
});
