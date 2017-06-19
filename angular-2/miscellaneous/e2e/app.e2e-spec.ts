import { MiscellaneousPage } from './app.po';

describe('miscellaneous App', () => {
  let page: MiscellaneousPage;

  beforeEach(() => {
    page = new MiscellaneousPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
