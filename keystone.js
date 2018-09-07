// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone');
var handlebars = require('express-handlebars');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation

keystone.init({
	'name': 'pknr',
	'brand': 'pknr',
	'session store': 'mongo',
	'host': process.env.IP || '127.0.0.1',
	'sass': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': '.hbs',
	'cloudinary config':
		process.env.CLOUDINARY_URL
		|| 'cloudinary://569318915877669:_a5Pp3uKOoAmnQRNOYPr-GtSquc@hhv2anbjv',

	'custom engine': handlebars.create({
		layoutsDir: 'templates/views/layouts',
		partialsDir: 'templates/views/partials',
		defaultLayout: 'default',
		helpers: new require('./templates/views/helpers')(),
		extname: '.hbs',
	}).engine,

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
});

// Load your project's Models
keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	moment: require('moment'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

// Load your project's Routes
keystone.set('routes', require('./routes'));

// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	'Сообщения': 'enquiries',
	'Пользователи': 'users',
	'Видео Баннер': 'Video',
	'О Фонде': 'OFonde',

	'Проекты': 'projects',
	'Руководство': 'managers',
	'Новости': 'news',
});

// Start Keystone to connect to your database and initialise the web server

keystone.start();
