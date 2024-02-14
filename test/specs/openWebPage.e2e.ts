import HomePage from "../pageobjects/HomePage.js";
import Actions from "../helpers/Actions.js";

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    console.log("-------------", await browser.getPageSource());
    await browser.pause(5000);
    await Actions.clickButton(HomePage.webButton);
  });
});
