import { SeatLayoutAppRoutingModule } from './seatLayout-routing.module';

describe('AppRoutingModule', () => {
  let appRoutingModule: SeatLayoutAppRoutingModule;

  beforeEach(() => {
    appRoutingModule = new SeatLayoutAppRoutingModule();
  });

  it('should create an instance', () => {
    expect(appRoutingModule).toBeTruthy();
  });
});
