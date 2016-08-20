function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  const foods = ["Pizza", "Burgers", "Chicken"];

  foods.forEach(callback);

  return foods;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
