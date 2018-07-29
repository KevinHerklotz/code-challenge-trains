class Train {
  /**
   * Constructor function of Train
   * 
   * @param {string} color color for the train, should be blue, red or green
   * @param {Array} stations array of strings with station name
   * @param {number} currentStation current index of stations
   * @param {number} maxPassengers maximum amount of passengers in train 
   * @param {number} currentPassengers current amount of passengers in train
   */
  constructor(color, stations, currentStation, maxPassengers, currentPassengers) {
    this.color = color;
    this.stations = stations;
    this.currentStation = currentStation;
    this.currentPassengers = currentPassengers;
    this.maxPassengers = maxPassengers;
    
    // DOM elements
    this.trainElement = document.createElement("div");
    this.passengersElement = document.createElement('span');
    
    this.addTrainToDOM();
  }
  
  addTrainToDOM() {
    this.trainElement.className = `train ${this.color}`;
    this.passengersElement.textContent = this.currentPassengers;
    this.trainElement.appendChild(this.passengersElement);
    this.trainElement.childNodes[0].className = "passengers";
    document.getElementById('wrapper').appendChild(this.trainElement);
  }

  goToNextStation() {
    console.log('goToNextStation');
    this.updatePassengers();
  }

  getCurrentStation() {
    return this.stations[this.currentStation];
  }

  getNextStation() {
    console.log('getNextStation');
  }

  getCurrentPassengers() {
    console.log('getCurrentPassengers');
  }

  updatePassengers() {
    const passengerChange = Math.floor(Math.random() * 40) - 20; // number between -20 and 20
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