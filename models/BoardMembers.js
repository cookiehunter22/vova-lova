var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Board Members Model
 * ==========
 */
const BoardMembers = new keystone.List('BoardMembers', {
	autokey: { path: 'slug', from: 'name', unique: true },
	map: { name: 'name' },
	singular: 'Член попечительского совета',
	plural: 'Члены попечительского совета',
});

BoardMembers.add({
	name: { type: String },
	position: { type: String },
	state: {
		type: Types.Select,
		options: 'draft, published',
		default: 'draft',
	},
	image: { type: Types.CloudinaryImage, autoCleanup: true, folder: 'board_members' },
});

BoardMembers.defaultColumns = 'name|15%, state|20%';
BoardMembers.register();
