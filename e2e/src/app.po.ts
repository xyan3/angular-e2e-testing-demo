import { browser, by, element } from 'protractor';

export class AngularE2eTestingPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return browser.getTitle();
  }

  getButton() {
    return element(by.buttonText('Click me!'));
  }

  getTextElement() {
    return element(by.tagName('h2'));
  }
}
