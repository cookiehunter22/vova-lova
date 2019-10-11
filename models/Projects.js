var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Projects Model
 * ==========
 */
var Projects = new keystone.List('Projects', {
	autokey: { path: 'slug', from: 'title', unique: true },
	map: { name: 'title' },
	singular: 'Проект',
	plural: 'Проекты',
	defaultSort: '-date',
});

Projects.add({
	title: { type: String, required: true },
	state: {
		type: Types.Select,
		options: 'draft, published',
		default: 'draft',
	},
	tag: { type: String },
	date: {
		type: Date,
		required: true,
		inputFormat: 'DD-MM-YYYY',
		default: Date.now,
	},
	image: {
		type: Types.CloudinaryImage,
		autoCleanup: true,
		folder: 'projects_small',
	},
	imageBig: {
		type: Types.CloudinaryImage,
		autoCleanup: true,
		folder: 'projects_big',
	},
	content: {
		full: { type: Types.Html, wysiwyg: true, height: 400 },
		author: { type: String, label: 'Автор статьи' },
		authorVideo: { type: String, label: 'Автор видео' },
		authorPhoto: { type: String, label: 'Автор фото' },
	},
});

Projects.defaultColumns = 'title|15%, date|20%, state|20%';
Projects.register();
