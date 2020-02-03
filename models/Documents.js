const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * Docs Model
 * ==========
 */
const Documents = new keystone.List('Documents', {
	autokey: { path: 'slug', from: 'title', unique: true },
	map: { name: 'title' },
	singular: 'Документ',
	plural: 'Документы',
	defaultSort: '-date',
});

Documents.add({
	title: { type: String, required: true },
	state: {
		type: Types.Select,
		options: 'draft, published, archived',
		default: 'draft',
	},
	date: {
		type: Date,
		required: true,
		inputFormat: 'DD-MM-YYYY',
		default: Date.now,
	},
	file: {
		type: Types.CloudinaryImage,
		autoCleanup: true,
		folder: 'documents',
	},
});

Documents.defaultColumns = 'title|15%, date|20%, state|20%';
Documents.register();
