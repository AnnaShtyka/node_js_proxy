require("dotenv").config();

const axios = require("axios");

const apiKey = process.env.API_KEY;
START_DATE = '2024-03-22';
END_DATE = '2024-03-29';

const nasaApi = process.env.NASA_API_URL;

const getResponse = (data) => {
  console.log(JSON.stringify(data));
};

const getAllAsteroids = () => {
  axios
    .get(nasaApi, {
      params: {
        start_date: START_DATE,
        end_date: END_DATE,
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
    `From ${START_DATE} to ${END_DATE} near earth were ${allElements}`
  );
};

getAllAsteroids();
