import Train from './Train.js';

beforeEach(() => {
  document.body.innerHTML = '<div id="wrapper"></div>';
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

describe('goToNextStation()', () => {
  it('goToNextStation() should return next station', () => {
    const testTrain = new Train('blue', ['A', 'B'], 0, 80, 50);
    testTrain.goToNextStation();
    expect(testTrain.getCurrentStation()).toBe('B');
  });

  it('goToNextStation() should be able to go backwards', () => {
    const testTrain = new Train('blue', ['A', 'B', 'C', 'D'], 3, 80, 50);
    testTrain.goToNextStation();
    expect(testTrain.getCurrentStation()).toBe('C');
    testTrain.goToNextStation();
    expect(testTrain.getCurrentStation()).toBe('B');
    testTrain.goToNextStation();
    expect(testTrain.getCurrentStation()).toBe('A');
    testTrain.goToNextStation();
    expect(testTrain.getCurrentStation()).toBe('B');
  });
});

describe('moveTrainToStation()', () => {
  it('train at station A should initially be at left: 0vw, top: 37.5vw', () => {
    // As JSDOM is only a renderless DOM API emulation library it does not compute element position.
    // I should for example use PhantomJS to test positions
    
    // expect(trainElement.style.left).toBe('0vw');
    // expect(trainElement.style.top).toBe('37.5vw');
  });
});

describe('getCurrentPassengers()', () => {
  it('getCurrentPassengers() should return 50', () => {
    const testTrain = new Train('blue', ['A', 'B'], 0, 80, 50);
    expect(testTrain.getCurrentPassengers()).toBe(50);
  });
});

describe('updatePassengers()', () => {
  const mockMath = Object.create(global.Math);
  mockMath.random = () => 1;
  global.Math = mockMath;
  
  it('passengers span element should stay 50', () => {
    const testTrain = new Train('blue', ['A', 'B'], 0, 80, 50);
    expect(document.getElementsByClassName('passengers')[0].textContent).toBe('50');
  });

  it('passengers span element should increase by 20', () => {
    const testTrain = new Train('blue', ['A', 'B'], 0, 80, 30);
    testTrain.updatePassengers();
    expect(document.getElementsByClassName('passengers')[0].textContent).toBe('50');
    testTrain.updatePassengers();
    expect(document.getElementsByClassName('passengers')[0].textContent).toBe('70');
  });

  it('passengers span element should not increase more than maximum', () => {
    const testTrain = new Train('blue', ['A', 'B'], 0, 80, 70);
    testTrain.updatePassengers();
    expect(document.getElementsByClassName('passengers')[0].textContent).toBe('80');
  });

  it('passengers span element should not get less than 0', () => {
    mockMath.random = () => 0;
    global.Math = mockMath;
    const testTrain = new Train('blue', ['A', 'B'], 0, 80, 10);
    testTrain.updatePassengers();
    expect(document.getElementsByClassName('passengers')[0].textContent).toBe('0');
  });
});