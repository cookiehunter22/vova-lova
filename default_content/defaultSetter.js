var keystone = require('keystone');
const defaults = require('./content_0.0.1');

module.exports = function () {
	var Pages = keystone.list('Pages');
	for (let i = 0; i < defaults.length; i++) {
		const item = defaults[i];
		Pages.model.findOne({ name: item.name }).exec(function (err, result) {
			if (err) console.log(err);
			if (result) return;
			console.log(`creating: ${item.name}`);

			var page = new Pages.model(item);
			page.save();
		});
	}
};
