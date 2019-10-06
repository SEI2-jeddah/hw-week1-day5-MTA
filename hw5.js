var subWays =
{
nPath :["Times Square","34rd","28th","23rd","Union Square","8th"],
lPath :["8th","6th","Union Square","3rd","1st"],
sixPath :["Grand Central","33rd","28th","23rd","Union Square","Astor Place"],
}


function planTrip(currentPath,CurrentPoint,desPath,selectPoint)
{


    let i = subWays[currentPath].indexOf(CurrentPoint);
    let x =subWays[desPath].indexOf(selectPoint);
    let way=[]; 
    let way1=[];
    let urWays = []; //to join to path ( two array ) togather and return the steps
    
if(currentPath != desPath)
{
   console.log("You must travel through the following stops on the " + currentPath + " line:")
    while(subWays[currentPath][i]!="Union Square")
          {
            if(subWays[currentPath].indexOf("Union Square")>i)
                {
                    i++; //forword
                } 
            else if (subWays[currentPath].indexOf("Union Square")<i)
                {
                  i--;//backword
                }
               way.push(subWays[currentPath][i]);//first array way
          } 

        i=subWays[desPath].indexOf("Union Square"); 
        console.log(way.join(', ')+ "."); //Joins all elements of an array into a string
        console.log(way.length)
        console.log("Change at Union Square.");
} 
else if(subWays[currentPath][i]=="Union Square")
   {
         while(i!= x) //means need to change path
              {
                if(x > i)
                {
                    i++;
                } 
                else if (x < i)
                {
                  i--;
                }
                way1.push(subWays[desPath][i]);
              }
        
    }  
    urWays = way + way1 ; // join two array into one 
    console.log("Your trip will include the following stops : " + selectPoint +" line: " + way1.join(', ')+ ".");
    console.log(way1.length)
    console.log( way.length + way1.length +  " stops in total.");

} planTrip('nPath', 'Times Square', 'sixPath', '33th') 