import { AppComponent } from "./app.component";

describe('AppComponent', () => {
  let appComponent: AppComponent;

  beforeAll(() => {
    appComponent = new AppComponent();
  });

  it('should verify if the AppComponent was created', () => {
    expect(appComponent).toBeTruthy();
  });
})