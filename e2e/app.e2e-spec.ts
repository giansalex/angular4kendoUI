import { Ang4KendoUiPage } from './app.po';

describe('ang4-kendo-ui App', () => {
  let page: Ang4KendoUiPage;

  beforeEach(() => {
    page = new Ang4KendoUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
