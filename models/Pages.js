var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Pages Model
 * ==========
 */
var Pages = new keystone.List('Pages', {
	map: { name: 'name' },
	singular: 'Страница',
	plural: 'Страницы',
	nocreate: true,
	nodelete: true,
	track: {
		updatedAt: true,
		updatedBy: true,
	},
});

Pages.add({
	name: { type: String, required: true, noedit: true },
	page: { type: String, required: true, noedit: true },

	// Video block
	video: {
		state: {
			type: Types.Select,
			options: 'draft, published',
			default: 'draft',
			dependsOn: { name: 'video' },
		},
		linkToNews: { type: String, dependsOn: { name: 'video' } },
		youtubeId: { type: String, dependsOn: { name: 'video' } },
		image: {
			type: Types.CloudinaryImage,
			autoCleanup: true,
			folder: 'video',
			dependsOn: { name: 'video' },
		},
		line1: { type: String, dependsOn: { name: 'video' } },
		line2: { type: String, dependsOn: { name: 'video' } },
		line3: { type: String, dependsOn: { name: 'video' } },
	},

	// O Fonde
	oFonde: {
		title: {
			type: String,
			dependsOn: { name: ['oFonde'] },
		},
		text: {
			type: Types.Html,
			wysiwyg: true,
			height: 400,
			collapse: true,
			dependsOn: { name: ['oFonde'] },
		},
	},
	// Proekti fonda
	projects: {
		title: {
			type: String,
			dependsOn: { name: ['projects'] },
		},
		text: {
			type: Types.Html,
			wysiwyg: true,
			height: 400,
			collapse: true,
			dependsOn: { name: ['projects'] },
		},
	},

	// Партнеры
	partners: {
		title: {
			type: String,
			dependsOn: { name: ['partners'] },
		},
		text: {
			type: Types.Html,
			wysiwyg: true,
			height: 400,
			collapse: true,
			dependsOn: { name: ['partners'] },
		},
		subtitle: {
			name: { type: String, dependsOn: { name: 'partners' } },
			position: { type: String, dependsOn: { name: 'partners' } },
		},
	},

	// banner
	rastorguev: {
		nrBig: {
			type: Types.CloudinaryImage,
			autoCleanup: true,
			folder: 'rastorguev',
			dependsOn: { name: 'rastorguev' },
		},
		nrSmall: {
			type: Types.CloudinaryImage,
			autoCleanup: true,
			folder: 'rastorguev',
			dependsOn: { name: 'rastorguev' },
		},
		line1: { type: String, dependsOn: { name: 'rastorguev' } },
		line2: { type: String, dependsOn: { name: 'rastorguev' } },
	},

	// management
	management: {
		title: { type: String, dependsOn: { name: 'management' } },
		text: {
			type: Types.Html,
			wysiwyg: true,
			height: 400,
			collapse: true,
			dependsOn: { name: ['management'] },
		},
	},

	// НОВОСТИ
	news: {
		title: { type: String, dependsOn: { name: 'news' } },
		titleOtherNews: { type: String, dependsOn: { name: 'news' } },
		text: {
			type: Types.Html,
			wysiwyg: true,
			height: 400,
			collapse: true,
			dependsOn: { name: ['news'] },
		},
	},
	// Контакты
	contacts: {
		title: { type: String, dependsOn: { name: 'contacts' } },
		text: {
			type: Types.Html,
			wysiwyg: true,
			height: 400,
			collapse: true,
			dependsOn: { name: ['contacts'] },
		},
		info: { type: String, dependsOn: { name: 'contacts' } },
		address: { type: String, dependsOn: { name: 'contacts' } },
		email: { type: String, dependsOn: { name: 'contacts' } },
	},
	// ФУТЕР
	footer: {
		line1: { type: String, dependsOn: { name: 'footer' } },
		line2: { type: String, dependsOn: { name: 'footer' } },
		line3: { type: String, dependsOn: { name: 'footer' } },
	},

	// Документы
	docs: {
		title: { type: String, dependsOn: { name: 'docs' } },
		text: {
			type: Types.Html,
			wysiwyg: true,
			height: 400,
			collapse: true,
			dependsOn: { name: ['docs'] },
		},
	},
});

Pages.defaultColumns = 'page, updatedBy, updatedAt';
Pages.register();
