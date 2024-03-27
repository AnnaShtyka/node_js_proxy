const mapAllMeteorsData = (allMeteorsData) => {
  return Object.values(allMeteorsData.near_earth_objects)
    .flatMap((data) => data)
    .map((meteor) => getmeteorData(meteor));
};

const getmeteorData = (meteor) => {
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

module.exports = mapAllMeteorsData;
