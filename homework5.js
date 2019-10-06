let lineN = ["8th","Union Square","23rd","28th","34th","Times Square"];
let lineL = ["8th", " 6th", " Union Square", " 3rd", " 1st"];
let line6 = ["Astro Place"," Union Square"," 23rd"," 28th"," 33rd"," Grand Central"];

let nycSubway = [...lineN, ...lineL, ...line6]

let stops = "";
let journey = "";
//let stopsCount = (nycSubway.indexOf(getOff) - nycSubway.indexOf(getOn));


let yourRoute = function(getOn,lineA, getOff, lineB){
    if(lineA == lineB){
        let here = lineA.indexOf(getOn) + 1;
        for(let i = here; i < lineA.length; i++){
            if(lineA.indexOf(getOn) < lineA.indexOf(getOff)){
                stops += " " + lineA[i];
                stopsCount = (lineA.indexOf(getOff) - lineA.indexOf(getOn));
            }
        }
        for(let j = lineA.length; j < lineA.length; j--){
            if(lineA.indexOf(getOn) > lineA.indexOf(getOff)){
                stops+= lineA[j];
                stopsCount = ((lineA.indexOf(getOff) - lineA.indexOf(getOn)));
            }
            else{stops+= getOff;
                stopsCount = (lineA.indexOf(getOff) - lineA.indexOf(getOn));
                break;
            }
                
        }

    

    journey+= stops;
    return journey;
};

console.log(yourRoute("8th", lineN, "8th", lineN));

//console.log(yourRoute("8th", "8th"));
//console.log("8th", "Times Square");
//console.log("Union Square", "Times Square");


// var planTrip = function (lineA, lineB) {
//    for (var i = 0; i < lineN.length; i++) {
//      var travel = lineN[i];
//      if (lineN[i] === lineA && lineB) {
//        console.log("we made it to " + lineB+ " from "+ lineA + " we have moved "+ (lineN.indexOf(lineB) - (lineN.indexOf(lineA))) + " spots")
//      } else if (lineN[i] !== lineA && lineB){
//        for (var i = 0; i < lineL.length; i++) {
//          lineL[i]
//            var travel2 = LineL[i];
//            if (lineL[i]= lineA||lineB){
//              console.log("we made it to"+ lineB + " from " + lineA + " We switched stations at union square!")

//            }



//        };
//      }

//    };
//  }