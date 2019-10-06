var Lines = {
    'N': ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    'L': ["8th", "6th", "Union Square", "3rd", "1st"],
    '6': ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
    }
    
    function planTrip(path1, location, desPath, des) {
    let line1 = [] 
    let line2 = 0 
    
    let start = Lines[path1].indexOf(location) 
    let stop = 0 
    
    if (desPath == path1) {
    stop = Lines[path1].indexOf(des)
    }
    else {
    stop = Lines[path1].indexOf("Union Square")
    }
    
    while (location != des || desPath != path1) {
    
    line1.push(path1) 
    
    if (start > stop) {
    for (let i = start - 1; i >= stop; i--) {
    line1.push(Lines[path1][i])
    location = Lines[path1][i]
    line2++
    }
    }
    else {
    for (let i = start + 1; i <= stop; i++) {
    line1.push(Lines[path1][i])
    location = Lines[path1][i]
    line2++
    }
    }
    
    if (location == "Union Square") {
    if (path1 == desPath) {
    stop = Lines[path1].indexOf(des)
    start = Lines[path1].indexOf("Union Square")
    } 
    else {
    line1.push("Change at Union Square.")
    path1 = desPath
    stop = Lines[path1].indexOf(des)
    start = Lines[path1].indexOf("Union Square")
    }
    
    location = Lines[path1][start]
    
    }
    }
    if (line1.includes("Change at Union Square.")) {
    changeTheLine = line1.indexOf("Change at Union Square.")
    let firstPath = " "
    let secondPath = " "
    for (let i = 1; i < changeTheLine - 1; i++) {
    firstPath = firstPath + line1[i] + ", "
    }
    firstPath = firstPath + line1[changeTheLine - 1] + "."
    for (let i = changeTheLine + 2; i < line1.length - 1; i++) {
    secondPath = secondPath + line1[i] + ", "
    }
    secondPath = secondPath + line1[line1.length - 1] + "."
    console.log("You must travel through the following stops on the " + line1[0] + " line:" + firstPath)
    console.log(line1[changeTheLine])
    console.log("Your journey continues through the following stops:" + secondPath)
    console.log(line2 + " stops in total")
    
    } 
    else {
    let line = " "
    for (let i = 1; i < line1.length - 1; i++) {
    if (line1[i] == line1[0]) {
    continue
    }
    line = line + line1[i] + ", "
    }
    line = line + line1[line1.length - 1] + "."
    console.log("You must travel through the following stops on the " + line1[0] + " line:" + line)
    console.log(line2 + " stops in total")
    }
    }
    
    
    planTrip("N", "Times Square", "6", "33rd")