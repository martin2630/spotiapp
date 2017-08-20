import { ApotiappPage } from './app.po';

describe('apotiapp App', () => {
  let page: ApotiappPage;

  beforeEach(() => {
    page = new ApotiappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
