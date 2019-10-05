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
    if(departureLine!=arrivalLine){
        console.log("You must travel through the following stops on the " + departureLine+ " line:")
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


}

planTrip("N", "Times Square", "Sixth", "33rd");
planTrip("N", "Times Square", "N", "28th");
planTrip("Sixth", "Astor Place", "L", "8th");


