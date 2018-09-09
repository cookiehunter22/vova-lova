var keystone = require('keystone');
var Enquiry = keystone.list('Enquiry');

exports = module.exports = function (req, res) {
	var newEnquiry = new Enquiry.model(req.body);
	newEnquiry.save();
	res.status(200).send();
};
