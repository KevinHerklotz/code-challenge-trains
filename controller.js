import Train from './Train.js';
import getContinuingTrains from './getContinuingTrains.js';

// time it takes until trains start to drive again in milliseconds
const delay = 2000;

// instantiate the 3 trains
const blueTrain = new Train('blue', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], 0, 80, 40);
const redTrain = new Train('red', ['N', 'C', 'K', 'O', 'P'], 0, 70, 40);
const greenTrain = new Train('green', ['I', 'J', 'K', 'E', 'L', 'M'], 0, 90, 40);

// move trains every [delay] milliseconds
window.setInterval(moveTrains, delay);

function moveTrains() {
  const trainsToContinue = getContinuingTrains([blueTrain, redTrain, greenTrain]);

  trainsToContinue.forEach((train) => {
    train.goToNextStation();
  });

  // I want passengers to change during stopping, that's why this delay
  window.setTimeout(() => {
    blueTrain.updatePassengers();
    redTrain.updatePassengers();
    greenTrain.updatePassengers();
  }, 0.5 * delay);
}
