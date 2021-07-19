function* f1() {
  const data1 = yield;
  console.log(data1);
  const data2 = yield;
  console.log(data2);
}
const gen = f1();
gen.next(30);
gen.next(10);
gen.next(20);