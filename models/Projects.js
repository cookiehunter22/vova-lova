var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Projects Model
 * ==========
 */
var Projects = new keystone.List('Projects', {
	autokey: { path: 'slug', from: 'title', unique: true },
	map: { name: 'title' },
	singular: 'Project',
	plural: 'Projects',
	defaultSort: '-createdAt',
});

Projects.add({
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
		full: { type: Types.Html, wysiwyg: true, height: 400 },
		author: { type: String },
	},
});

Projects.defaultColumns = 'title|15%, date|20%, state|20%, publishedAt|15%';
Projects.register();
