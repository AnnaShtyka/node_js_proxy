const meteorsService = require("../services/meteorsService");

const getAllMeteors = (req, res) => {
  const request = queryParams(req);

  return meteorsService
    .getAllMeteors(request)
    .then((data) => res.status(200).json(data))
    .catch((error) => next(error));
};

const queryParams = (req) => ({
  startDate: req.query.start_date,
  endDate: req.query.end_date,
  count: req.query.element_count,
  wereDangerousMeteors: req.query.is_potentially_hazardous_asteroid
});

module.exports = { getAllMeteors };
