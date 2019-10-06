
//Homework 5



let journey = "";
let stops = "";

let lines = {
    lineN: ["8th", " Union Square", " 23rd", " 28th", " 34th", " Times Square"],
    lineL:["8th", " 6th", " Union Square", " 3rd", " 1st"],
    line6: ["Astro Place"," Union Square"," 23rd"," 28th"," 33rd"," Grand Central"]
};
let count = 0;
let yourRoute = function(line1, getOn, getOff) {
    for(k in Object.keys(lines)){
        if(line1 == Object.keys(lines)[k]){
            for(let i = 0; i < lines[line1].length; i++){
                while(getOff == lines[line1][count]){
                    stops+= lines[line1][i];
                    count = count +1;


                }
                // if(!(getOn == lines[line1][i])){
                //     stops+= lines[line1][i];
                    
                // }else{
                //     stops+= lines[line1][i];                 ;
                // }
            }

        }
    }
    // for(let i = 0; i < lineN.length; i++){
    //     if(!(getOff == lineN[i])){
    //         stops+= lineN[i];
    //     }else{
    //         stops+= lineN[i];
    //     }
    // }
    journey+= stops;
    return journey;


}



// for(k in Object.keys(lines)){
//     if(Object.keys(lines)[1] == "lineL") {
//         if(lines["line6"][0] == "Astro Place"){
//             console.log("maa");
//         }
       
//     }else{
//         console.log("no");
//     }
// }


// console.log(lines["lineN"]);
// console.log(lines["lineN"][0]);
console.log(yourRoute("lineN", "8th", "Times Square"));