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
    let destIndex2 = LINES[destinationLine].indexOf(destinationStop);// index of destination different lines
    let stopIndex2 = LINES[destinationLine].indexOf(currentStop);// index of current stop different lines
    let changeLineMsg = "Change at Union Square."
    let msg = "You must travel through the following stops on the " + currentLine + " Line : ";
    let msg2 = "You must travel through the following stops on the " + destinationLine + " Line : ";
    let path = ""
    let stopsMsg = " Stops in Total";
    let stopCounter = 0;
    if (destinationLine == currentLine) {

        findPath(destIndex, stopIndex, line, msg);

    }
    else {
        for (let i = stopIndex + 1; i < line[i].length; i++) {

            if (line[i] == "UnionSquare") {
                break;
            }

            path = line[i] + " , ";
            msg += path
            stopCounter++;
        }
        console.log(msg)
        console.log(changeLineMsg);

    }

    if (destIndex2 > stopIndex2) {// going forward
        for (let i = stopIndex2 + 1; i <= destIndex2; i++) {
            if (i != destIndex2) {
                path = destLine[i] + " , ";
            }
            else {
                path = destLine[i] + ". ";
            }

            msg2 += path
            stopCounter++;
        }

    }
    else if (stopIndex2 > destIndex2) {// going backwards
        for (let i = stopIndex2 - 1; i >= destIndex2; i--) {
            if (i != destIndex2) {
                path = destLine[i] + " , ";
            }
            else {
                path = destLine[i] + ". ";
            }

            msg2 += path
            stopCounter++;

        }

    }

    console.log(msg2);
    console.log(stopCounter + stopsMsg);


}

function findPath(dest_index, stop_index, line, msg) {
    let stops = Math.abs(dest_index - stop_index);
    let path = "";
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
        }

    }
}

// planTrip("L", "8th", "L", "1st");
// planTrip("N", "TimesSquare","SIXTH", "33rd");
planTrip("L", "8th","SIXTH", "33rd");

