define([ "troopjs-browser/component/widget" ], function (Widget) {

	return Widget.extend({
		"sig/initialize": function () {
			var me = this;

			return me.publish("ajax", {
				"url": me.$element.data("html"),
				"dataType": "html"
			}).then(function (html) {
					return me.html(html);
			});
		}
	});
});