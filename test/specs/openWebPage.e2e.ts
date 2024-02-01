import HomePage from '../pageobjects/HomePage.js';
import Actions from '../helpers/Actions.js';

describe('My Login application', () => {
  it('should login with valid credentials', async () => {
    await Actions.clickButton(HomePage.webButton);
  });
});
