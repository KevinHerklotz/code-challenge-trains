import getContinuingTrains from './getContinuingTrains.js';
import Train from './Train.js';

beforeEach(() => {
  document.body.innerHTML =
    '<div id="wrapper">' +
    '</div>';
});

describe('getContinuingTrains()', () => {
  it('should let all the trains pass', () => {
    const testTrain1 = new Train('blue', ['A', 'B'], 0, 90, 50);
    const testTrain2 = new Train('blue', ['C', 'D'], 0, 80, 50);
    const testTrain3 = new Train('blue', ['A', 'B'], 1, 70, 50);
    
    const givenTrains = [testTrain1, testTrain2, testTrain3];
    const expectedTrains = [testTrain1, testTrain2, testTrain3];

    // check in both ways as the expected array only needs to be a subset of the received array.
    expect(expectedTrains).toEqual(expect.arrayContaining(getContinuingTrains(givenTrains)));
    expect(getContinuingTrains(givenTrains)).toEqual(expect.arrayContaining(expectedTrains));
  });

  it('should let the first 2 trains pass as the third has less passengers', () => {
    const testTrain1 = new Train('blue', ['A', 'B'], 0, 90, 50);
    const testTrain2 = new Train('blue', ['C', 'D'], 0, 80, 50);
    const testTrain3 = new Train('blue', ['A', 'B'], 0, 70, 40);
    
    const givenTrains = [testTrain1, testTrain2, testTrain3];
    const expectedTrains = [testTrain1, testTrain2];

    // check in both ways as the expected array only needs to be a subset of the received array.
    expect(expectedTrains).toEqual(expect.arrayContaining(getContinuingTrains(givenTrains)));
    expect(getContinuingTrains(givenTrains)).toEqual(expect.arrayContaining(expectedTrains));
  });
  
  it('should let pass only 2 trains, because 2 are at the same station, even they have the same amount of passengers', () => {
    const testTrain1 = new Train('blue', ['A', 'B'], 1, 90, 50);
    const testTrain2 = new Train('blue', ['C', 'D'], 0, 80, 50);
    const testTrain3 = new Train('blue', ['A', 'B'], 1, 70, 50);
    
    const givenTrains = [testTrain1, testTrain2, testTrain3];
    
    expect(getContinuingTrains(givenTrains)).toEqual(expect.arrayContaining([testTrain2]));
    expect(getContinuingTrains(givenTrains).length).toEqual(2);
  });

  // This test case is actually not needed as there is no junction of 3 routes.
  // But it shows that it would theoretically work
  it('should let pass only 1 train, because all are at the same station', () => {
    const testTrain1 = new Train('blue', ['A', 'B'], 1, 90, 50);
    const testTrain2 = new Train('blue', ['B', 'D'], 0, 80, 60);
    const testTrain3 = new Train('blue', ['A', 'B'], 1, 70, 50);
    
    const givenTrains = [testTrain1, testTrain2, testTrain3];
    
    expect(getContinuingTrains(givenTrains)).toEqual(expect.arrayContaining([testTrain2]));
    expect(getContinuingTrains(givenTrains).length).toEqual(1);
  });
});
