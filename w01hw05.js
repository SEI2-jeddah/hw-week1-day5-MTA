var mTAPaths = {
    'N': ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    'L': ["8th", "6th", "Union Square", "3rd", "1st"],
    '6': ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

function planTrip(currPath, currLocation, destinationPath, destination) {
    let hops = [] // to store the hops
    let hopsCounter = 0 // to count the hops

    let currIndex = mTAPaths[currPath].indexOf(currLocation) //stores current location index
    let stopsIndex = 0 //stores the destination or intersection point

    //in case the destination path is the same as the current path and the destination is before the intersection point
    if (destinationPath == currPath) {
        stopsIndex = mTAPaths[currPath].indexOf(destination)
    } else {
        stopsIndex = mTAPaths[currPath].indexOf("Union Square")
    }

    //start of the while loop to iterate through the trip
    while (currLocation != destination || destinationPath != currPath) {

        hops.push(currPath) // stores the current path (for printing)

        //checks if the the metro is heading to the front or the back to the union square
        //the iterates through the path array and stores the hops in the hops array
        if (currIndex > stopsIndex) {
            for (let i = currIndex - 1; i >= stopsIndex; i--) {
                hops.push(mTAPaths[currPath][i])
                currLocation = mTAPaths[currPath][i]
                hopsCounter++
            }
        } else {
            for (let i = currIndex + 1; i <= stopsIndex; i++) {
                hops.push(mTAPaths[currPath][i])
                currLocation = mTAPaths[currPath][i]
                hopsCounter++
            }
        }

        //check if the metro is at the union square then checks if there's a change in the path
        //then change the stop index fron the union square to the final destination
        if (currLocation == "Union Square") {
            if (currPath == destinationPath) {
                stopsIndex = mTAPaths[currPath].indexOf(destination)
                currIndex = mTAPaths[currPath].indexOf("Union Square")
            } else {
                hops.push("Change at Union Square.")
                currPath = destinationPath
                stopsIndex = mTAPaths[currPath].indexOf(destination)
                currIndex = mTAPaths[currPath].indexOf("Union Square")
            }
            //change the currLocation to be on the right path
            currLocation = mTAPaths[currPath][currIndex]

        }
    }


    //printing the trip
    if (hops.includes("Change at Union Square.")) {
        changeAtUSIndex = hops.indexOf("Change at Union Square.")
        let firstLinePath = " "
        let secondLinePath = " "
        for (let i = 1; i < changeAtUSIndex - 1; i++) {
            firstLinePath = firstLinePath + hops[i] + ", "
        }
        firstLinePath = firstLinePath + hops[changeAtUSIndex - 1] + "."
        for (let i = changeAtUSIndex + 2; i < hops.length - 1; i++) {
            secondLinePath = secondLinePath + hops[i] + ", "
        }
        secondLinePath = secondLinePath + hops[hops.length - 1] + "."
        console.log("You must travel through the following stops on the " + hops[0] + " line:" + firstLinePath)
        console.log(hops[changeAtUSIndex])
        console.log("Your journey continues through the following stops:" + secondLinePath)
        console.log(hopsCounter + " stops in total")

    } else {
        let line = " "
        for (let i = 1; i < hops.length - 1; i++) {
            if (hops[i] == hops[0]) {
                continue
            }
            line = line + hops[i] + ", "
        }
        line = line + hops[hops.length - 1] + "."
        console.log("You must travel through the following stops on the " + hops[0] + " line:" + line)
        console.log(hopsCounter + " stops in total")
    }
}// end of planTrip function


planTrip("N", "Times Square", "6", "33rd")