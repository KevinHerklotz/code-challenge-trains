/**
 * getContinuingTrains
 * 
 * @param  {Array} givenTrainArray Array of train instances
 * @return {Array}                 Array of train instances that are allowed to continue
 */
const getContinuingTrains = (givenTrainArray) => {
  const continuingTrainArray = [];
  const sameStationTrainsArray = [];
  
  // looks like this: ['A','B','C','A']
  const stations = givenTrainArray.map(train => train.getCurrentStation());

  // add trains at same train station to sameStationTrainsArray
  // and trains at unique train station to continuingTrainArray
  givenTrainArray.forEach((train) => {
    const sameStations = stations.filter(value => value === train.getCurrentStation());
    if (sameStations.length > 1) {
      sameStationTrainsArray.push(train);
    } else {
      continuingTrainArray.push(train);
    }
  });

  // if there are trains at the same station
  if (sameStationTrainsArray.length > 0) {
    // get the train with most passengers
    const trainWithMorePassengers = sameStationTrainsArray.reduce((currentTrain, maxTrain) => {
      return currentTrain.getCurrentPassengers() > maxTrain.getCurrentPassengers() ? currentTrain : maxTrain;
    }, sameStationTrainsArray[0]);
  
    // ...and add this train to continuingTrainArray
    continuingTrainArray.push(trainWithMorePassengers);
  }

  return continuingTrainArray;
};

export default getContinuingTrains;