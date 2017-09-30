import { TipsCalculatorPage } from './app.po';

describe('tips-calculator App', () => {
  let page: TipsCalculatorPage;

  beforeEach(() => {
    page = new TipsCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
