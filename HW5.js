
 /*There are 3 subway lines:
The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.*/  
   
   
   let nline=['Time square','34th', '28th',' 23rd', 'Union Square',' 8th']
   let lline =['8th', '6th', 'Union Square', '3rd','1st']
   let thesixline=['Grand Central', '33rd', '28th','23rd', 'Union Square', ' Astor Place.']
   
   
   function MTA (sp,ss,ep,es){
   
       let thestep =0
       let fPoint
       let unionPoint
       let nPoint
       let nextP
       let unp
      
   
       console.log("Welcome u r in  "+ss+' '+"Station ")
   
   if (sp == ep) {
       
       nextP = sp.indexOf(ss)
       nPoint = sp.indexOf(es)
      thesameline(nextP, nPoint)
   
   }
   
        if (sp!=ep){
       fPoint = sp.indexOf(ss)
       unionPoint =sp.indexOf("(Union Square)")
       thesameline(fPoint,unionPoint,sp)
       unp = ep.indexOf("Union Square")
       console.log("U have to change in (Union Square)")
       nPoint = ep.indexOf(es)
       thesameline(unp,nPoint,ep)
       }
   
   function thesameline(nextP, nPoint,L) {
       for (i = 0; i <= L.indexOf('Union Square'); i++) {
           if (nextP> nPoint) {
               console.log("U have to move to " + L [nextP--])
               nextP = L.indexOf(L [nextP--] )
               thestep++
           }
             if (nextP < nPoint) {
               console.log("U have to move to " + L[nextP++])
               nextP = L.indexOf(L[nextP++])
               thestep++
           }
         else if(nextP == nPoint) {
         
               console.log("U are in " + L[nextP])
   
             
           }}}
   
  

     console.log("total steps is " + thestep)
}
 
   console.log("The total of ur steps count is " + MTA(nline, "Times Square", thesixline, "33rd"))