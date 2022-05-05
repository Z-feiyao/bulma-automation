module.exports = (files) => {
	const db = require('./db')(files);
	const middleware = require('./middleware')(files, db);
	return {middleware, db};
};