function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  var emptyArray = [];
  for (let i = 0; i < arrayMusicians.length; i++) {
     emptyArray.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`);
 }
 return emptyArray;
}

function johnLennonFacts (array) {
  let i = 0
  while (i < array.length) {
    array[i] = array[i] + "!!!";
    i++
  }
  return array;
}

function iLoveTheBeatles(n) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    --n;
  } while (n < 15);
  return newArray;
}