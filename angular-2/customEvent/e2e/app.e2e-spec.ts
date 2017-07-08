import { CustomEventPage } from './app.po';

describe('custom-event App', () => {
  let page: CustomEventPage;

  beforeEach(() => {
    page = new CustomEventPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
