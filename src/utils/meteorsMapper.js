const mapAllMeteorsData = (allMeteors) => {
  const meteors = Object.values(allMeteors.near_earth_objects).flat();
  return meteors;
};

const getMeteorData = (meteor) => {
  return {
    id: meteor.id,
    name: meteor.name,
    diameter: meteor.estimated_diameter.meters,
    potentiallyHazardousAsteroid: meteor.is_potentially_hazardous_asteroid,
    closeApproachData: getCloseApproachData(meteor.close_approach_data)
  };
};

const getCloseApproachData = (closeApproachData) => {
  return closeApproachData.map((data) => ({
    closeApproachDateFull: data.close_approach_date_full,
    relativeVelocityInKilometersPerSecond:
      data.relative_velocity.kilometers_per_second
  }));
};

const isWereDangerousMeteors = (meteors) => {
  return meteors.some((meteor) => meteor.is_potentially_hazardous_asteroid);
};

const getMeteorsDataWithQuery = (allMeteors, elementCount, dangerous) => {
  const mappedAllMeteorsData = mapAllMeteorsData(allMeteors);
  const meteor = mappedAllMeteorsData.map((meteor) => getMeteorData(meteor));

  let dataWithQuery = {};

  if (elementCount) {
    dataWithQuery.elementCount = allMeteors.element_count;

    return dataWithQuery;
  }

  if (dangerous) {
    dataWithQuery.dangerous = isWereDangerousMeteors(mappedAllMeteorsData);
  }

  dataWithQuery.meteors = meteor;

  return dataWithQuery;
};

module.exports = getMeteorsDataWithQuery;
