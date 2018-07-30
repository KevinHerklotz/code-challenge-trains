import Train from './Train.js';

// time it takes until trains start to drive again in milliseconds
const delay = 2000;
// declare passengerTimer outside of function, otherwise there would be a new setTimeout variable for each function call
let passengerTimer;

// instantiate the 3 trains
const blueTrain = new Train('blue', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], 0, 80, 40);
const redTrain = new Train('red', ['N', 'C', 'K', 'O', 'P'], 0, 70, 40);
const greenTrain = new Train('green', ['I', 'J', 'K', 'E', 'L', 'M'], 0, 90, 40);

// move trains every [delay] milliseconds
const intervalId = window.setInterval(moveTrains, delay)

function moveTrains() {
  blueTrain.goToNextStation();
  redTrain.goToNextStation();
  greenTrain.goToNextStation();

  // I want passengers to change during stopping, that's why this delay
  passengerTimer = window.setTimeout(() => {
    blueTrain.updatePassengers();
    redTrain.updatePassengers();
    greenTrain.updatePassengers();
  }, 0.5 * delay);
}
