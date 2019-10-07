import { AngularE2eTestingPage } from './app.po';
import { browser, protractor } from 'protractor';

// For debug only: slow down e2e test and check the process
const origFn = browser.driver.controlFlow().execute;
browser.driver.controlFlow().execute = function () {
  const args = arguments;
  origFn.call(browser.driver.controlFlow(), function () {
    return protractor.promise.delayed(50);
  });
  return origFn.apply(browser.driver.controlFlow(), args);
};

describe('E2E test project App', () => {
  let page: AngularE2eTestingPage;
  beforeEach(() => {
    page = new AngularE2eTestingPage();
  });

  it('should open e2e test page and display button', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual(`E2eTestProject`);
    expect(page.getButton().isDisplayed()).toBeTruthy();
  });

  it('click button should get text display', () => {
    page.navigateTo();
    page.getButton().click().then(() => {
      page.getTextElement().getText().then((value) => {
        expect(value).toBe('You are my hero!');
      });
    });
  });
});
