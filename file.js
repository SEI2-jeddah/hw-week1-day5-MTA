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

var x = 0;
var y = 0;
var currentStation = [];
var remainingStations = [];


var printRoute = function(){
    for (var i = 0; i < roads[y].stops.length; i++){
        currentStation.push(roads[y].stops[x]);
      x++
    }
    };
var getRemaining = function(){
     for (var i = 1; i < currentStation.length; i++){
        remainingStations.push(currentStation[i]);
        x++
     }
     };
var getRoute = function(startLine, startingStation){
for (var i = 0; i < roads.length; i++){
  if (startLine === roads[i].name){
    y = i;
    for (var j = 0; j < roads[i].stops.length; j++){
      x = roads[i].stops.indexOf(startingStation);
      }
    }
  }
printRoute();
getRemaining();
console.log('You are at Line ' +  startLine + ' Station is '+ currentStation[0] + ' continue to ' + remainingStations.filter(Boolean) + ' You have arrived!');
};


getRoute('L', 'Union Square');

