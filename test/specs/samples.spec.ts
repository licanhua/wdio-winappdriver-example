/**
 * Licensed under the MIT License.
 */

import HomePage from "../pageobjects/HomePage";
import AlarmsPage from "../pageobjects/AlarmsPage";
import TimerPage from "../pageobjects/TimerPage";
import AddTimerPage from "../pageobjects/AddTimerPage";
import SettingsPage from "../pageobjects/SettingsPage";

describe("Samples", () => {
  beforeEach(() => {});

  it("Goto AddTimer Page", () => {
    HomePage.gotoTimerPage();
    TimerPage.waitForPageLoaded();

    TimerPage.gotoAddTimerPage();
    AddTimerPage.waitForPageLoaded();

    AddTimerPage.cancelAndGotoHomePage();
  });

  it("Goto AlarmPage", () => {
    HomePage.gotoAlarmsPage();
    AlarmsPage.waitForPageLoaded();
  });

  it("Goto Settings", () => {
    HomePage.gotoSettingsPage();
    SettingsPage.waitForPageLoaded();
  });
});
