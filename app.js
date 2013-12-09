require.config({

	"packages": [{
		"name": "jquery",
		"location": "bower_components/jquery",
		"main": "jquery.min"
	}, {
		"name": "poly",
		"location": "bower_components/poly",
		"main": "es5"
	}, {
		"name": "when",
		"location": "bower_components/when",
		"main": "when"
	}, {
		"name": "revealjs",
		"location": "bower_components/reveal.js",
		"main": "js/reveal"
	}, {
		"name": "require-css",
		"location": "bower_components/require-css",
		"main": "css"
	}, {
		"name": "troopjs",
		"location": "bower_components/troopjs",
		"main": "maxi"
	}, {
		"name": "troopjs-contrib-revealjs",
		"location": "bower_components/troopjs-contrib-revealjs",
		"main": "main"
	}, {
		"name": "troopjs-slides",
		"location": "."
	}],

	"shim": {
		"revealjs": {
			"exports": "Reveal"
		}
	},

	"map": {
		"*":{
			"css": "require-css",
			"widgets": "troopjs-slides/widgets"
		}
	},

	"deps": [ "require", "jquery", "troopjs" ],

	"callback": function (contextRequire, jQuery) {
		contextRequire([ "troopjs-browser/application/widget", "troopjs-browser/ajax/service" ], function (Application, AjaxService) {
			jQuery(function ($) {
				Application($("html"), "bootstrap", AjaxService()).start();
			});
		})
	}
});
