# wdio-winappdriver-example
An example to demostrate WinAppDriver and WebDriverIO integration without appium.
An example to demostrate wdio service: wdio-winappdriver-service and wdio-ywinappdriver-service which are used to start/stop WinAppDriver automatically during the testing.

There are two popular JavaScript WebDrivers which could be used for WinAppDriver testing: [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) and [WebDriverIO](https://webdriver.io/).

This is used to demo UI automation testing with WebDriverIO.

[WinAppDriver](https://github.com/Microsoft/WinAppDriver) is recommended to do E2E test for Windows apps.
Here I validate the calculator using WebDriverIO + WinAppDriver.


## Run the test

I assume you have npm and nodejs enviroment ready.

1. `npm install` to install the node_modules
2. run the testing

There are two Windows Application Drivers you can choose: [WinAppDriver](https://github.com/Microsoft/WinAppDriver) and [YWinAppDriver](https://github.com/licanhua/YWinAppDriver).
WinAppDriver is an official AppDriver supported by Microsoft, and YWinAppDriver is a open-source WinAppDriver implementation developed by Canhua Li

- WinAppDriver

Please download and install WinAppDriver 1.2 and above from https://github.com/microsoft/WinAppDriver/releases 
```
npm run test
```

- YWinAppdriver

```
npm run ytest
```

YWinAppDriver itself is packaged to wdio-ywinappdriver-service, so you doesn't need to install ywinappdriver manually. But it depends on .net core 3.1. If you see launch errors, you may need to install [.net core runtime 3.1 or above](https://dotnet.microsoft.com/download/dotnet-core) manually.

## Things I want to highlights
1. appium is removed from the dependency. wdio-winappdriver-service and wdio-ywinappdriver-service is used to start & stop the WinAppDriver automatically
2. GetPageSource and Screenshot on failure
3. set implicit timeout makes you application have less logs. WinAppDriver and YWinAppDriver use this timer to search the UI element
```
browser.setTimeout({ implicit: 5000 });
```
4. `"ms:experimental-webdriver": true` is mandatory capability for WinAppDriver

5. PageObject
6. Typescript
7. There is not need to compile .ts to .js before test run because of
```
require('ts-node').register({ transpileOnly: true });
```

## Note
To know more about how to integrate JavaScript test runner and WinAppDriver for UI automation, please refer to:
- [WinAppDriver + WebDriverIO example](https://github.com/licanhua/wdio-winappdriver-example). Example to demostrate WinAppDriver and WebDriver integration without appium dependency
- [E2E test](https://github.com/microsoft/react-native-windows/blob/master/vnext/docs/E2ETest.md) on React Native for Windows. [MoreAboutE2ETest.md](https://github.com/microsoft/react-native-windows/blob/master/vnext/docs/MoreAboutE2ETest.md) provides some background why React Native Windows choose WinAppDriver and node test runner for E2E testing.

- [winappdriver-js-webdriver-example](https://github.com/react-native-windows/winappdriver-js-webdriver-example), Which includes:
1. Jest + selenium-webdriver + WinAppDriver
2. Jasmine + WebDriverIO + WinAppDriver. This part is obselete, please refer to  [WinAppDriver + WebDriverIO example](https://github.com/licanhua/wdio-winappdriver-example) for newer change.

- [selenium-webdriver-winappdriver-example](https://github.com/react-native-windows/selenium-webdriver-winappdriver-example). 
An example of jest, selenium-webdriver and winappdriver integration

- [selenium-appium](https://github.com/react-native-windows/selenium-appium). selenium-appium is selenium-webdriver extension to make selenium-webdriver to drive Appium to run automation for native, hybrid and mobile web and desktop apps.

- [Choose the right E2E automation framework for React Native Windows](https://medium.com/@licanhua/choose-the-right-e2e-automation-framework-for-react-native-windows-83ade8b16b52)
- [How to: Use Jest + selenium-webdriver + WinAppDriver to do Windows UI testing](https://medium.com/@licanhua/how-to-use-jest-selenium-webdriver-winappdriver-to-do-windows-ui-testing-c9d074e698ed)
- [Automated Windows UI testing by Jest + selenium-appium + selenium-webdriver + WinAppDriver](https://medium.com/@licanhua/automated-windows-ui-testing-by-jest-selenium-appium-selenium-webdriver-winappdriver-6cb708121d71)
- [Inspecting UI Elements for WinAppDriver automation using Appium Desktop](https://medium.com/@licanhua/inspecting-ui-elements-for-winappdriver-automation-using-appium-desktop-8f178b2d0d6c)


