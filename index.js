let Mta = {
  N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  L: ["8th", "6th", "Union Square", "3rd", "1st"],
  "6": ["Grand Central", "33rd", " 28th", "23rd", "Union Square", "Astor Place"]


}

function Plantrip(Line1, Stop1, Line2, Stop2) {

  let stops = 0;
  let journy1, journy2 = "";
  let line = Mta[Line1]
  let line2 = Mta[Line2]


  function oneLine(start, end, Line) {

      var trip = ""
      if (Line.indexOf(start) < Line.indexOf(end)) {

          stops += Line.indexOf(end) - Line.indexOf(start)
          for (let index = Line.indexOf(start); index <= Line.indexOf(end); index++) {
              trip += Line[index] + " , "



          }
      }
      else{
          stops += Line.indexOf(start) - Line.indexOf(end)
          for (let index = Line.indexOf(start); index >= Line.indexOf(end); index--) {

              trip += Line[index] + " , "



          }

      }

return trip
  }

  if( Line1 == Line2){

      journy1 = oneLine( Stop1, Stop2, line)
      console.log(journy1)
  }
  else {
      journy1 = oneLine (Stop1, "Union Square", line)
      journy2 = oneLine ("Union Square", Stop2, line2)
      console.log("You must travel through the following stops on the " + Line1 + " line: " + journy1)
      console.log('Change at Union Square.')
      console.log('Your journey continues through the following stops:' + journy2)
      console.log(stops + " stops in total.");

  }
}
Plantrip("N", "Times Square", '6', '33rd')