var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * OFonde Model
 * ==========
 */
var OFonde = new keystone.List('OFonde', {
	map: { name: 'title' },
	singular: 'O Fonde',
	plural: 'O Fonde',
});

OFonde.add({
	title: { type: String, required: true },
	text: { type: Types.Html, wysiwyg: true, height: 400 },
});

OFonde.defaultColumns = 'title';
OFonde.register();
