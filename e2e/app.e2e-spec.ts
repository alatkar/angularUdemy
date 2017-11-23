import { AngularUdemyPage } from './app.po';

describe('angular-udemy App', () => {
  let page: AngularUdemyPage;

  beforeEach(() => {
    page = new AngularUdemyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
