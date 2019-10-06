let lineN = ["8th","Union Square","23rd","28th","34th","Times Square"];
let lineL = ["8th", " 6th", " Union Square", " 3rd", " 1st"];
let line6 = ["Astro Place"," Union Square"," 23rd"," 28th"," 33rd"," Grand Central"];

let nycSubway = [...lineN, ...lineL, ...line6]

let stops = "";
let journey = "";
let stopsCount = 1;

let yourRoute = function(getOn, line1, getOff, line2){
    if(line1 == line2){
        let here = line1.indexOf(getOn) + 1;
        if(line1.indexOf(getOn) < line1.indexOf(getOff)){
            for(let i = here; i < line1.length; i++){
                if(getOff != getOn){
                    stops+= " " + line1[i];
                    stopsCount = (line1.indexOf(getOff) - line1.indexOf(getOn));
                }else{
                    stops+= getOff;
                    stopsCount = (line1.indexOf(getOff) - line1.indexOf(getOn));
                }
            }
        }
        let hereNow = (line1.indexOf(getOn) - 1) ;
        
        if(line1.indexOf(getOn) > line1.indexOf(getOff)){
            for(let i = hereNow; i >=0; i--){
                if(getOff != getOn){
                    stops+= " " + line1[i];
                    stopsCount = (line1.indexOf(getOff) - line1.indexOf(getOn));
                }else{
                    stops+= getOff;
                    stopsCount = (line1.indexOf(getOff) - line1.indexOf(getOn));
                }
            
            }
        }
    }else{
        for(let i = 0; i < nycSubway.length; i++){
            if(getOff != getOn){
                stops+= " " + nycSubway[i];

            }else{
                stops = getOff;
                break;
            }
        }
    }
    console.log(stopsCount);
    console.log("you have made it from" + getOn + " to " + getOff+" passing through this much of stops:" + stopsCount);
    journey+= stops;
    return journey;
}
