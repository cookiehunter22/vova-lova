var keystone = require('keystone');
const defaults = require('./content_0.0.1');

module.exports = function () {
	var Pages = keystone.list('Pages');
	var page = new Pages.model();
	console.log(page);
	console.log(Pages);

	Pages.model().updateItem(page, defaults[0], {}, function (err) {
		if (err) {
			// Error handling
			console.log(err);
		}
	});
};
