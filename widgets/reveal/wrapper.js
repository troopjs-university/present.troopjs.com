define([
	"troopjs-browser/component/widget",
	"revealjs",
	"css!revealjs/css/reveal.min",
	"css!revealjs/css/theme/default",
	"poly/array"
], function (Widget, revealjs) {

	var CONFIG = "_config";

	return Widget.extend(function ($element, name, config) {
		this[CONFIG] = config;
	}, {
		"sig/initialize": function () {
			revealjs.initialize(this[CONFIG]);
		}
	});
});