import { ReportAggregator } from "wdio-html-nice-reporter";
import allure from "allure-commandline";
let reportAggregator: ReportAggregator;

export const config: WebdriverIO.Config = {
  runner: "local",
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      project: "./tsconfig.json",
      transpileOnly: true,
    },
  },

  port: 4723,

  specs: ["./test/specs/**/*.ts"],

  exclude: [],

  maxInstances: 10,

  capabilities: [
    {
      platformName: "Android",
      "appium:deviceName": "Nexus 6 Tiramisu",
      "appium:platformVersion": "13.0",
      "appium:automationName": "UiAutomator2",
      "appium:app": "app/android/app-release.apk",
    },
  ],

  logLevel: "warn",

  bail: 0,

  baseUrl: "",

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  services: ["appium"],

  framework: "mocha",

  reporters: [
    [
      "spec",
      {
        realtimeReporting: true,
        symbols: {
          passed: "[PASS]",
          failed: "[FAIL]",
        },
      },
    ],
    // [
    //   "allure",
    //   {
    //     outputDir: "./artifacts/source",
    //     disableWebdriverStepsReporting: true,
    //     disableWebdriverScreenshotsReporting: false,
    //   },
    // ],
    [
      "html-nice",
      {
        outputDir: "./reports/",
        filename: "index.html",
        reportTitle: "Test Report Title",
        linkScreenshots: false,
        //to show the report in a browser when done
        showInBrowser: true,
        collapseTests: false,
        reporterOptions: {
          html: {
            outFile: "./reports/html-reports/index.html",
          },
        },
      },
    ],
  ],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
  async onPrepare(config, capabilities) {
    console.log("onPrepare: Cleaning and setting up report aggregator...");
    reportAggregator = new ReportAggregator({
      outputDir: "./reports/",
      filename: "index.html",
      reportTitle: "Report",
      browserName: "Appium",
      collapseTests: true,
    });
    await reportAggregator.clean();
    console.log("onPrepare: Report aggregator setup complete.");
  },

  // async onComplete() {
  //   const reportError = new Error("Could not generate Allure report");
  //   const generation = allure(["generate", "./artifacts/source", "-o", "./artifacts/report"]);
  //   return new Promise((resolve, reject) => {
  //     const generationTimeout = setTimeout(() => reject(reportError), 5000);

  //     generation.on("exit", function (exitCode: number) {
  //       clearTimeout(generationTimeout);

  //       if (exitCode !== 0) {
  //         return reject(reportError);
  //       }

  //       console.log("Allure report successfully generated");
  //       resolve("");
  //     });
  //   });
  // },
  async onComplete(exitCode, config, capabilities) {
    console.log("onComplete: Generating report...");
    try {
      await reportAggregator.createReport();
      console.log("onComplete: Report generated successfully.");
    } catch (error) {
      console.error("onComplete: Error while generating report:", error);
    }
  },
};
