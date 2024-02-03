import { ReportAggregator } from 'wdio-html-nice-reporter';

let reportAggregator: ReportAggregator;

export const config: WebdriverIO.Config = {
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
      'html-nice',
      {
        outputDir: './reports/html-reports/',
        filename: 'report.html',
        reportTitle: 'Test Report Title',
        linkScreenshots: true,
        //to show the report in a browser when done
        showInBrowser: true,
        collapseTests: false,
        reporterOptions: {
          html: {
            outFile: './reports/html-reports/**.html',
          },
        },
      },
    ],
  ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
  async onPrepare(config, capabilities) {
    console.log('onPrepare: Cleaning and setting up report aggregator...');
    reportAggregator = new ReportAggregator({
      outputDir: './reports/html-reports/',
      filename: 'master-report.html',
      reportTitle: 'Master Report',
      browserName: 'Appium',
      collapseTests: true,
    });
    await reportAggregator.clean();
    console.log('onPrepare: Report aggregator setup complete.');
  },

  async onComplete(exitCode, config, capabilities) {
    console.log('onComplete: Generating report...');
    try {
      await reportAggregator.createReport();
      console.log('onComplete: Report generated successfully.');
    } catch (error) {
      console.error('onComplete: Error while generating report:', error);
    }
  },
};
