let lineN = ["8th","Union Square","23rd","28th","34th","Times Square"];
let lineL = ["8th", " 6th", " Union Square", " 3rd", " 1st"];
let line6 = ["Astro Place"," Union Square"," 23rd"," 28th"," 33rd"," Grand Central"];
let stops = "";
let count = 1;
let journey = "";


let yourRoute = function(line1, getOn, line2, getOff){
    //line1[0] = getOn;
    console.log(line1.indexOf(getOn));
    if(line1 == line2){     
        for(let i = line1.indexOf(getOn); i < line1.length; i++){
            if(getOff != getOn && !stops.includes(getOff)){
                stops = stops + " " + line1[i];
                count++;
                
                
            }else{
                stops = getOff;
                count++;
                break;
            }
        }
    }

    journey+= stops;
    //console.log(count);

    return journey;
};

console.log(yourRoute(lineN, "Times Square", lineN, "28th"));


