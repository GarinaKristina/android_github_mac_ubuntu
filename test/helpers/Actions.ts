class Actions {
  async clickButton(selector: string): Promise<any> {
    const element = await $(selector);
    await element.click();
  }
}
export default new Actions();
