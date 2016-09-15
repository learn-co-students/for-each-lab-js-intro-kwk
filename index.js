function iterativeLog(arr) {
  arr.forEach(function(item, i) {
    console.log(`${i}: ${item}`);
  });
}

function iterate(cb) {
  var arr = ['apples', 'bananas', 'grapes', 'cherries', 'pears'];

  arr.forEach(cb);

  return arr;
}

function doToArray(arr, cb) {
  arr.forEach(cb);
}
