/* make an array for every line totaling in three 
check the indexof the two stops and if they are in the same line 
make the middle ovias 
make a loop with if statments  that stops at the middle 
and then take the next array and search for the distnation and print the path 
then check where it is giong and prints all the stops and how it works 
then make something that takes you to a stop that does not pass through the middle

*/
// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."


/**
There are 3 subway lines:
The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
 */

 var n = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']
 var l = ['8th', '6th', 'Union Square', '3rd', '1st']
 var six = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
var lines = {
    N : n,
    L : l,
    '6': six
}
let steps = 0;
function planTrip(posLine, pos, disLine, dis){
    let reply
    let move = 0
    let mes = ''
    let location = lines[posLine].indexOf(pos)
    let goingTo = lines[disLine].indexOf(dis)
    if(posLine == disLine){
        mes = 'You must travel through the following stops on the '+ posLine +' line: '
        reply = inLine(location, goingTo, posLine)
        mes += reply[0]
        	
        mes = mes.substr(0, mes.length-1);
        mes = mes.substr(0, mes.length-1);
        mes += '.'
        console.log(mes)
        move += reply[1]
        console.log(move + ' stops in total.')

        
    }else{
       
       //diffrent lines 
        mes = 'You must travel through the following stops on the '+ posLine +' line: '
        reply = inLine(location, lines[posLine].indexOf('Union Square'), posLine)
        mes += reply[0]
        move += reply[1]
        mes = mes.substr(0, mes.length-1);
        mes = mes.substr(0, mes.length-1);
        mes += '.'
        console.log(mes)
        console.log("Change at Union Square.")
        mes = "Your journey continues through the following stops: "
        reply = inLine(lines[disLine].indexOf('Union Square'),goingTo , disLine)
        mes += reply[0]
        move += reply[1]
        mes = mes.substr(0, mes.length-1);
        mes = mes.substr(0, mes.length-1);
        mes += '.'
        console.log(mes)
        console.log(move + ' stops in total.')

    }

    function inLine(pos, dis, line){
        let ans = ''
        let count = 0   
            // console.log(steps);
            if (dis > pos){
                //go up 
                for(var i = pos +1; i<= dis; i++){
                    ans += lines[line][i] + ', '
                    count += 1
    
                }
            }else if (dis < pos){
                //count down 
                // console.log(location);
                // console.log(goingTo);
    
                for(var i = pos-1; i >= dis; i--){
                    
                    ans += lines[line][i] + ', '
                    count += 1
                }
            }
            return [ans, count]
    }
     
   
}


planTrip("N", "Times Square", "6", "33rd");