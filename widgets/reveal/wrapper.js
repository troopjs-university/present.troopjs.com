define([
	"troopjs-browser/component/widget",
	"./loader/html",
	"jquery",
	"revealjs",
	"css!revealjs/css/reveal.min",
	"css!revealjs/css/theme/default"
], function (Widget, HtmlLoader, $, revealjs) {

	var CONFIG = "_config";

	function onFragment($event) {
		$($event.originalEvent.fragment)
			.trigger($.Event($event, {
				"type": "reveal/" + $event.type
			}));
	}

	function onOverview($event) {
		$($event.target)
			.trigger($.Event($event, {
				"type": "reveal/" + $event.type
			}));
	}

	return Widget.extend(function ($element, name, config) {
		this[CONFIG] = config;
	}, HtmlLoader, {
		"sig/initialize": function () {
			revealjs.initialize(this[CONFIG]);
		},

		"dom/ready": function ($event) {
			var originalEvent = $event.originalEvent;

			$(originalEvent.currentSlide).trigger($.Event($event, {
				"type": "reveal/slideshown"
			}), [, originalEvent.indexh, originalEvent.indexv ]);
		},

		"dom/slidechanged": function ($event) {
			var originalEvent = $event.originalEvent;
			var previousSlide = originalEvent.previousSlide;
			var currentSlide = originalEvent.currentSlide;
			var indexh = originalEvent.indexh;
			var indexv = originalEvent.indexv;

			$(previousSlide).trigger($.Event($event, {
				"type": "reveal/slidehidden"
			}), [ currentSlide, indexh, indexv ]);

			$(currentSlide).trigger($.Event($event, {
				"type": "reveal/slideshown"
			}), [ previousSlide, indexh, indexv]);
		},

		"dom/fragmentshown": onFragment,
		"dom/fragmenthidden": onFragment,
		"dom/overviewshown": onOverview,
		"dom/overviewhidden": onOverview
	});
});