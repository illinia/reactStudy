function* g1() {
  yield 2;
  yield 3;
}

function* g2_second() {
  yield 1;
  for (const value of g1()) {
    yield value;
  }
  yield 4;
}

function* g2_third() {
  yield 1;
  yield* [2, 3];
  yield 4;
}