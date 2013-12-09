define([
	"troopjs-browser/component/widget",
	"revealjs"
], function (Widget, revealjs) {

	return Widget.extend({
		"slide": revealjs.slide,
		"left": revealjs.left,
		"right": revealjs.right,
		"up": revealjs.up,
		"down": revealjs.down,
		"prev": revealjs.prev,
		"next": revealjs.next,
		"prevFragment": revealjs.prevFragment,
		"nextFragment": revealjs.nextFragment,
		"toggleOverview": revealjs.toggleOverview,
		"togglePause": revealjs.togglePause
	});
});