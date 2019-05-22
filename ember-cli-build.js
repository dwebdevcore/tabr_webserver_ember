'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'name': 'twyr-webapp-server',

    'storeConfigInMeta': false,
    'autoRun': false,

    'fingerprint': {
      'customHash': null
    },

    'ember-bootstrap': {
      'bootstrapVersion': 4,
      'importBootstrapFont': false,
      'importBootstrapCSS': false
    },

    'ember-power-select': {
      'theme': 'material'
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import('bower_components/jstree/dist/themes/default/style.css');
  app.import('vendor/golden-layout/css/goldenlayout.css');
  app.import('vendor/golden-layout/css/goldenlayout-light-theme.css');
  app.import('vendor/mdb-free/css/mdb.css');

  app.import('bower_components/jstree/dist/jstree.js');
  app.import('vendor/golden-layout/js/goldenlayout.js');

  return app.toTree();
};
