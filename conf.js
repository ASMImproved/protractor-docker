exports.config = {
  sauceUser: process.env.SAUCE_USER,
  sauceKey: process.env.SAUCE_ACCESS_KEY,

  sauceSeleniumAddress: 'localhost:4445/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to the configuration file location passed
  // to protractor (in this example conf.js).
  // They may include glob patterns.
  specs: ['/tests/**/**.spec.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  },

  baseUrl: process.env.BASE_URL,

  useAllAngular2AppRoots: true
};
