require("dotenv").config();

const axios = require("axios");

const apiKey = process.env.API_KEY;
const startDate = process.env.START_DATE;
const endDate = process.env.END_DATE;

const nasaApi = process.env.NASA_API_URL;

const getResponse = (data) => {
  console.log(JSON.stringify(data));
};

const getAllAsteroids = () => {
  axios
    .get(nasaApi, {
      params: {
        start_date: startDate,
        end_date: endDate,
        api_key: apiKey
      }
    })
    .then((response) => {
      getResponse(response.data);

      showAsteroidsInAWeek(response.data.element_count);
    })
    .catch((error) => console.log(error));
};

const showAsteroidsInAWeek = (allElements) => {
  console.log(
    `From ${process.env.START_DATE} to ${process.env.END_DATE} near earth were ${allElements}`
  );
};

getAllAsteroids();
