/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"TestUI5/TestUI5/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});