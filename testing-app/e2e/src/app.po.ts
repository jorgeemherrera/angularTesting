import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getText(str: string) {
    return element(by.css(str)).getText() as Promise<string>;
  }
}
