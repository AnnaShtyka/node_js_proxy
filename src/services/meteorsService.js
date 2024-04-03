require("dotenv").config();
const axios = require("axios");
const https = require("https");

const getMeteorsDataWithQuery = require("../utils/meteorsMapper");

const httpsAgent = new https.Agent({
  rejectUnauthorized: false
});

const START_DATE = "2024-03-22";
const END_DATE = "2024-03-29";

const getAllMeteors = (params) => {
  const nasaApi = process.env.NASA_API_URL;

  return axios
    .get(nasaApi, {
      httpsAgent
    })
    .then((response) => {
      const data = getMeteorsDataWithQuery(
        response.data,
        params.count,
        params.wereDangerousMeteors
      );
      console.log(
        `From ${START_DATE} to ${END_DATE} near earth were ${allElements}`
      );

      return data;
    })
    .catch((error) => console.log(error));
};

module.exports = { getAllMeteors };
