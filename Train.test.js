import Train from './Train.js';

beforeEach(() => {
  document.body.innerHTML =
    '<div id="wrapper">' +
    '</div>';
});

describe('addTrainToDOM()', () => {
  it('should not find a train', () => {
    const trainNodes = document.getElementsByClassName('train');
    expect(trainNodes.length).toBe(0);
  });
  
  it('should find 1 train', () => {
    const testTrain = new Train('blue', ['A', 'B'], 0, 80, 50);
    const trainNodes = document.getElementsByClassName('train');
    expect(trainNodes.length).toBe(1);
  });

  it('should find 2 trains', () => {
    const testTrain = new Train('green', ['A', 'B'], 0, 80, 50);
    const testTrain2 = new Train('red', ['C', 'D'], 0, 80, 50);
    const trainNodes = document.getElementsByClassName('train');
    expect(trainNodes.length).toBe(2);
  });

  it('should not find a passenger', () => {
    const passengerNodes = document.getElementsByClassName('passengers');
    expect(passengerNodes.length).toBe(0);
  });

  it('should find 1 passenger', () => {
    const testTrain = new Train('blue', ['A', 'B'], 0, 80, 50);
    const passengerNodes = document.getElementsByClassName('passengers');
    expect(passengerNodes.length).toBe(1);
  });
});

describe('getCurrentStation()', () => {
  it('should return first station (A)', () => {
    const testTrain = new Train('blue', ['A', 'B'], 0, 80, 50);
    expect(testTrain.getCurrentStation()).toBe('A');
  });

  it('should return second station (B)', () => {
    const testTrain = new Train('blue', ['A', 'B'], 1, 80, 50);
    expect(testTrain.getCurrentStation()).toBe('B');
  });
});