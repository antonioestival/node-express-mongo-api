import logger from '../utils/logger';

exports.version = (req, res) => {
    res.status(200).send("v0.4.01");
};
