import { BayShoreSytemsAppPage } from './app.po';

describe('bay-shore-sytems-app App', () => {
  let page: BayShoreSytemsAppPage;

  beforeEach(() => {
    page = new BayShoreSytemsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
