var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);

	view.query('news', keystone.list('News').model.find({ state: 'published' }));

	// Render the view
	view.render('index');
};
