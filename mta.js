let line = {

    n: ["timeSqaure", "39th", "28th", "23rd", "Union Square", "8th"],
    l: ["8th", "6th", 'Union Square', '3rd', '1st'],
    six: ['33rd', '28th', '23th', 'Union Square', 'ap']

}

function mta(startL, startP, destL, destP) {
    let res = []
    let fount
    let stepCount = 0

    if (startL == destL) {
        if (line[startL].indexOf("Union Square") > line[startL].indexOf(startP)) {

            for (j = line[startL].indexOf(startP); j <= line[startL].indexOf(destP); j++) {

                if (line[startL][j] == destP) {
                    console.log(" Your at your destination on line " + startL + " " + line[startL][j])
                } else {
                    console.log(" Your position is on line " + startL + " " + line[startL][j])
                }
                ++stepCount
            }
        } else
            for (j = line[startL].indexOf(startP); j >= line[startL].indexOf(destP); j--) {
                console.log(line[startL][j])
                ++stepCount
            }

    } else {
        let arr1 = line[destL].splice(0, line[destL].indexOf("Union Square"))
        let arr2 = line[startL].splice(0, line[startL].indexOf("Union Square"))
        arr1.push("Union Square")
        arr2.push("Union Square")

        if (line[startL].includes(startP)) {

            for (i = line[startL].length - 1; i >= 0; i--) {

                console.log("Your position is on line " + startL + " at " + line[startL][i])
                ++stepCount

            }


        } else if (arr2.includes(startP)) {

            for (i = 0; i < arr2.length; i++) {
                console.log("Your position is on line " + startL + " at " + arr2[i])
                ++stepCount


            }
        }

        if (line[destL].includes(destP)) {

            for (j = 0; j < line[destL].length; j++) {
                {
                    if ("Union Square" == line[destL][j]) {
                        console.log("Change to line " + destL + " at" + line[destL][j])
                        stepCount++
                    } else if (line[destL][j] == destP) {
                        console.log("You are at your destination on line " + destL + " at " + line[destL][j])

                    } else {
                        console.log("Your position is on line " + destL + " at " + ine[destL][j])
                        ++stepCount
                    }
                }


            }

        } else if (arr1.includes(destP)) {
            for (i = arr1.length - 1; i >= 0 && i >= arr1.indexOf(destP); i--) {

                if ("Union Square" == arr1[i]) {
                    console.log("Change to line " + destL + " at " + arr1[i])
                    ++stepCount
                }
                else if (arr1[i] == destP) {
                    console.log("You are at your destination on line " + destL + " at " + arr1[i])

                } else {
                    console.log("Your position is on line " + destL + " at " + arr1[i])
                    ++stepCount
                }


            }
        }

    }

    return stepCount
}


console.log("your total steps count is " + mta("l", "8th", 'n', "39th"))

