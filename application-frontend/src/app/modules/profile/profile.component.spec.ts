import { ProfileModule } from './profile.module';

describe('AppModule', () => {
  let appModule: ProfileModule;

  beforeEach(() => {
    appModule = new ProfileModule();
  });

  it('should create an instance', () => {
    expect(appModule).toBeTruthy();
  });
});
