async function getData() {
  try {
    await doAsync();
    return doSync();
  } catch (error) {
    console.log(error);
  }
}