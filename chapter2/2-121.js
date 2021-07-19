function* getFunc() {
  throw new Error('some error');
}
function func() {
  const gen = getFunc();
  try {
    gen.next();
  } catch (e) {
    console.log('in catch:', e);
  }
}
func();