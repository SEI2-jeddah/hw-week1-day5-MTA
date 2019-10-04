const LINES = {
    L: ["8th", "6th", "UnionSquare", "3rd", "1st"],
    SIXTH: ["GrandCentral", "33rd", "28th_SIXTH_LINE", "23rd_SIXTH_LINE", "UnionSquare", "AstorPlace"],
    N: ["TimesSquare", "34th", "28th_N_LINE", "23rd_N_LINE", "UnionSquare", "8th"]
}
function sameLine(currentLine, currentStop, destinationLine, destinationStop) {
    const LINE = LINES[currentLine];// returns the chosen line values
    const DEST_INDEX = LINES[currentLine].indexOf(destinationStop);// index of destination
    const STOP_INDEX = LINES[currentLine].indexOf(currentStop);// index of current stop
    let changeLineMsg = "Change at Union Square."
    let stops = Math.abs(DEST_INDEX - STOP_INDEX);
    let path = "";
    let msg = "You must travel through the following stops on the " + currentLine + " Line : ";
    let stopsMsg = " Stops in Total"
    if (DEST_INDEX > STOP_INDEX) {// going forward
        for (let i = STOP_INDEX + 1; i <= DEST_INDEX; i++) {

            if (i != DEST_INDEX) {
                path = LINE[i] + " , ";
            }
            else {
                path = LINE[i] + ". ";
            }

            msg += path
        }
    }
    else if (STOP_INDEX > DEST_INDEX) {// going backwards
        for (let i = STOP_INDEX - 1; i >= DEST_INDEX; i--) {
            if (i != DEST_INDEX) {
                path = LINE[i] + " , ";
            }
            else {
                path = LINE[i] + ". ";
            }

            msg += path
        }

    }
    console.log(msg);
    console.log(stops + stopsMsg);
    }
    

sameLine("L", "8th","", "1st");
sameLine("L", "1st","", "8th");