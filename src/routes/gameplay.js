import GamePlay from '../controllers/gameplay';

module.exports = api => {
	api.route('/gameplays').get(GamePlay.list);
	api.route('/gameplays/:gameplayId').get(GamePlay.get);
	api.route('/gameplays/:gameplayId').put(GamePlay.put);
	api.route('/gameplays').post(GamePlay.post);
	api.route('/gameplays/:gameplayId').delete(GamePlay.delete);
	api.route('/gameplays/:gameplayId/ranking').get(GamePlay.ranking);
};
