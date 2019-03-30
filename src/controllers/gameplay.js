import async from 'async';
import validator from 'validator';

import GamePlay from '../models/gameplay';
// import Follow from '../models/follow';

import logger from '../utils/logger';

exports.list = (req, res) => {
	const params = req.params || {};
	const query = req.query || {};

	const page = parseInt(query.page, 10) || 0;
	const perPage = parseInt(query.per_page, 10) || 10;

	GamePlay.apiQuery(req.query)
		.select('username game start end xp coins')
		.then(gameplays => {
			res.json(gameplays);
		})
		.catch(err => {
			logger.error(err);
			res.status(422).send(err.errors);
		});
};

exports.get = (req, res) => {
	User.findById(req.params.gameplayId)
		.then(gameplay => {
			res.json(gameplay);
		})
		.catch(err => {
			logger.error(err);
			res.status(422).send(err.errors);
		});
};

exports.put = (req, res) => {
	const data = req.body || {};

	logger.info("data:"+ data.toString());

	if (!data.game || !data.username) {
		return res.status(422).send('Game e username são obrigatórios.');
	}

	if (data.username && !validator.isAlphanumeric(data.username)) {
		return res.status(422).send('Usernames must be alphanumeric.');
	}

	if (data.game && !validator.isAlphanumeric(data.game)) {
		return res.status(422).send('Usernames must be alphanumeric.');
	}

	GamePlay.findByIdAndUpdate({ _id: req.params.gameplayId }, data, { new: true })
		.then(gameplay => {
			if (!gameplay) {
				return res.sendStatus(404);
			}

			res.json(gameplay);
		})
		.catch(err => {
			logger.error(err);
			res.status(422).send(err.errors);
		});
};

exports.post = (req, res) => {
	const data = Object.assign({}, req.body, { user: req.user.sub }) || {};

	// if (!data.start){
	// 	data.start = Date.now.toString
	// }

	GamePlay.create(data)
		.then(gameplay => {
			res.json(gameplay);
		})
		.catch(err => {
			logger.error(err);
			res.status(500).send(err);
		});
};

exports.delete = (req, res) => {
	GamePlay.findByIdAndUpdate(
		{ _id: req.params.gameplay },
		{ active: false },
		{
			new: true
		}
	)
		.then(gameplay => {
			if (!gameplay) {
				return res.sendStatus(404);
			}

			res.sendStatus(204);
		})
		.catch(err => {
			logger.error(err);
			res.status(422).send(err.errors);
		});
};
