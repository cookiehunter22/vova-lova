var keystone = require('keystone');
const { fetchAsync } = require('../../utils/db_utils');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	view.on('init', async function (next) {
		var q1 = keystone.list('Pages').model.find();
		var q = keystone
			.list('Projects')
			.model.find({ state: 'published' })
			.sort({ date: -1 });

		let [content, projects] = await Promise.all([
			fetchAsync(q1),
			fetchAsync(q),
		]);

		locals.content = {};
		for (let i = 0; i < content.length; i++) {
			const item = content[i];
			locals.content[item.name] = item[item.name];
		}

		locals.projects = projects;

		next();
	});

	// Render the view
	view.render('projects');
};
