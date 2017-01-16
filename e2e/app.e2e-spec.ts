import { Ng2ChallengePage } from './app.po';

describe('ng2-challenge App', function() {
  let page: Ng2ChallengePage;

  beforeEach(() => {
    page = new Ng2ChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
