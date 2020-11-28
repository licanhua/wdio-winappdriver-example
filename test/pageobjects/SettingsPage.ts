/**
 * Licensed under the MIT License.
 */

import { BasePage, By2 } from "./BasePage";

class SettingsPage extends BasePage {
  isPageLoaded() {
    return this.darkThemeRadioButton.isDisplayed();
  }

  private get darkThemeRadioButton() {
    return By2.nativeAccessibilityId("DarkThemeRadioButton");
  }
}

export default new SettingsPage();
