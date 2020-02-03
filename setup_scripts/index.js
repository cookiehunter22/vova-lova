const fs = require('fs');
const path = require('path');
var handlebars = require('handlebars');

const publicPath = path.resolve(__dirname, '../public/build');
const defaultHTMLFileName = path.resolve(__dirname, '../templates/views/layouts/default.hbs');

const files = fs.readdirSync(publicPath);

const jsFileName = files.find((file) => file.match(/.+\.js/));
if (!jsFileName) {
	throw new Error('No js bundle file found');
}

const cssFileName = files.find((file) => file.match(/.+\.css/));
if (!cssFileName) {
	throw new Error('No css bundle file found');
}

fs.readFile(defaultHTMLFileName, (err, data) => {
	if (err) {
		throw new Error('Error reading file', err);
	}

	const string = data
		.toString()
		.replace(/src="\/build\/.+\.js"/, `src="/build/${jsFileName}"`)
		.replace(/href="\/build\/.+\.css"/, `href="/build/${cssFileName}"`);

	fs.writeFileSync(defaultHTMLFileName, string);
});
