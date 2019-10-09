let Mta = {
  N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  L: ["8th", "6th", "Union Square", "3rd", "1st"],
  "6": ["Grand Central", "33rd", " 28th", "23rd", "Union Square", "Astor Place"]
}

function planTrip(stop1, Line1, stop2, Line2){

  let line1 = Mta[Line1]
  let line2 = Mta[Line2]
  let trip1, trip2 = ""
  let stops = 0

  function oneLine(starting, end, line){
      let trip= ''
      let pos = line.indexOf(starting)
  
  if(line.indexOf(starting) < line.indexOf(end)){

      stops +=  line.indexOf(end) - line.indexOf(starting) 
      for(var i = pos+1; i <=line.indexOf(end); i++ ){
          if(i == line.indexOf(end)){
              trip += line[i] + '.'  
          }else{
          
          trip += line[i] + ', '
          }
      }
  }
  else if(line.indexOf(starting) >line.indexOf(end)){
      stops += line.indexOf(starting) - line.indexOf(end)
      for(var i = pos-1; i > line.indexOf(end); i-- ){
          if(i == line.indexOf(end)+1){
              trip += line[i] + '.'  
          }else{
          
          trip += line[i] + ', '
          }
      }
  }
  return trip 
  }
  
  if(line1 == line2){
      trip1 = oneLine(stop1, stop2, line2)
      console.log("You must travel through the following stops on the " +Line1+ " line: "+ trip1)
      console.log(stops+ " stops in total.")

  }
  else if(line1 != line2){
      trip1 = oneLine(stop1, 'Union Square', line1)

      trip2 = oneLine('Union Square', stop2, line2)

      console.log("You must travel through the following stops on the " + Line1 + " line: " + trip1)
      console.log('Change at Union Square.')
      console.log('Your journey continues through the following stops:' + trip2)
      console.log(stops + " stops in total.");
  }
}
console.log(planTrip("6th"  ,'L', '3rd', 'L'));
console.log("---------------------------------")
console.log(planTrip( "Times Square",'N',"33rd", '6'))