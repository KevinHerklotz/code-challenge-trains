import stationLocations from './stationLocations.js';

class Train {
  /**
   * Constructor function of Train
   * 
   * @param {string} color color for the train, should be blue, red or green
   * @param {Array} stations array of strings with station name
   * @param {number} currentStationIndex current index of stations
   * @param {number} maxPassengers maximum amount of passengers in train 
   * @param {number} currentPassengers current amount of passengers in train
   */
  constructor(color, stations, currentStationIndex, maxPassengers, currentPassengers) {
    this.color = color;
    this.stations = stations;
    this.currentStationIndex = currentStationIndex;
    this.currentPassengers = currentPassengers;
    this.maxPassengers = maxPassengers;
    
    // DOM elements
    this.trainElement = document.createElement('div');
    this.passengersElement = document.createElement('span');
    
    this.addTrainToDOM();
    this.moveTrainToStation(this.stations[this.currentStationIndex]);
  }

  addTrainToDOM() {
    this.trainElement.className = `train ${this.color}`;
    this.passengersElement.textContent = this.currentPassengers;
    this.trainElement.appendChild(this.passengersElement);
    this.trainElement.childNodes[0].className = 'passengers';
    document.getElementById('wrapper').appendChild(this.trainElement);
  }
  
  getCurrentStation() {
    return this.stations[this.currentStationIndex];
  }
  
  goToNextStation() {
    // if current station is last station
    if (this.currentStationIndex === this.stations.length - 1) {
      // reverse array
      this.stations.reverse();
      // and set index to second element
      this.currentStationIndex = 1;
    } else {
      // otherwise increment index
      this.currentStationIndex = this.currentStationIndex + 1;
    }
    
    this.moveTrainToStation(this.stations[this.currentStationIndex]);
  }

  moveTrainToStation(station) {
    const x = stationLocations[station][0];
    const y = stationLocations[station][1];

    // get gutter-width from CSS
    let gutterWidth = getComputedStyle(document.body).getPropertyValue('--gutter-width');
    // remove "vw"
    gutterWidth = gutterWidth.slice(0, -2);

    this.trainElement.style.left = `${x * gutterWidth}vw`;
    this.trainElement.style.top = `${y * gutterWidth}vw`;
  }

  getCurrentPassengers() {
    return this.currentPassengers;
  }

  updatePassengers() {
    const passengerChange = Math.round(Math.random() * 40) - 20; // number between -20 and 20
    let newAmount = this.currentPassengers + passengerChange;
    
    if (newAmount > this.maxPassengers) {
      newAmount = this.maxPassengers;
    }

    if (newAmount < 0) {
      newAmount = 0;
    }

    this.currentPassengers = newAmount;
    this.passengersElement.textContent = newAmount;
  }
}

export default Train;