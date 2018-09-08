var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// load news
	locals.filters = {
		singleNews: req.params.title,
	};

	view.on('init', function (next) {
		var q = keystone
			.list('News')
			.model.find({ state: 'published' })
			.sort({ date: -1 });

		q.exec(function (err, result) {
			locals.news = result;
			locals.singleNews = result.filter(function (item) {
				return item.slug === locals.filters.singleNews;
			})[0];
			next();
		});
	});

	// Render the view
	view.render('news');
};
