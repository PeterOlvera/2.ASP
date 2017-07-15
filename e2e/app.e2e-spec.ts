import { AspPage } from './app.po';

describe('asp App', () => {
  let page: AspPage;

  beforeEach(() => {
    page = new AspPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
