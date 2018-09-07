var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);

	// view.query('news', keystone.list('News').model.find({ state: 'published' }));

	// // Render the view
	// view.render('index');
	var locals = res.locals;

	view.on('init', function (next) {
		var q1 = keystone.list('Video').model.findOne({ state: 'published' });
		var q2 = keystone.list('OFonde').model.findOne();
		var q3 = keystone.list('Projects').model.find({ state: 'published' });
		var q4 = keystone.list('Managers').model.find({ state: 'published' });
		var q5 = keystone.list('News').model.find({ state: 'published' });

		q1.exec(function (err, result) {
			locals.video = result;
			q2.exec(function (err, result) {
				locals.oFonde = result;
				q3.exec(function (err, result) {
					locals.projects = result;
					q4.exec(function (err, result) {
						locals.managers = result;
						q5.exec(function (err, result) {
							locals.news = result;
							next();
						});
					});
				});
			});
		});
	});

	view.render('index');
};
