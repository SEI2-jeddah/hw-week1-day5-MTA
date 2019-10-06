const stations = {
    lineN: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"], 
    lineL: ["8th", "6th", "Union Square", "3rd", "1st"],
    line6:["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
    
    planTrip: function(firstLine, tripFrom, secodeLine, tripTo){
        var FirstPlan = ""
        var secondPlan = ""
        var formLine = "line"+firstLine
        var toLine = "line"+secodeLine
        var stopsCounter = 0

        if(this[formLine].includes(tripFrom)){
            if(this[formLine].includes(tripTo)){
                for(var i = this[formLine].indexOf(tripFrom)+1 ; i < this[formLine].indexOf(tripTo) ; i++){
                    FirstPlan += this[formLine][i] + ", "
                    stopsCounter++
                }
            }else{
                for(var i = this[formLine].indexOf(tripFrom)+1 ; i < this[formLine].indexOf("Union Square")+1 ; i++){
                    FirstPlan += this[formLine][i] + ", "
                    stopsCounter++
                    if (this[formLine][i] === "Union Square"){
                        FirstPlan += "\nChange at Union Square."
                    }
                }
            }   
        }

        if(this[toLine].includes("Union Square")){
            if(this[toLine].indexOf(tripTo) > this[toLine].indexOf("Union Square") ){
                for(var j = this[toLine].indexOf("Union Square")+1 ; j < this[toLine].length; j++){
                    secondPlan += this[toLine][j] + ", "
                    stopsCounter++
                }
            }else{
                for(var j = this[toLine].indexOf("Union Square")-1 ; j > this[toLine].indexOf(tripTo)-1 ; j--){
                    secondPlan += this[toLine][j] + ", "
                    stopsCounter++
                }
            }
        }   
        
        return console.log("You must travel through the following stops on the Line "+firstLine+": "+FirstPlan
        +"\nYour journey continues through the following stops on the Line "+secodeLine+": "+ secondPlan+ "\n"+
        stopsCounter+ " stops in total. \n==========")  
    }
}
stations.planTrip("6", "23rd", "6", "Astor Place")
stations.planTrip("L", "8th", "6", "33rd")
stations.planTrip("N", "Times Square", "6", "33rd")
stations.planTrip("N", "Times Square", "N", "23rd")