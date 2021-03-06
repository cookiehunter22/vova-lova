var keystone = require('keystone');
const { fetchAsync } = require('../../utils/db_utils');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	// Render the view
	var locals = res.locals;

	view.on('init', async function (next) {
		var q1 = keystone.list('Pages').model.find();
		let result = await fetchAsync(q1);

		locals.content = {};
		for (let i = 0; i < result.length; i++) {
			const item = result[i];
			locals.content[item.name] = item[item.name];
		}

		next();
	});
	view.render('404');
};
