let Mta = {
    N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    L: ["8th", "6th", "Union Square", "3rd", "1st"],
    "6": ["Grand Central", "33rd", " 28th", "23rd", "Union Square", "Astor Place"]
}
function planride(firstStop, firstLine, scndStop, scndLine){
    let firstLine = Mta[firstLine]
    let scndLine = Mta[scndLine]
    let firstRide, ride2 = ""
    let stops = 0
    function oneLine(start, end, line){
        let ride= ''
        let pos = line.indexOf(start)
    if (line.indexOf(start) < line.indexOf(end)){
        stops +=  line.indexOf(end) - line.indexOf(start)
        for(var i = pos+1; i <=line.indexOf(end); i++ ){
            if(i == line.indexOf(end)){
                ride += line[i] + '.'
            }else{

            ride += line[i] + ', '
            }
        }
    }
    else if(line.indexOf(start) >line.indexOf(end)){
        stops += line.indexOf(start) - line.indexOf(end)
        for(var i = pos-1; i > line.indexOf(end); i-- ){
            if(i == line.indexOf(end)+1){
                ride += line[i] + '.'
            }else{

            ride += line[i] + ', '

            }
        }

    }
    return ride
    }
    if(firstLine == scndLine){
        firstRide = oneLine(firstStop, scndStop, scndLine)
        console.log(firstRide)
        console.log('ride')

    }else if(firstLine != scndLine){
        firstRide = oneLine(firstStop, 'Union Square', firstLine)

        ride2 = oneLine('Union Square', scndStop, scndLine)

        console.log("You must travel through the following stops on the " + firstLine + " line: " + firstRide)
        console.log('Change at Union Square.')
        console.log('Your journey continues through the following stops:' + ride2)
        console.log(stops + " stops in total.");
    } else{
        console.log('you are there :P ')
    }
}
planride("Times Square"  ,'N', '33rd', '6')
