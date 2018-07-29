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
    
    this.trainElement = document.createElement("DIV");
    
    this.addTrainToDOM();
  }

  addTrainToDOM() {
    console.log('addTrainToDOM');
  }

  goToNextStation() {
    console.log('goToNextStation');
    this.updatePassengers();
  }

  getCurrentStation() {
    console.log('getCurrentStation');
  }

  getNextStation() {
    console.log('getNextStation');
  }

  getCurrentPassengers() {
    console.log('getCurrentPassengers');
  }

  updatePassengers() {
    console.log('updatePassengers');
  }
}

export default Train;