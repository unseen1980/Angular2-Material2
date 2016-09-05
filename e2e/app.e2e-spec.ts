import { Angular2HeadlinesPage } from './app.po';

describe('angular2-headlines App', function() {
  let page: Angular2HeadlinesPage;

  beforeEach(() => {
    page = new Angular2HeadlinesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
