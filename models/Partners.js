var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Partners Model
 * ==========
 */
var Partners = new keystone.List('Partners', {
	autokey: { path: 'slug', from: 'title', unique: true },
	map: { name: 'title' },
	singular: 'Партнер',
	plural: 'Партнеры',
	defaultSort: 'sortOrder',
});

Partners.add({
	title: { type: String, required: true },
	state: {
		type: Types.Select,
		options: 'draft, published',
		default: 'draft',
	},
	sortOrder: { type: Number, default: 0 },
	image: {
		type: Types.CloudinaryImage,
		autoCleanup: true,
		folder: 'partners',
	},
});

Partners.defaultColumns = 'title|15%, sortOrder|20%, state|20%';
Partners.register();
