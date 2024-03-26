const meteorsService = require("../services/meteorsService");

const getAllMeteors = (req, res) => {
  return meteorsService
    .getAllMeteors()
    .then((data) => res.status(200).json(data))
    .catch((error) => next(error));
};

module.exports = { getAllMeteors };
