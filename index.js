function iterativeLog(array) {
  var index;
var element;
  array.forEach( (index,element)=> {
    console.log(`${index}: ${element}.`)
  } )
}

function iterate(callback){

var array=[1,2,3,4];
array.forEach(callback);
return array;
}

function doToArray(array,callback){
array.forEach(callback);
return array;
}
