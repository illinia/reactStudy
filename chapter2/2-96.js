async function getData() {
  const p1 = asyncFunc1();
  const p2 = asyncFunc2();
  const data1 = await p1;
  const data2 = await p2;
}

async function getData() {
  const [data1, data2] = await Promise.all([asyncFunc1(), asyncFUnc2()]);
}