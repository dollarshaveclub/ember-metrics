/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dummy',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    'ember-metrics': {
      includeAdapters: ['segment', 'google-tag-manager', 'piwik', 'dynamic-tag-manager']
    },

    metricsAdapters: [
      {
        name: 'GoogleAnalytics',
        environments: ['all'],
        config: {
          id: 'UA-XXXX-Y'
        }
      },
      {
        // if `environments` is undefined, it defaults to all
        name: 'Mixpanel',
        // environments: ['all'],
        config: {
          token: '0f76c037-4d76-4fce-8a0f-a9a8f89d1453'
        }
      },
      {
        // if `environments` is undefined, it defaults to all
        name: 'DynamicTagManager',
        // environments: ['all'],
        config: {
          src: '//path.com/to.src.js'
        }
      },
      {
        name: 'LocalDummyAdapter',
        environments: ['all'],
        config: {
          foo: 'bar'
        }
      }
    ]
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
