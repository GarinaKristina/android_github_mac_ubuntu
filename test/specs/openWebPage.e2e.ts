import HomePage from "../pageobjects/HomePage.js";
import Actions from "../helpers/Actions.js";

describe("My Login application", () => {
  it("try active app", async () => {
    await driver.activateApp("com.example.myapplication");
    console.log("-------------1-------------", await browser.getPageSource());
  });
  it("try active app 2", async () => {
    await driver.execute("mobile: activateApp", { appId: "com.example.myapplication" });
    console.log("-------------2-----------------", await browser.getPageSource());
  });
  it("should click", async () => {
    console.log("-------------3---------------", await browser.getPageSource());
    await browser.pause(5000);
    await Actions.clickButton(HomePage.webButton);
  });
});
