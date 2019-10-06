const LINES = {
    L: ["8th", "6th", "UnionSquare", "3rd", "1st"],
    SIXTH: ["GrandCentral", "33rd", "28th_SIXTH_LINE", "23rd_SIXTH_LINE", "UnionSquare", "AstorPlace"],
    N: ["TimesSquare", "34th", "28th_N_LINE", "23rd_N_LINE", "UnionSquare", "8th"]
}
function planTrip(currentLine, currentStop, destinationLine, destinationStop) {
    let line = LINES[currentLine];// returns the chosen line values
    let destLine = LINES[destinationLine];// returns the chosen line values
    let destIndex = LINES[currentLine].indexOf(destinationStop);// index of destination if same line
    let stopIndex = LINES[currentLine].indexOf(currentStop);// index of current stop if same line
    let changeLineMsg = "Change at Union Square."
    let msg = "You must travel through the following stops on the " + currentLine + " Line : ";
    let msg2 = "You must travel through the following stops on the " + destinationLine + " Line : ";
    let path = ""
    let stopsMsg = " Stops in Total";
    let stopCounter = 0;

    function findPath(dest_index, stop_index, line) {
        // let stops = Math.abs(dest_index - stop_index);
        let stopsMsg = " Stops in Total";
        if (dest_index > stop_index) {// going forward
            for (let i = stop_index + 1; i <= dest_index; i++) {
                if (i != dest_index) {
                    path = line[i] + " , ";
                }
                else {
                    path = line[i] + ". ";
                }
    
                msg += path
                msg += path
                stopCounter++
            }
        }
        else if (stop_index > dest_index) {// going backwards
            for (let i = stop_index - 1; i >= dest_index; i--) {
                if (i != dest_index) {
                    path = line[i] + " , ";
                }
                else {
                    path = line[i] + ". ";
                }
    
                msg += path
                msg2 +=path
                stopCounter++
            }
        }
    }
    if (destinationLine == currentLine) {
    findPath(destIndex, stopIndex, line);
    console.log(msg);
    console.log(stopCounter + stopsMsg);
    }
    else {   
    findPath(LINES[currentLine].indexOf("UnionSquare"), stopIndex, line);
    console.log(msg);
    console.log(changeLineMsg)
    findPath(LINES[destinationLine].indexOf(destinationStop), LINES[destinationLine].indexOf("UnionSquare"), destLine);
    console.log(msg2);
    console.log(stopCounter + stopsMsg);
}
}

// planTrip("L", "8th", "L", "1st");
// planTrip("L", "1st", "L", "8th");
// planTrip("N", "TimesSquare","SIXTH", "33rd");
planTrip("L", "8th","SIXTH", "33rd");

