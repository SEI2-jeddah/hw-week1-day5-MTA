let lineN = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
let line6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
let lineL = ["8th", "6th", "Union Square", "3rd", "1st"]


function planTrip(currentLine, currentStop, distnationLine, distnatioStop) {
    let distnation1 = ''
    let distnation2 = ''
    let stopsCounter = 0
    let message = ''

    let line = lineName(currentLine)
    let currentIndex = line.indexOf(currentStop)
    for (var i = currentIndex + 1; i < line.length; i++) { // loop 1 in line 1
        if (line[i] == distnatioStop) {
            stopsCounter++
            distnation1 += line[i] + " "
            break
        } else if (line[i] != "Union Square") {
            stopsCounter++
            distnation1 += line[i] + ", "
        } else {
            stopsCounter++
            distnation1 += line[i] + ", "
            if (currentLine != distnationLine) {
                line = lineName(distnationLine)
                let distnationIndex = line.indexOf("Union Square")
                // stopsCounter++
                for (var j = distnationIndex - 1; j >= 0; j--) {
                    if (line[j] == distnatioStop) {
                        stopsCounter++
                        distnation2 += line[j] + " "
                        message = returnMessage(currentLine,distnation1,distnation2,stopsCounter, true)
                    } else {
                        stopsCounter++
                        distnation2 += line[j] + ", "
                    }
                }

            } else {
                stopsCounter++
                distnation1 += line[++i] + ", "
                message = returnMessage(currentLine,distnation1,"",stopsCounter, false)
            }
        }
    }
    return message
}
function returnMessage(currentLine,distnation1,distnation2,stopsCounter,bool) {
    if (bool) {
        message = "You must travel through the following stops on the " + currentLine + " line: " + distnation1
        message += "\nChange at Union Square.\nYour journey continues through the following stops: " + distnation2 + "\n"
        message += stopsCounter + " stops in total."
    } else {
        message = "You must travel through the following stops on the " + currentLine + " line: " + distnation1 + "\n"
        message += stopsCounter + " stops in total."
    }
    return message
}

function lineName(currentLine) {
    if (currentLine == "N") {
        return lineN
    } else if (currentLine == "L") {
        return lineL
    } else if (currentLine == "6") {
        return line6
    }
}
// .. works
console.log(planTrip("N", "34th", "N", "8th"))
console.log("---\n");
console.log(planTrip("L", "8th", "L", "3rd"))
console.log("---\n");
console.log(planTrip("N", "Times Square", "6", "33rd") )
console.log("---\n");
console.log(planTrip("N", "34th", "L", "6th"))




