var Lines={
N:["Times Square","34rd","28th","23rd","Union Square","8th"],
L:["8th","6th","Union Square","3rd","1st"],
Sixth:["Grand Central","33rd","28th","23rd","Union Square","Astor Place"],
}


function planTrip(StartLine,starting,EndLine,ending){

    let i=Lines[StartLine].indexOf(starting);
    let E=Lines[EndLine].indexOf(ending);
    let way=[];
    let way1=[];
    
if(StartLine!=EndLine){
 console.log(" You must travel through the following stops on the " + StartLine+ " line:")

        while(Lines[StartLine][i]!="Union Square"){
            if(Lines[StartLine].indexOf("Union Square")>i){
                i++;
               } 
            else{
                i--;
              }
               way.push(Lines[StartLine][i]);
            } 

        i=Lines[EndLine].indexOf("Union Square");
        console.log(way.join(', ')+ ".");
        console.log("Change at Union Square.");
}
   
        while(i!=E){

           if(E>i){
            i++;
               } 
          else{
            i--;
              }
       way1.push(Lines[EndLine][i]);

        }
    
	
    console.log("\n Your trip will include the following stops on the " +EndLine +" line: " + way1.join(', ')+ ".");
    console.log(way.length+way1.length+" stops in total.");
}

planTrip('L', "8th", 'N', "34th") 

planTrip('Sixth', "33rd", 'Sixth', "Astor Place") 
