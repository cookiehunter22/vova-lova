var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * News Model
 * ==========
 */
var News = new keystone.List('News', {
	autokey: { path: 'slug', from: 'title', unique: true },
	map: { name: 'title' },
	singular: 'News',
	plural: 'News',
	defaultSort: '-createdAt',
});

News.add({
	title: { type: String, required: true },
	state: {
		type: Types.Select,
		options: 'draft, published, archived',
		default: 'draft',
	},
	tag: { type: String },
	date: {
		type: Date,
		required: true,
		inputFormat: 'DD-MM-YYYY',
		default: Date.now,
	},
	image: { type: Types.CloudinaryImage, autoCleanup: true },
	content: {
		description: { type: String, required: true, default: 'НЕТ ОПИСАНИЯ' },
		full: { type: Types.Html, wysiwyg: true, height: 400 },
		author: { type: String },
	},
});

News.defaultColumns = 'title|15%, date|20%, state|20%, publishedAt|15%';
News.register();
