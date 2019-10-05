
var lines = ["N", "L", "6"];
var lineN = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th "]
var lineL = ["8th", "6th", "Union Square", "3rd", "1st"]
var line6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]

//////////////
var depRange = []
var arrRange = []
var totalRange = []
var depstops = 0
function planTrip(startLine, depatureFrom, arraivalTo, endLine) {
    if (startLine !== endLine) {
        if (startLine.indexOf("Union Square") > startLine.indexOf(depatureFrom)) { // Done
            for (var i = startLine.indexOf(depatureFrom), j = startLine.indexOf("Union Square"); i < j; i++) {
                depRange.push(startLine[i]);
                console.log(depRange);

            }
        }
        else if (endLine.indexOf("Union Square") > endLine.indexOf(arraivalTo)) {
            for (var i = endLine.indexOf("Union Square"), j = endLine.indexOf(arraivalTo); i < j; i--) {
                depRange.push(endLine[i]);
            }
        }


        if (arraivalTo.includes("3rd") || arraivalTo.includes("1st") || arraivalTo.includes("8th ") || arraivalTo.includes("Astor Place")) {

            for (var i = endLine.indexOf("Union Square"), j = endLine.indexOf(arraivalTo); i <= j && i <= endLine.indexOf(arraivalTo); i++) {
                arrRange.push(endLine[i]);
            }

        }
        else {
            for (var i = endLine.indexOf("Union Square"), j = endLine.indexOf(arraivalTo) - 1; i < j; i--) {
                arrRange.push(endLine[i]);

            }

        }
        depRange.pop("Union Square");

        depRange.shift();
        totalRange = depRange.concat(arrRange);

        console.log("Change at Union Square.");
        console.log("Your journey continues through the following stops: " + arrRange);
        console.log(depStops = totalRange.length);
        
        
        
        // "Your journey continues through the following stops: 23rd, 28th, 33rd."
        // "7 stops in total."


    }
    else if (startLine === endLine) {
        if (endLine.indexOf(arraivalTo) > startLine.indexOf(depatureFrom)) { // Done
            for (var i = startLine.indexOf(depatureFrom), j = startLine.length; i < j && i <= endLine.indexOf(arraivalTo); i++) {
                totalRange.push(startLine[i]);
            }
            totalRange.shift();

        }
        else if (endLine.indexOf(arraivalTo) < startLine.indexOf(depatureFrom)) { // Done
            for (var i = startLine.indexOf(depatureFrom), j = endLine.indexOf(arraivalTo) - 1; i > + j; i--) {
                totalRange.push(startLine[i]);
            }

            totalRange.shift();


        }
        
        console.log("You must travel through the following stops on the " + totalRange);
        console.log(totalRange.length  + " stops in total.");
        

    }




    // console.log(lines[0]);


    // "Change at Union Square."
    // "Your journey continues through the following stops: 23rd, 28th, 33rd."
    // "7 stops in total."

} planTrip(lineN, "34th", "8th ", lineN)
