import type { Options } from '@wdio/types';
export const config: Options.Testrunner = {
  runner: 'local',
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      project: './tsconfig.json',
      transpileOnly: true,
    },
  },

  port: 4723,

  specs: ['./test/specs/**/*.ts'],

  exclude: [],

  maxInstances: 10,

  capabilities: [
    {
      platformName: 'Android',
      'appium:deviceName': 'nightwatch-android-11',
      'appium:platformVersion': '11.0',
      'appium:automationName': 'UiAutomator2',
      'appium:app': 'app/android/app-release.apk',
    },
  ],

  logLevel: 'warn',

  bail: 0,

  baseUrl: '',

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  services: ['appium'],

  framework: 'mocha',

  reporters: [
    [
      'spec',
      {
        realtimeReporting: true,
        symbols: {
          passed: '[PASS]',
          failed: '[FAIL]',
        },
      },
    ],
  ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
};

