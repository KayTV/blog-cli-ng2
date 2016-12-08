import { TechBlogNg2CliPage } from './app.po';

describe('tech-blog-ng2-cli App', function() {
  let page: TechBlogNg2CliPage;

  beforeEach(() => {
    page = new TechBlogNg2CliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
