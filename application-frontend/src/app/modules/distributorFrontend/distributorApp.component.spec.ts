import { TestBed, async } from '@angular/core/testing';
import { DistributorAppModule } from './distributorApp.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DistributorAppModule
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DistributorAppModule);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'distributorService'`, () => {
    const fixture = TestBed.createComponent(DistributorAppModule);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('distributorService');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(DistributorAppModule);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to distributorService!');
  });
});
