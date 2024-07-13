const insertion = require('../../Sorting/insertion');

test('sorting array 1 ascending', () => {
  expect(insertion([34, 7, 23, 32, 5, 62, 78, 1, 45, 9], false)).toMatchObject([
    1, 5, 7, 9, 23, 32, 34, 45, 62, 78,
  ]);
});

test('sorting array 1 descending', () => {
  expect(insertion([34, 7, 23, 32, 5, 62, 78, 1, 45, 9], true)).toMatchObject([
    78, 62, 45, 34, 32, 23, 9, 7, 5, 1,
  ]);
});

test('sorting array 2 ascending', () => {
  expect(insertion([10, 22, 4, 6, 3, 15, 30, 2, 19, 8], false)).toMatchObject([
    2, 3, 4, 6, 8, 10, 15, 19, 22, 30,
  ]);
});

test('sorting array 2 descending', () => {
  expect(insertion([10, 22, 4, 6, 3, 15, 30, 2, 19, 8], true)).toMatchObject([
    30, 22, 19, 15, 10, 8, 6, 4, 3, 2,
  ]);
});

test('sorting array 3 ascending', () => {
  expect(insertion([50, 40, 30, 20, 10, 60, 70, 80, 90, 100], false)).toMatchObject([
    10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
  ]);
});

test('sorting array 3 descending', () => {
  expect(insertion([50, 40, 30, 20, 10, 60, 70, 80, 90, 100], true)).toMatchObject([
    100, 90, 80, 70, 60, 50, 40, 30, 20, 10,
  ]);
});

test('sorting array 4 ascending', () => {
  expect(insertion([21, 12, 32, 14, 25, 16, 7, 18, 29, 10], false)).toMatchObject([
    7, 10, 12, 14, 16, 18, 21, 25, 29, 32,
  ]);
});

test('sorting array 4 descending', () => {
  expect(insertion([21, 12, 32, 14, 25, 16, 7, 18, 29, 10], true)).toMatchObject([
    32, 29, 25, 21, 18, 16, 14, 12, 10, 7,
  ]);
});

test('sorting array 5 ascending', () => {
  expect(insertion([99, 85, 75, 65, 55, 45, 35, 25, 15, 5], false)).toMatchObject([
    5, 15, 25, 35, 45, 55, 65, 75, 85, 99,
  ]);
});

test('sorting array 5 descending', () => {
  expect(insertion([99, 85, 75, 65, 55, 45, 35, 25, 15, 5], true)).toMatchObject([
    99, 85, 75, 65, 55, 45, 35, 25, 15, 5,
  ]);
});

test('sorting array 6 ascending', () => {
  expect(insertion([13, 26, 39, 52, 65, 78, 91, 104, 117, 130], false)).toMatchObject([
    13, 26, 39, 52, 65, 78, 91, 104, 117, 130,
  ]);
});

test('sorting array 6 descending', () => {
  expect(insertion([13, 26, 39, 52, 65, 78, 91, 104, 117, 130], true)).toMatchObject([
    130, 117, 104, 91, 78, 65, 52, 39, 26, 13,
  ]);
});

test('sorting array 7 ascending', () => {
  expect(insertion([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], false)).toMatchObject([
    1, 3, 5, 7, 9, 11, 13, 15, 17, 19,
  ]);
});

test('sorting array 7 descending', () => {
  expect(insertion([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], true)).toMatchObject([
    19, 17, 15, 13, 11, 9, 7, 5, 3, 1,
  ]);
});

test('sorting array 8 ascending', () => {
  expect(insertion([20, 40, 60, 80, 100, 120, 140, 160, 180, 200], false)).toMatchObject([
    20, 40, 60, 80, 100, 120, 140, 160, 180, 200,
  ]);
});

test('sorting array 8 descending', () => {
  expect(insertion([20, 40, 60, 80, 100, 120, 140, 160, 180, 200], true)).toMatchObject([
    200, 180, 160, 140, 120, 100, 80, 60, 40, 20,
  ]);
});

test('sorting array 9 ascending', () => {
  expect(insertion([17, 23, 5, 9, 14, 6, 8, 3, 1, 2], false)).toMatchObject([
    1, 2, 3, 5, 6, 8, 9, 14, 17, 23,
  ]);
});

test('sorting array 9 descending', () => {
  expect(insertion([17, 23, 5, 9, 14, 6, 8, 3, 1, 2], true)).toMatchObject([
    23, 17, 14, 9, 8, 6, 5, 3, 2, 1,
  ]);
});

test('sorting array 10 ascending', () => {
  expect(insertion([1000, 900, 800, 700, 600, 500, 400, 300, 200, 100], false)).toMatchObject([
    100, 200, 300, 400, 500, 600, 700, 800, 900, 1000,
  ]);
});

test('sorting array 10 descending', () => {
  expect(insertion([1000, 900, 800, 700, 600, 500, 400, 300, 200, 100], true)).toMatchObject([
    1000, 900, 800, 700, 600, 500, 400, 300, 200, 100,
  ]);
});
