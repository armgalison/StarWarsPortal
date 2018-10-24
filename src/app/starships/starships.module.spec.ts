import { StarshipsModule } from './starships.module';

describe('StarshipsModule', () => {
  let starshipsModule: StarshipsModule;

  beforeEach(() => {
    starshipsModule = new StarshipsModule();
  });

  it('should create an instance', () => {
    expect(starshipsModule).toBeTruthy();
  });
});
