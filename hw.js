var n = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
var l = ["8th", "6th", "Union Square", "3rd", "1st"]
var six = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
function planTrip(startPosion, startStaion, endPosion, endStaion) {
    var steps = 0
    //var newStartP = startPosion.splice( startPosion,unPoint )
    console.log("You are in " + startStaion)
    if (startPosion != endPosion) {
        let firstPoint = startPosion.indexOf(startStaion)
    let unPoint = startPosion.indexOf("Union Square")
        sameline(firstPoint,unPoint,startPosion)
    let unNextPoint = endPosion.indexOf("Union Square")
        console.log("you must change in Union Square")
        let newpoint = endPosion.indexOf(endStaion)
        sameline(unNextPoint,newpoint,endPosion)
        
    }
    if (startPosion == endPosion) {
        {
            let nextPoint = startPosion.indexOf(startStaion)
            let newpoint = startPosion.indexOf(endStaion)
            sameline(nextPoint, newpoint)
        }
    }
    function sameline(nextPoint, newpoint,line) {
        for (i = 0; i <= line.indexOf('Union Square'); i++) {
            if (nextPoint > newpoint) {
                console.log("You should move to " + line[nextPoint--])
                nextPoint = line.indexOf(line[nextPoint--])
                steps++
            }
            if (nextPoint < newpoint) {
                console.log("You should move to " + line[nextPoint++])
                nextPoint = line.indexOf(line[nextPoint++])
                steps++
            }
            if (nextPoint == newpoint) {
                console.log("You are in " + line[nextPoint])
                break;
            }
        }
    }
    console.log("total steps is " + steps)
}
planTrip(six, "Astor Place", n, "34th") 

