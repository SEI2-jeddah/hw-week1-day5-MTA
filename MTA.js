let N=["TimesQuer","34th","28th","23rd","Union Square","8th"];
let Six = ["Grand Central","33rd","28th","23rd","Union Square","Astor Place"]
let L=["8th","6th","Union Square","3rd","1st"];
let start="33rd";
let end = "8th";
planTrip("Six",start,"N",end);
   function planTrip(line11,start,line22,end)
   {
  //******************************************** */ to convert the line name from string to an array
     let line1;
     let line2;
     if(line11== "N")
        line1= N
      else if(line11=="L")
       line1= L
      else if(line11=="Six")
      line1= Six
      //**************** */
      if(line22=="N")
        line2= N
      else if(line22=="L")
      line2= L
      else if(line22=="Six")
      line2= Six
      //***************** */


     let numOfstop=0;
     let num1=line1.indexOf(start) //index of start point
     let num2=line1.indexOf("Union Square") //index of UnionSquer
     let num3=line2.indexOf(end)//index of end point
     let num4=line2.indexOf("Union Square") //index of UnionSquer
     
     numOfstop+=Math.max(num1,num2) - Math.min(num1,num2) // to find the stops between start point and UnionSquer
     numOfstop+=Math.max(num3,num4) - Math.min(num3,num4) // to find the stops between start point and UnionSquer
     let string1= "";
     let string2= "";
     //**************************************************************** */
    if (num1<num2)  //to check the start point befor or after the UnioSquer 
   {
     for(let i=num1;line1[i]!== "Union Square";i++ )
     {
       if (line1[i+1]!== "Union Square")
       string1+= line1[i+1] + " "
   
     }}
     else 
        { 
          for(let i=num1;line1[i]!=="Union Square";i--)
           { 
             if (line1[i-1]!== "Union Square")
               {string1+= line1[i-1]
               console.log(string1)}
               }}
      
   //*********************************************** */

     if (num3>num4)   //to check the end point befor or after the UnioSquer
   {
     for(let i=num4;i< num3;i++ )
     {
      
        string2+=line2[i+1] + " "
         }
       
   }
    else 
        {for(let i=num4;line2[i]!==line2[num3];i-- )
              if(line2[i]!== "Union Square")
               string2 += line2[i] + " "
               string2 += line2[num3] 

        }
    
     //***************************************************** */
     console.log("You must travel through the following stops on the " + line11 +" "+ "line:" +" "+ string1+ " "  + "Union Square")
     console.log("Change at Union Square.")
     console.log("our journey continues through the following stops:" + string2)

    
     console.log(numOfstop + " "+ "stops in total.")
    
   }//end of function