var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var User = new keystone.List('User', {
	singular: 'Пользователь',
	plural: 'Пользователи',
});

User.add(
	{
		name: { type: Types.Name, required: true, index: true },
		email: {
			type: Types.Email,
			initial: true,
			required: true,
			unique: true,
			index: true,
		},
		password: { type: Types.Password, initial: true, required: true },
	},
	'Permissions',
	{
		isAdmin: {
			type: Boolean,
			label: 'Имеет доступ к редактированию',
			index: true,
		},
		// isDeadPool: { type: Boolean, label: 'Может создавать и удалять пользователей', index: true },
	}
);

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});

/**
 * Registration
 */
User.defaultColumns = 'name, email, isAdmin';
User.register();
