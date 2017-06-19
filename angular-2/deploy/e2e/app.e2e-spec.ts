import { DeployPage } from './app.po';

describe('deploy App', () => {
  let page: DeployPage;

  beforeEach(() => {
    page = new DeployPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
