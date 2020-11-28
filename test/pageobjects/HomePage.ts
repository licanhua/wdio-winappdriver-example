/**
 * Licensed under the MIT License.
 */

import { BasePage, By2 } from "./BasePage";

class HomePage extends BasePage {
  isPageLoaded() {
    return this.settingsButton.isDisplayed();
  }

  private get settingsButton() {
    return By2.nativeAccessibilityId("SettingsNavPaneItem");
  }

  private get alarmsButton() {
    return By2.nativeAccessibilityId("AlarmButton");
  }

  private get timerButton() {
    return By2.nativeAccessibilityId("TimerButton");
  }

  gotoSettingsPage() {
    return this.settingsButton.click();
  }

  gotoAlarmsPage() {
    return this.alarmsButton.click();
  }

  gotoTimerPage() {
    return this.timerButton.click();
  }
}
export default new HomePage();
