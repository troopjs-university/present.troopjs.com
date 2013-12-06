require.config({
	"baseUrl": "../bower_components",
	"packages": [{
		"name": "jquery",
		"location": "jquery",
		"main": "jquery.min"
	}, {
		"name": "revealjs",
		"location": "reveal.js",
		"main": "js/reveal.min"
	}, {
		"name": "require-css",
		"location": "require-css",
		"main": "css"
	}],

	"shim": {
		"revealjs": {
			"exports": "Reveal",
			"init": function () {
				delete window.Reveal;
			}
		}
	},

	"map": {
		"*":{
			"css": "require-css"
		}
	},

	"deps": [ "jquery", "revealjs", "css!revealjs/css/reveal.min", "css!revealjs/css/theme/default", "css!revealjs/lib/css/zenburn" ],

	"callback": function (jQuery, reveal) {
		jQuery(function ($) {
			$(".reveal").load("slides.html", function () {
				reveal.initialize();
			});
		})
	}
});
