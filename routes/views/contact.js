var keystone = require('keystone');
var Enquiry = keystone.list('Enquiry');

exports = module.exports = function (req, res) {
	// var view = new keystone.View(req, res);
	// var locals = res.locals;

	// // Set locals
	// locals.formData = req.body || {};
	// locals.validationErrors = {};
	// locals.enquirySubmitted = false;

	// if (!req.body.name || !req.body.email || !req.body.message) {
	// 	return res.send({ status: 'incomplete data set' });
	// }

	// // On POST requests, add the Enquiry item to the database
	// view.on('post', { action: 'contact' }, function (next) {
	// 	var newEnquiry = new Enquiry(req.body);
	// 	Enquiry.updateItem(newEnquiry)
	// 	// var updater = newEnquiry.getUpdateHandler(req);

	// 	// updater.process(
	// 	// 	req.body,
	// 	// 	{
	// 	// 		flashErrors: true,
	// 	// 		fields: 'name, email, message',
	// 	// 		errorMessage: 'Возникла проблема при отправке формы',
	// 	// 	},
	// 	// 	function (err) {
	// 	// 		if (err) {
	// 	// 			console.log(err);

	// 	// 			locals.validationErrors = err.errors;
	// 	// 		} else {
	// 	// 			locals.enquirySubmitted = true;
	// 	// 		}
	// 	// 		next();
	// 	// 	}
	// 	// );
	// });
	// console.log(locals);

	// // view.render('/', locals);
	// if (!req.body.name || !req.body.email || !req.body.message) {
	// 	return res.send({ status: 'incomplete data set' });
	// }

	var newEnquiry = new Enquiry.model(req.body);
	newEnquiry.save();
	res.redirect('/');
};
