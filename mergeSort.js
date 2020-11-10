var array = [];
var qtd = 5000;
var sort = [];
var startTime, endTime;
startTime = new Date();
function setup() {
  createCanvas(900, 600);
  colorMode(HSB, height);
  for (i = 0; i < qtd; i++) {
    array[i] =random(height);
  }
  sort = mergeSort(array);
  frameRate(1);
}

var historyIndex = 0;
function draw() {
  background(51);
  for (i = 0; i < sort[historyIndex].length; i++) {
    let col = color(sort[historyIndex][i], height, height);
    stroke(col);
    fill(col);
    var location = map(i, 0, sort[historyIndex].length, 0, width);
    rect(location, height - sort[historyIndex][i], width/qtd, height);
  } 
  historyIndex++;
  if (historyIndex > sort.length -1){
    noLoop();
  }
}


function mergeSort(array) {
  
  var arrays = [array.slice()],
  n = array.length,
  array0 = array,
  array1 = new Array(n);
  
  for (var m = 1; m < n; m <<= 1) {
    for (var i = 0; i < n; i += (m << 1)) {
      merge(i, Math.min(i + m, n), Math.min(i + (m << 1), n));
    }
    arrays.push(array1.slice());
    array = array0, array0 = array1,array1 = array;
  }

function merge(left, right, end) {
  for (var i0 = left, i1 = right, j = left; j < end; ++j) {
    array1[j] = array0[i0 < right && (i1 >= end || array0[i0] <=    array0[i1]) ? i0++ : i1++];
   }
 }
 return arrays;  
}

endTime = new Date()
var t = endTime - startTime
console.log("Este array de 5000 numeros demorou " + t + "ms para ser ordenado, um array do mesmo tamanhao demora 0 ms utilizando o quick sort, 45 utilizando o insertion sort e 145 utilizando o bubble sort"); 