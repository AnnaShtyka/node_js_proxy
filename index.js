const https = require("https");

const axios = require("axios");

const httpsAgent = new https.Agent({
  rejectUnauthorized: false
});

const DEMO_KEY = "JgEW6ZPyczKqw4mIyHdcdv2JUwbakuZquG7pk2vg";
const START_DATE = "2024-03-22";
const END_DATE = "2024-03-29";

const NASA_API_URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${START_DATE}&end_date=${END_DATE}&api_key=${DEMO_KEY}`;

const getResponse = (data) => {
  console.log(JSON.stringify(data));
};

const getAllAsteroids = () => {
  axios
    .get(NASA_API_URL, { httpsAgent })
    .then((response) => {
      getResponse(response.data);

      showAsteroidsInAWeek(response.data.element_count);
    })
    .catch((error) => console.log(error));
};

const showAsteroidsInAWeek = (allElements) => {
  console.log(
    `From ${START_DATE} to ${END_DATE} near earth were ${allElements}`
  );
};

getAllAsteroids();
