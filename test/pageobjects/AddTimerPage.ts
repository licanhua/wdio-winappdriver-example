/**
 * Licensed under the MIT License.
 */

import { BasePage, By2 } from "./BasePage";

class AddTimerPage extends BasePage {
  isPageLoaded() {
    return this.startButton.isDisplayed();
  }

  private get startButton() {
    return By2.nativeName("Start");
  }
  private get cancelButton() {
    return By2.nativeName("Cancel");
  }

  cancelAndGotoHomePage() {
    return this.cancelButton.click();
  }
}

export default new AddTimerPage();
