function logElts(elt, index, array) {
  console.log(`${index}: ${elt}`)

}
function iterativeLog(array) {
  array.forEach(logElts)
}

function iterate(callback) {
  var arr = [1, 2, 3]
  arr.forEach(callback)
  return arr

}

function doToArray(array, callback) {
  array.forEach(callback)
}
