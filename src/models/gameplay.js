import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import mongooseStringQuery from 'mongoose-string-query';

import logger from '../utils/logger';

export const GamePlaySchema = new Schema(
	{
		username: {
			type: String,
			lowercase: true,
			trim: true,
			index: true,
			required: true
    },
		xp: {
			type: Number,
			required: false
		},
		coins: {
			type: Number,
			required: false
		},
		keys: {
			type: Number,
			required: false
		}
	},
	{ collection: 'gameplays' }
);


GamePlaySchema.plugin(timestamps);
GamePlaySchema.plugin(mongooseStringQuery);

GamePlaySchema.index({ game: 1, username: 1 });

module.exports = exports = mongoose.model('GamePlay', GamePlaySchema);
