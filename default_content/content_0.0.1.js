module.exports = [
	{
		name: 'видео баннер',

		// Video block
		video: {
			state: 'published',
			linkToNews: '/',
			youtubeId: 'YaZg8wg39QQ',

			line1: 'line1',
			line2: 'line2',
			line3: 'line3',
		},
	},

	// 	// O Fonde
	// 	oFonde: {
	// 		title: {
	// 			type: String,
	// 			dependsOn: { name: ['о фонде'] },
	// 		},
	// 		text: {
	// 			type: Types.Html,
	// 			wysiwyg: true,
	// 			height: 400,
	// 			collapse: true,
	// 			dependsOn: { name: ['о фонде'] },
	// 		},
	// 	},
	// 	// Proekti fonda
	// 	projects: {
	// 		title: {
	// 			type: String,
	// 			dependsOn: { name: ['проекты'] },
	// 		},
	// 		text: {
	// 			type: Types.Html,
	// 			wysiwyg: true,
	// 			height: 400,
	// 			collapse: true,
	// 			dependsOn: { name: ['проекты'] },
	// 		},
	// 	},

	// 	// Партнеры
	// 	partners: {
	// 		title: {
	// 			type: String,
	// 			dependsOn: { name: ['партнеры'] },
	// 		},
	// 		text: {
	// 			type: Types.Html,
	// 			wysiwyg: true,
	// 			height: 400,
	// 			collapse: true,
	// 			dependsOn: { name: ['партнеры'] },
	// 		},
	// 		subtitle: {
	// 			name: { type: String, dependsOn: { name: 'партнеры' } },
	// 			position: { type: String, dependsOn: { name: 'партнеры' } },
	// 		},
	// 		partnerLogo: {
	// 			type: Types.CloudinaryImages,
	// 			autoCleanup: true,
	// 			folder: 'partners',
	// 			dependsOn: { name: 'партнеры' },
	// 		},
	// 	},

	// 	// banner
	// 	rastorguev: {
	// 		nrBig: {
	// 			type: Types.CloudinaryImage,
	// 			autoCleanup: true,
	// 			folder: 'partners',
	// 			dependsOn: { name: 'баннер расторгуев' },
	// 		},
	// 		nrSmall: {
	// 			type: Types.CloudinaryImage,
	// 			autoCleanup: true,
	// 			folder: 'partners',
	// 			dependsOn: { name: 'баннер расторгуев' },
	// 		},
	// 		line1: { type: String, dependsOn: { name: 'баннер расторгуев' } },
	// 		line2: { type: String, dependsOn: { name: 'баннер расторгуев' } },
	// 	},
	// },
	// {
	// 	name: { type: String, required: true, noedit: true },

	// 	// Video block
	// 	video: {
	// 		state: {
	// 			type: Types.Select,
	// 			options: 'draft, published',
	// 			default: 'draft',
	// 			dependsOn: { name: 'видео баннер' },
	// 		},
	// 		linkToNews: { type: String, dependsOn: { name: 'видео баннер' } },
	// 		youtubeId: { type: String, dependsOn: { name: 'видео баннер' } },
	// 		image: {
	// 			type: Types.CloudinaryImage,
	// 			autoCleanup: true,
	// 			folder: 'video',
	// 			dependsOn: { name: 'видео баннер' },
	// 		},
	// 		line1: { type: String, dependsOn: { name: 'видео баннер' } },
	// 		line2: { type: String, dependsOn: { name: 'видео баннер' } },
	// 		line3: { type: String, dependsOn: { name: 'видео баннер' } },
	// 	},

	// 	// O Fonde
	// 	oFonde: {
	// 		title: {
	// 			type: String,
	// 			dependsOn: { name: ['о фонде'] },
	// 		},
	// 		text: {
	// 			type: Types.Html,
	// 			wysiwyg: true,
	// 			height: 400,
	// 			collapse: true,
	// 			dependsOn: { name: ['о фонде'] },
	// 		},
	// 	},
	// 	// Proekti fonda
	// 	projects: {
	// 		title: {
	// 			type: String,
	// 			dependsOn: { name: ['проекты'] },
	// 		},
	// 		text: {
	// 			type: Types.Html,
	// 			wysiwyg: true,
	// 			height: 400,
	// 			collapse: true,
	// 			dependsOn: { name: ['проекты'] },
	// 		},
	// 	},

	// 	// Партнеры
	// 	partners: {
	// 		title: {
	// 			type: String,
	// 			dependsOn: { name: ['партнеры'] },
	// 		},
	// 		text: {
	// 			type: Types.Html,
	// 			wysiwyg: true,
	// 			height: 400,
	// 			collapse: true,
	// 			dependsOn: { name: ['партнеры'] },
	// 		},
	// 		subtitle: {
	// 			name: { type: String, dependsOn: { name: 'партнеры' } },
	// 			position: { type: String, dependsOn: { name: 'партнеры' } },
	// 		},
	// 		partnerLogo: {
	// 			type: Types.CloudinaryImages,
	// 			autoCleanup: true,
	// 			folder: 'partners',
	// 			dependsOn: { name: 'партнеры' },
	// 		},
	// 	},

	// 	// banner
	// 	rastorguev: {
	// 		nrBig: {
	// 			type: Types.CloudinaryImage,
	// 			autoCleanup: true,
	// 			folder: 'partners',
	// 			dependsOn: { name: 'баннер расторгуев' },
	// 		},
	// 		nrSmall: {
	// 			type: Types.CloudinaryImage,
	// 			autoCleanup: true,
	// 			folder: 'partners',
	// 			dependsOn: { name: 'баннер расторгуев' },
	// 		},
	// 		line1: { type: String, dependsOn: { name: 'баннер расторгуев' } },
	// 		line2: { type: String, dependsOn: { name: 'баннер расторгуев' } },
	// 	},
	// },
	// {
	// 	name: { type: String, required: true, noedit: true },

	// 	// Video block
	// 	video: {
	// 		state: {
	// 			type: Types.Select,
	// 			options: 'draft, published',
	// 			default: 'draft',
	// 			dependsOn: { name: 'видео баннер' },
	// 		},
	// 		linkToNews: { type: String, dependsOn: { name: 'видео баннер' } },
	// 		youtubeId: { type: String, dependsOn: { name: 'видео баннер' } },
	// 		image: {
	// 			type: Types.CloudinaryImage,
	// 			autoCleanup: true,
	// 			folder: 'video',
	// 			dependsOn: { name: 'видео баннер' },
	// 		},
	// 		line1: { type: String, dependsOn: { name: 'видео баннер' } },
	// 		line2: { type: String, dependsOn: { name: 'видео баннер' } },
	// 		line3: { type: String, dependsOn: { name: 'видео баннер' } },
	// 	},

	// 	// O Fonde
	// 	oFonde: {
	// 		title: {
	// 			type: String,
	// 			dependsOn: { name: ['о фонде'] },
	// 		},
	// 		text: {
	// 			type: Types.Html,
	// 			wysiwyg: true,
	// 			height: 400,
	// 			collapse: true,
	// 			dependsOn: { name: ['о фонде'] },
	// 		},
	// 	},
	// 	// Proekti fonda
	// 	projects: {
	// 		title: {
	// 			type: String,
	// 			dependsOn: { name: ['проекты'] },
	// 		},
	// 		text: {
	// 			type: Types.Html,
	// 			wysiwyg: true,
	// 			height: 400,
	// 			collapse: true,
	// 			dependsOn: { name: ['проекты'] },
	// 		},
	// 	},

	// 	// Партнеры
	// 	partners: {
	// 		title: {
	// 			type: String,
	// 			dependsOn: { name: ['партнеры'] },
	// 		},
	// 		text: {
	// 			type: Types.Html,
	// 			wysiwyg: true,
	// 			height: 400,
	// 			collapse: true,
	// 			dependsOn: { name: ['партнеры'] },
	// 		},
	// 		subtitle: {
	// 			name: { type: String, dependsOn: { name: 'партнеры' } },
	// 			position: { type: String, dependsOn: { name: 'партнеры' } },
	// 		},
	// 		partnerLogo: {
	// 			type: Types.CloudinaryImages,
	// 			autoCleanup: true,
	// 			folder: 'partners',
	// 			dependsOn: { name: 'партнеры' },
	// 		},
	// 	},

	// 	// banner
	// 	rastorguev: {
	// 		nrBig: {
	// 			type: Types.CloudinaryImage,
	// 			autoCleanup: true,
	// 			folder: 'partners',
	// 			dependsOn: { name: 'баннер расторгуев' },
	// 		},
	// 		nrSmall: {
	// 			type: Types.CloudinaryImage,
	// 			autoCleanup: true,
	// 			folder: 'partners',
	// 			dependsOn: { name: 'баннер расторгуев' },
	// 		},
	// 		line1: { type: String, dependsOn: { name: 'баннер расторгуев' } },
	// 		line2: { type: String, dependsOn: { name: 'баннер расторгуев' } },
	// 	},
	// },
];
