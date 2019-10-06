


var n = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]

function trip(location , distination) {
    
    let curLocation = n.indexOf(location);
    let curDistination = n.indexOf(distination);
    let stops = 0;
    let station = ""
    

    for(i = 0 ; i < n.length ; i++ ){
        

        if (i < curDistination) {
            stops = i + 1
             station += n[i] + " Station, "
             

            
        }


    }

console.log("you will go from " + location + " to " + distination);
console.log("your hops will be " + station);
console.log("you will have to stop (" + stops + ") times");





}

trip("Times Square" , "8th")