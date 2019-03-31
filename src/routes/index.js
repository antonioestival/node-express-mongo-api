import Index from '../controllers/index';

module.exports = api => {
	api.route('/version').get(Index.version);
};
