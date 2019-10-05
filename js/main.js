var intersection="Union Square"
var map={
N:["Times Square","34rd","28th","23rd",intersection,"8th"],
L:["8th","6th",intersection,"3rd","1st"],
S:["Grand Central","33rd","28th","23rd",intersection,"Astor Place"],
}
function planTrip(departureLine,departureStop,arrivalLine,arrivalStop){
    let i=map[departureLine].indexOf(departureStop);
    let destinationIndex=map[arrivalLine].indexOf(arrivalStop);
    let path=[];
    let path2=[];
    let text="";
    if(departureLine!=arrivalLine){
        console.log("You must travel through the following stops on the " + departureLine+ " line:")
        text+="You must travel through the following stops on the " + departureLine+ " line:";

        while(map[departureLine][i]!=intersection){
            if(map[departureLine].indexOf(intersection)>i){
                i++;
            } else{
                i--;
            }
            path.push(map[departureLine][i]);
        }
        i=map[arrivalLine].indexOf(intersection);
        console.log(path.join(', ')+ ".");
        console.log("Change at Union Square.");
        text+=path.join(', ')+ ".";
        text+=" Change at Union Square.";
    }
    while(i!=destinationIndex){
        if(destinationIndex>i){
            i++;
        } else{
            i--;
        }
        path2.push(map[arrivalLine][i]);
    }
    console.log("Your trip will include the following stops on the " +arrivalLine +" line: " + path2.join(', ')+ ".");
    console.log(path.length+path2.length+" stops in total.");
    text+=" Your trip will include the following stops on the " +arrivalLine +" line: " + path2.join(', ')+ ".";
    text+=path.length+path2.length+' stops in total.';
    return text;
}
//Test values S=6
// planTrip("N", "Times Square", "S", "33rd");
// planTrip("N", "Times Square", "N", "28th");
// planTrip("S", "Astor Place", "L", "8th");

