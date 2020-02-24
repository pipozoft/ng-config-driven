import { getThemeButton } from '../support/app.po';

describe('front', () => {
  beforeEach(() => cy.visit('/'));

  it('should display theme button', () => {

    // Function helper example, see `../support/app.po.ts` file
    getThemeButton().click();
  });
});
