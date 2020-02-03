var keystone = require('keystone');
const { fetchAsync } = require('../../utils/db_utils');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	// Render the view
	var locals = res.locals;

	view.on('init', async function (next) {
		var q1 = keystone.list('Pages').model.find();
		var q2 = keystone
			.list('Documents')
			.model.find({ state: 'published' })
			.sort({ date: 1 });

		const [content, documents] = await Promise.all([
			fetchAsync(q1),
			fetchAsync(q2),
		]);

		locals.content = {};
		for (let i = 0; i < content.length; i++) {
			const item = content[i];
			locals.content[item.name] = item[item.name];
		}
		locals.documents = documents;
		next();
	});
	view.render('documents');
};
