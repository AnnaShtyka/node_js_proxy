require("dotenv").config();
const axios = require("axios");
const https = require("https");

const getMeteorsDataWithQuery = require("../utils/meteorsMapper");

const httpsAgent = new https.Agent({
  rejectUnauthorized: false
});

const getAllMeteors = (params) => {
  const nasaApi = process.env.NASA_API_URL;

  return axios
    .get(nasaApi, {
      httpsAgent,
      params: {
        start_date: process.env.START_DATE,
        end_date: process.env.END_DATE,
        api_key: process.env.API_KEY
      }
    })
    .then((response) => {
      const data = getMeteorsDataWithQuery(
        response.data,
        params.count,
        params.wereDangerousMeteors
      );
      console.log(
        `From ${process.env.START_DATE} to ${process.env.END_DATE} near earth were ${response.data.element_count}`
      );

      return data;
    });
};

module.exports = { getAllMeteors };
