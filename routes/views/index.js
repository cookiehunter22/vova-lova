var keystone = require('keystone');
const { fetchAsync } = require('../../utils/db_utils');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);

	// view.query('news', keystone.list('News').model.find({ state: 'published' }));

	// // Render the view
	// view.render('index');
	var locals = res.locals;

	view.on('init', async function(next) {
		var q1 = keystone.list('Pages').model.find();
		var q2 = keystone
			.list('Projects')
			.model.find({ state: 'published' })
			.sort({ date: -1 });
		var q3 = keystone.list('Managers').model.find({ state: 'published' });
		var q4 = keystone
			.list('News')
			.model.find({ state: 'published' })
			.sort({ date: -1 });

		var q5 = keystone
			.list('Partners')
			.model.find({ state: 'published' })
			.sort({ sortOrder: 1 });

		const q6 = keystone
			.list('BoardMembers')
			.model.find({ state: 'published' })
			.sort({ sortOrder: 1 });

		locals.content = {};

		let [pages, projectSlides, managers, newsSlides, partners, boardMembers] = await Promise.all([
			fetchAsync(q1),
			fetchAsync(q2),
			fetchAsync(q3),
			fetchAsync(q4),
			fetchAsync(q5),
			fetchAsync(q6),
		]);

		for (let i = 0; i < pages.length; i++) {
			const item = pages[i];
			locals.content[item.name] = item[item.name];
		}
		locals.partners = partners;
		locals.projectSlides = projectSlides;
		locals.managers = managers;
		locals.boardMembers = boardMembers;
		locals.newsSlides = newsSlides;

		next();
	});

	view.render('index');
};
