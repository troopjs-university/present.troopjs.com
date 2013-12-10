define([ "troopjs-browser/component/widget" ], function (Widget) {
	var ARRAY_SLICE = Array.prototype.slice;

	return Widget.extend({
		"sig/initialize": function () {
			var me = this;
			var $html = me.$element.data("html");
			var args = ARRAY_SLICE.call(arguments);

			return $html
				? me
					.publish("ajax", {
						"url": $html,
						"dataType": "html"
					})
					.then(function (html) {
						return me.html(html);
					})
					.yield(args)
				: args;
		}
	});
});