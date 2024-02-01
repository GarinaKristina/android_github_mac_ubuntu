import type { Options } from '@wdio/types';
import allure from 'allure-commandline';

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
    [
      'allure',
      {
        outputDir: './artifacts/allure/source',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },

  async onComplete() {
    const reportError = new Error('Could not generate Allure report');
    const generation = allure(['generate', './artifacts/allure/source', '-c', '-o', './artifacts/allure/report']);
    return new Promise<void>((resolve, reject) => {
      const generationTimeout = setTimeout(() => reject(reportError), 5000);

      generation.on('exit', function (exitCode: number) {
        clearTimeout(generationTimeout);

        if (exitCode !== 0) {
          return reject(reportError);
        }

        console.log('Allure report successfully generated');
        resolve();
      });
    });
  },
};

