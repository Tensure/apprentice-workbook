const func = require('./func.js');

test('Expect robot to have moved 1 unit', () => {
    expect(func([[0, 1]])).toEqual({
        totalDistance: 1,
        distanceFromStart: 1
    });
});

test('Expect robot to have moved 5 units', () => {
    expect(func([[0, 1], [0, 5]])).toEqual({
        totalDistance: 5,
        distanceFromStart: 5
    });
});

test('Expect robot to have total distance of 15 and distance from start of 5', () => {
    expect(func([[0, 1], [0, 5], [0, 10], [0, 5]])).toEqual({
        totalDistance: 15,
        distanceFromStart: 5
    });
});

test('Expect robot to have total distance of 20 and distance from start of 0', () => {
    expect(func([[0, 1], [0, 5], [0, 10], [0, 5], [0, 0]])).toEqual({
        totalDistance: 20,
        distanceFromStart: 0
    });
});

test('Expect robot to have total distance of 20 and distance from start of 0', () => {
    expect(func([[0, -1], [0, -5], [0, -10], [0, -5], [0, 0]])).toEqual({
        totalDistance: 20,
        distanceFromStart: 0
    });
});

test('Expect robot to have total distance of 20 and distance from start of 0', () => {
    expect(func([[1, 0], [5, 0], [10, 0], [5, 0], [0, 0]])).toEqual({
        totalDistance: 20,
        distanceFromStart: 0
    });
});

test('Expect robot to have total distance of 20 and distance from start of 0', () => {
    expect(func([[-1, 0], [-5, 0], [-10, 0], [-5, 0], [0, 0]])).toEqual({
        totalDistance: 20,
        distanceFromStart: 0
    });
});

test('Expect the robot to have total distance of ~97.5 and distance from start of ~14.14', () => {
    expect(func([[1, 2], [5, 3], [10, 16], [-1, 40], [-10, -10]])).toEqual({
        totalDistance: 97.49186262871189,
        distanceFromStart: 14.142135623730951
    });
});