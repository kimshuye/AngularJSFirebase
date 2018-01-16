import { AngularJSFirebasePage } from './app.po';

describe('angular-jsfirebase App', function() {
  let page: AngularJSFirebasePage;

  beforeEach(() => {
    page = new AngularJSFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
