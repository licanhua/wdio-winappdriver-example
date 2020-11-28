/**
 * Licensed under the MIT License.
 */

import { BasePage, By2 } from "./BasePage";

class TimerPage extends BasePage {
  isPageLoaded() {
    return this.addTimeButton.isDisplayed();
  }

  private get timerPlayPauseButton() {
    return By2.nativeAccessibilityId("TimerPlayPauseButton");
  }

  private get addTimeButton() {
    return By2.nativeAccessibilityId("AddTimerButton");
  }

  gotoAddTimerPage() {
    return this.addTimeButton.click();
  }
}

export default new TimerPage();
