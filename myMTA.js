// I am going on a trip using MTA 'myMTAtrip'
// I am at line 'L', Station '8th' .. And heading to Line 'N' Station '34th'
var lineN = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
var lineL = ["8th", "6th", "Union Square", "3rd", "1st"];
var line6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]

//I am going to start my trip from "L" .. station "8th"
let start = "8th";
//And end my trip at "N" station "34th"
let end = "34th";

planTrip("lineL", start, "lineN", end);
   function planTrip(startLine, start, endLine, end)
   { 
     let firstLine; 
     let secondLine;
     if(startLine == "lineN")
        firstLine = lineN
      else if(startLine == "lineL")
       firstLine = lineL
      else if(startLine == "line6")
      firstLine = line6

      if(endLine == "lineN")
        secondLine = lineN 
      else if(endLine == "lineL")
      secondLine = lineL
      else if(endLine =="line6")
      secondLine = line6

     let numberOfStops = 0; //numberOfStops
     let num1 = firstLine.indexOf(start)
     let num2 = firstLine.indexOf("Union Square")
     let num3 = secondLine.indexOf(end)
     let num4 = secondLine.indexOf("Union Square")
     
     numberOfStops += Math.max(num1,num2) - Math.min(num1,num2)
     numberOfStops += Math.max(num3,num4) - Math.min(num3,num4)
     let firstString = ""; //firstString
     let secondString = ""; //secondString
    if (num1 < num2)
   {
     for(let i= num1; firstLine[i] !== "Union Square"; i++)
     {
       if (firstLine[i+1] !== "Union Square")
       firstString += firstLine[i+1] + " "
   
     }}
     else 
        { 
          for(let i = num1; firstLine[i] !== "Union Square"; i--)
           { 
             if (firstLine[i-1] !== "Union Square")
               {firstString += firstLine[i-1]
               console.log(firstString)}
               }}

     if (num3 > num4)
   {
     for(let i = num4; i < num3; i++)
     {
      
        secondString += line2[i+1] + " "
         }
       
   }
    else {
            for(let i=num4; secondLine[i] !== secondLine[num3]; i--)
              if(secondLine[i] !== "Union Square")
               secondString += secondLine[i] + " "
               secondString += secondLine[num3] 

        }

  //output of the trip
     console.log("You must travel through the following stops on the " + startLine + " " + "line: " + " " + firstString + " " + "Union Square")

     console.log("Change at Union Square.")

     console.log("Your journey continues through the following stops: " + secondString)

     console.log(numberOfStops + " " + "stops in total.")
   }