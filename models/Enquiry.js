var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Enquiry Model
 * =============
 */

var Enquiry = new keystone.List('Enquiry', {
	nocreate: true,
	noedit: true,
});

Enquiry.add({
	name: { type: String, required: true },
	email: { type: String, required: true },
	message: { type: Types.Textarea, required: true, height: 300 },
	sentAt: { type: Date, default: Date.now },
});

Enquiry.defaultSort = '-createdAt';
Enquiry.defaultColumns = 'name, email, sentAt';
Enquiry.register();
