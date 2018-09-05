var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);

	// view.query('news', keystone.list('News').model.find({ state: 'published' }));

	// // Render the view
	// view.render('index');
	var locals = res.locals;

	view.on('init', function (next) {
		var q1 = keystone.list('News').model.find({ state: 'published' });
		var q2 = keystone.list('Projects').model.find({ state: 'published' });

		q1.exec(function (err, result) {
			locals.news = result;
			q2.exec(function (err, result) {
				locals.projects = result;
				next();
			});
		});
	});

	view.render('index');
};
