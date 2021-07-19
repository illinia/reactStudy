async function getData() {
  throw new Error('123');
}
getData().catch(error => console.log(error));