/**
 * Licensed under the MIT License.
 */

export class BasePage {
  isPageLoaded(): boolean {
    return false;
  }

  waitForPageLoaded(timeout?: number) {
    browser.waitUntil(
      () => {
        return this.isPageLoaded();
      },
      {
        timeout: this.timeoutForPageLoaded(timeout),
        timeoutMsg: "Wait for page " + this.constructor.name + " timeout",
      }
    );
  }

  protected timeoutForPageLoaded(currentTimeout?: number) {
    if (currentTimeout) return currentTimeout;
    return this.waitforPageTimeout;
  }

  // Default timeout(15 seconds) for waitForPageLoaded command in PageObject
  private waitforPageTimeout: number = 15000;
}

export class By2 {
  static nativeAccessibilityId(testId: string): WebdriverIO.Element {
    return $("~" + testId);
  }

  static nativeName(name: string): WebdriverIO.Element {
    return $("[name='" + name + "']");
  }
}
