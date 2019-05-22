'use strict';

module.exports = function(environment) {
	let ENV = {
		'modulePrefix': 'tabr-webapp-server',
		environment,
		'rootURL': '/',
		'locationType': 'auto',

		'pageTitle': {
			'replace': false,
			'separator': ' > '
		},

		'changeTracker': {
			'trackHasMany': true,
			'auto': true,
			'enableIsDirty': true
		},

		'googleFonts': [
			'Noto+Sans:400,400i,700,700i',
			'Noto+Serif:400,400i,700,700i&subset=devanagari'
		],

		// Set or update content security policies
		'contentSecurityPolicy': {
			'font-src': "'self' fonts.gstatic.com",
			'style-src': "'self' fonts.googleapis.com"
		},

		'moment': {
			'allowEmpty': true,
			'includeTimezone': 'all',

			'includeLocales': true,
			'localeOutputPath': '/moment-locales'
		},

		'resizeServiceDefaults': {
			'debounceTimeout': 100,
			'heightSensitive': true,
			'widthSensitive': true,
			'injectionFactories': ['component']
		},

		'ember-paper': {
			'insertFontLinks': false
		},

		'EmberENV': {
			'FEATURES': {
				// Here you can enable experimental features on an ember canary build
				// e.g. 'with-controller': true
			},
			'EXTEND_PROTOTYPES': {
				// Prevent Ember Data from overriding Date.parse.
				'Date': true
			}
		},

		'APP': {
			// Here you can pass flags/options to your application instance
			// when it is created
		}
	};

	if(environment === 'development') {
		ENV.APP.LOG_RESOLVER = true;
		ENV.APP.LOG_ACTIVE_GENERATION = true;
		ENV.APP.LOG_TRANSITIONS = true;
		ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
		ENV.APP.LOG_VIEW_LOOKUPS = true;
	}

	if(environment === 'test') {
		// Testem prefers this...
		ENV.locationType = 'none';

		// keep test console output quieter
		ENV.APP.LOG_RESOLVER = true;
		ENV.APP.LOG_ACTIVE_GENERATION = true;
		ENV.APP.LOG_TRANSITIONS = true;
		ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
		ENV.APP.LOG_VIEW_LOOKUPS = true;

		ENV.APP.rootElement = '#ember-testing';
		ENV.APP.autoboot = false;
	}

	if(environment === 'production') {
		// here you can enable a production-specific feature
		ENV.APP.LOG_RESOLVER = false;
		ENV.APP.LOG_ACTIVE_GENERATION = false;
		ENV.APP.LOG_TRANSITIONS = false;
		ENV.APP.LOG_TRANSITIONS_INTERNAL = false;
		ENV.APP.LOG_VIEW_LOOKUPS = false;
	}

	return ENV;
};
