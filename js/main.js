//main logic file. Can be tested through the console.log lines without using the interface
var intersection="Union Square"
var map={
N:["Times Square","34rd","28th","23rd",intersection,"8th"],
L:["8th","6th",intersection,"3rd","1st"],
Sixth:["Grand Central","33rd","28th","23rd",intersection,"Astor Place"],
}
function planTrip(departureLine,departureStop,arrivalLine,arrivalStop){
    let i=map[departureLine].indexOf(departureStop);
    let destinationIndex=map[arrivalLine].indexOf(arrivalStop);
    let path=[];
    let path2=[];
    let text="";
    if(departureLine!=arrivalLine){
        console.log(text+="You must travel through the following stops on the " + departureLine+ " line:")

        while(map[departureLine][i]!=intersection){
            if(map[departureLine].indexOf(intersection)>i){
                i++;
            } else{
                i--;
            }
            path.push(map[departureLine][i]);
        }
        i=map[arrivalLine].indexOf(intersection);
        console.log(text+=path.join(', ')+ ".");
        if(i!=destinationIndex){
        console.log(text+="Change at Union Square.");
    }
    }
    while(i!=destinationIndex){
        if(destinationIndex>i){
            i++;
        } else{
            i--;
        }
        path2.push(map[arrivalLine][i]);
    }
    if(path2.length>1){
    console.log(text+="Your trip will include the following stops on the " +arrivalLine +" line: " + path2.join(', ')+ ".");

        }   
     console.log(text+=path.length+path2.length+" stops in total.");
    return text;
}
//Test values Sixth=6
// planTrip("N", "Times Square", "Sixth", "33rd");
// planTrip("N", "Times Square", "N", "28th");
// planTrip("Sixth", "Astor Place", "L", "8th");

