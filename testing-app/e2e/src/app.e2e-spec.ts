import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getText('app-root h1')).toEqual('Welcome to testing-app!');
  });

  it('should display welcome message h2', () => {
    page.navigateTo();
    expect(page.getText('app-root h2')).toEqual('Here are some links to help you start:');
  });

  it('should display welcome class list', () => {
    page.navigateTo();
    expect(page.getText('app-root .list')).toEqual('Tour of Heroes');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
