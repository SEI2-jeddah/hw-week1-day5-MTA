// # MTA Lab

// ## Objectives:

// - Apply your knowledge of JavaScript to solve a real world problem.
// - Get really good at array manipulation.

// ### Activity

// - Create a program that models a simple subway system.



var n = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']
  var l = ['8th', '6th', 'Union Square', '3rd', '1st']
   var sixth = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']

    var allLines = {
       N : n,
        L : l,
        '6': sixth
       }
let steps = 0;
function planTrip(startinLine, start, distnationLine, distnation){
   let retry
    let way = 0
     let path = ''
      let location = allLines[startinLine].indexOf(start)
       let route = allLines[distnationLine].indexOf(distnation)
   
   if(startinLine == distnationLine){
       path = 'You must travel through the following stops on the '+ startinLine +' line: '
       retry = lineNum(location, route, startinLine)
       path += retry[0]

       path = path.substr(0, path.length-1);
       path = path.substr(0, path.length-1);
       path += '.'
       console.log(path)
       way += retry[1]
       console.log(way + ' stops in total.')


   }else{

      
       path = 'You must travel through the following stops on the '+ startinLine +' line: '
       retry = lineNum(location, allLines[startinLine].indexOf('Union Square'), startinLine)

       path += retry[0]
       way += retry[1]
       path = path.substr(0, path.length-1);
       path = path.substr(0, path.length-1);
       path += '.'
       console.log(path)
       console.log("Change at Union Square.")
       path = "Your journey continues through the following stops: "
       retry = lineNum(allLines[distnationLine].indexOf('Union Square'),route , distnationLine)
       path += retry[0]
       way += retry[1]
       path = path.substr(0, path.length-1);
       path = path.substr(0, path.length-1);
       path += '.'
       console.log(path)
       console.log(way + ' stops in total.')

   }

 function lineNum(start, distnation, path){
       let ans = ''
         let count = 0   
       
  if (distnation > start){
              
  for(var i = start +1; i<= distnation; i++){
    ans += allLines[path][i] + ', '
        count += 1

               }
  }else if (distnation < start){

   for(var i = start-1; i >= distnation; i--){
        ans += allLines[path][i] + ', '
          count += 1
               }
   }
 return [ans, count]
   }
}
planTrip("N", "Times Square", "6", "33rd");

