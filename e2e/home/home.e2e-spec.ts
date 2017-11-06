import { AngularE2eTestingPage } from './home.po';
import { browser } from 'protractor';

describe('angular-e2e-testing App', () => {
  let page: AngularE2eTestingPage;
  beforeEach(() => {
    page = new AngularE2eTestingPage();
  });

  it('should open angular e2e test page and display button', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual(`AngularE2eTesting`);
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
