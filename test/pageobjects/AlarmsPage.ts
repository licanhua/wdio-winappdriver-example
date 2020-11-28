/**
 * Licensed under the MIT License.
 */

import { BasePage, By2 } from "./BasePage";

class AlarmsPage extends BasePage {
  isPageLoaded() {
    return this.addAlarmButton.isDisplayed();
  }

  private get addAlarmButton() {
    return By2.nativeAccessibilityId("AddAlarmButton");
  }
}

export default new AlarmsPage();
