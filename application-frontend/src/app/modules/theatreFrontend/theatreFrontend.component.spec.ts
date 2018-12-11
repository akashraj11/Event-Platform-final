import { TestBed, async } from '@angular/core/testing';
import { TheatreFrontendComponent } from './theatreFrontend.component';

describe('TheatreFrontendComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TheatreFrontendComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TheatreFrontendComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'TheatreFrontend'`, () => {
    const fixture = TestBed.createComponent(TheatreFrontendComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('TheatreFrontend');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(TheatreFrontendComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to TheatreFrontend!');
  });
});
