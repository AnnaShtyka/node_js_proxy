require("dotenv").config();
const axios = require("axios");
const https = require("https");

const mapAllMeteorsData = require("../utils/meteorsMapper");

const httpsAgent = new https.Agent({
  rejectUnauthorized: false
});

const START_DATE = "2024-03-22";
const END_DATE = "2024-03-29";

const showMeteorsPerWeek = (allElements) => {
  console.log(
    `From ${START_DATE} to ${END_DATE} near earth were ${allElements}`
  );
};

const getAllMeteors = () => {
  const nasaApi = process.env.NASA_API_URL;

  return axios
    .get(nasaApi, { httpsAgent })
    .then((response) => {
      console.log(JSON.stringify(mapAllMeteorsData(response.data), null, 2));

      showMeteorsPerWeek(response.data.element_count);
    })
    .catch((error) => console.log(error));
};

module.exports = { getAllMeteors };
