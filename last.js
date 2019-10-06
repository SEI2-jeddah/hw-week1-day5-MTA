let lineN = ["8th","Union Square","23rd","28th","34th","Times Square"];
let lineL = ["8th", " 6th", " Union Square", " 3rd", " 1st"];
let line6 = ["Astro Place"," Union Square"," 23rd"," 28th"," 33rd"," Grand Central"];

let nycSubway = [...lineN, ...lineL, ...line6]

//"You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."
let stops = "";
let journey = "";
let stopsCount = 0;

let yourRoute = function (startPoint,line1, endPoint, line2){
    if(line1 == line2){
        for(let i = 0; i < line1.length; i++){
            if(startPoint == endPoint){
                stops+= endPoint;
                stopsCount = 0;
                break;
            }
            let q = (line1.indexOf(startPoint)-i);
            if(line1.indexOf(startPoint) > line1.indexOf(endPoint) && (q >=  0)){
                
                stops+= " "+ line1[q];
                
            }
            let r = (line1.indexOf(endPoint));
            if(line1.indexOf(startPoint) < line1.indexOf(endPoint)){
                stops+= " "+ line1[i];
                break;
            }
           
        }
    }
    journey+= stops;
    return journey;
};

console.log(yourRoute("Times Square", lineN, "8th", lineN));
console.log(yourRoute("8th", lineN, "Times Square", lineN)); 