var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Video Model
 * ==========
 */
var Video = new keystone.List('Video', {
	map: { name: 'title' },
	singular: 'Видео Баннер',
	plural: 'Видео баннеры',
});

Video.add({
	title: { type: String, required: true },
	state: {
		type: Types.Select,
		options: 'draft, published',
		default: 'draft',
	},
	youtubeId: { type: String },
	image: { type: Types.CloudinaryImage, autoCleanup: true },
	line1: { type: String },
	line2: { type: String },
	line3: { type: String },
});

Video.defaultColumns = 'title, state';
Video.register();
