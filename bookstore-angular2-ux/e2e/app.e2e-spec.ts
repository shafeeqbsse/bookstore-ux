import { BookstoreAngular2UxPage } from './app.po';

describe('bookstore-angular2-ux App', () => {
  let page: BookstoreAngular2UxPage;

  beforeEach(() => {
    page = new BookstoreAngular2UxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
