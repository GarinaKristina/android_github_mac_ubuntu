export const config = {
  runner: 'local',
  port: 4723,
  specs: ['./test/specs/**/*.js'],

  maxInstances: 10,

  capabilities: [
    {
      platformName: 'Android',
      browserName: 'Chrome',
      'appium:deviceName': 'Pixel 2 API 30',
      'appium:platformVersion': '11.0',
      'appium:automationName': 'UiAutomator2',
      'appium:app': 'app/android/app-release.apk',
    },
  ],

  logLevel: 'info',

  baseUrl: '',

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  services: ['appium'],

  framework: 'mocha',

  reporters: ['spec'],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
};

