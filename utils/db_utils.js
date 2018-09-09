async function fetchAsync (query) {
	try {
		return await query.exec();
	} catch (e) {
		return [];
	}
}

module.exports = {
	fetchAsync,
};
