import HomePage from '../pageobjects/HomePage.js';
import Actions from '../helpers/Actions.js';
const { addLabel } = require('wdio-light-reporter').default;

describe('My Login application', () => {
  it('should login with valid credentials', async () => {
    addLabel('Log Example 1 as step 1');
    await Actions.clickButton(HomePage.webButton);
  });
});
