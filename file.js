var roads = [
  {
    name: 'N',
    stops:['Time Square', '34th Street', '28th Street', '23rd Street', 'Union Square', '8th Street']
  },
  {
    name: 'L',
    stops: ['8th Street', '6th Street', 'Union Square', '3rd Street', '1st Street']
  },
  {
    name: '6',
    stops: ['Grand Central', '33rd Street', '28th Street', '23rd Street', 'Union Square', 'Astor Place']
  }
];


var u = 0; 
var v = 0; 
var w = 0; 

var x = 0; 
var y = 0; 
var z = 0; 

var startPos = [];
var endPos = [];



var planRoute = function(startLine, startingStation, endLine, endStation){
  getStart(startLine, startingStation);
  getEnd(endLine, endStation);
  getStartLeg();
  getendPos();

if (w === z){
  console.log('Start at ' + startingStation + ' on the ' +
  startLine + ' Line, through ' + startPos + ' and get off at ' + endStation);
}
else if (u - v === 1 || v + 1 === u){
  console.log('Start at ' + startingStation + 'change at ' + ' Union Square ' +
  ' continue through to line ' + endLine + 'and get off at ' + endStation);
}
else {
  console.log('Start at ' + startingStation + ' on line ' + startLine + ' through stations '
  + startPos + ' change at Union Sqaure then proceed through to ' + endPos +
   ' and get off at ' + endStation + ' on line ' + endLine);
}
};



var getStart = function(startLine, startingStation){
for (var i = 0; i < roads.length; i++){
  if (startLine === roads[i].name){
    for (var j = 0; j < roads[i].stops.length; j++){
      if (startingStation === roads[i].stops[j]){
        u = roads[i].stops.indexOf(startingStation);
        v = roads[i].stops.indexOf('Union Square');
        w = i;
      }
    }
  }
}
};


var getEnd = function(endLine, endStation){
for (var i = 0; i < roads.length; i++){
if (endLine === roads[i].name){
  for (var j = 0; j < roads[i].stops.length; j++){
    if (endStation === roads[i].stops[j]){
      x = roads[i].stops.indexOf(endStation);
      y = roads[i].stops.indexOf('Union Square');
      z = i;
    }
  }
}
}
};

var getStartLeg = function (){
if (u < v){ //u = starting station , v = union square
for (var i = u + 1; i < v; i++){
  startPos.push(roads[w].stops[i]);
}
} else if (v < u){
for (var j = u - 1; j > v; j--){
  startPos.push(roads[w].stops[j]);
}
}
else {
 for (var k = u + 1; k < y; k++){
   startPos.push(roads[w].stops[k]);
 }
}
};

var getendPos = function (){
if (x < y){ //x = end station station , y = union square
for (var i = y - 1; i > x; i--){
  endPos.push(roads[z].stops[i]);
}
} else {
for (var j = y + 1; j < x; j++){
  endPos.push(roads[z].stops[j]);
}
}
};

planRoute("6", "23rd Street", "L", "3rd Street")