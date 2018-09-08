var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Managers Model
 * ==========
 */
var Managers = new keystone.List('Managers', {
	autokey: { path: 'slug', from: 'name', unique: true },
	map: { name: 'name' },
	singular: 'Руководитель',
	plural: 'Руководство',
});

Managers.add({
	name: { type: String },
	position: { type: String },
	state: {
		type: Types.Select,
		options: 'draft, published',
		default: 'draft',
	},
	image: { type: Types.CloudinaryImage, autoCleanup: true },
});

Managers.defaultColumns = 'name|15%, state|20%';
Managers.register();
