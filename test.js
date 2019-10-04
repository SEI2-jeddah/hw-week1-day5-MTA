// // let mta = (function(){

// //     const LINES ={
// //         L_LINE : ["8th","6th","UnionSquare","3rd","1st"],
// //         SIXTH_LINE : ["GrandCentral", "33rd", "28th_SIXTH_LINE", "23rd_SIXTH_LINE", "UnionSquare","AstorPlace"],
// //         N_LINE : ["TimesSquare", "34th", "28th_N_LINE", "23rd_N_LINE", "UnionSquare", "8th"]
// //     }

// //     function planTrip(currentLine,currentStop,destinationLine,destinationStop)
// //     {
// //         let stopCounter =0;

// //         for (lines in LINES )
// //         {
// //             if(currentLine == LINES.lines) 
// //             for( stops of indexOf(LINES.lines))
// //             {
// //                 if(currentStop == stops)
// //                 {
// //                     console.log("hi")
// //                 }
// //             }
// //         }

// //     }

// //     return  {

// //         planTrip : planTrip,
// //         l : LINES



// //     }
// // })

// // mta.planTrip(l,"8th");


// const LINES ={
//             L : ["8th","6th","UnionSquare","3rd","1st"],
//             SIXTH : ["GrandCentral", "33rd", "28th_SIXTH_LINE", "23rd_SIXTH_LINE", "UnionSquare","AstorPlace"],
//             N : ["TimesSquare", "34th", "28th_N_LINE", "23rd_N_LINE", "UnionSquare", "8th"]
//         }

function currentLocation(currentLine,currentStop,destinationLine,destinationStop)
    {
        let stopCounter = 0
        for (line in LINES )
        {
            // console.log(line);
            if(currentLine == LINES[line])
            {
                // console.log()
                for (let i = 0; i < LINES[line].length; i++) {


                    if(currentStop == LINES[line][i])
                    {
                        

                    }
                    
                }

            }
        }

        for (line in LINES )
                        {
                            if(destinationLine == LINES[line])
                            {
                                for (let i = 0; i < LINES[line].length; i++) {

                                    if(destinationStop == LINES[line][i])
                                    {
                                        console.log("Hi")
                                    }
                                }

                            }

                        }

    }
    currentLocation(LINES.L,"8th",LINES.N,"34th");

    

    


// function sameLine(l, currentStop, destination) {
//     const LINE = LINES[l];// returns the chosen line values
//     const DEST_INDEX = LINES[l].indexOf(destination);// index of destination
//     const STOP_INDEX = LINES[l].indexOf(currentStop);// index of current stop
//     let stops = Math.abs(DEST_INDEX - STOP_INDEX);
//     let path = "";
//     let msg = "You must travel through the following stops on the " + l + " Line : ";
//     let stopsMsg = " Stops in Total"
//     if (DEST_INDEX > STOP_INDEX) {// going forward
//         for (let i = STOP_INDEX + 1; i <= DEST_INDEX; i++) {

//             if (i != DEST_INDEX) {
//                 path = LINE[i] + " , ";
//             }
//             else {
//                 path = LINE[i] + ". ";
//             }

//             msg += path
//         }
//     }
//     else if (STOP_INDEX > DEST_INDEX) {// going backwards
//         for (let i = STOP_INDEX - 1; i >= DEST_INDEX; i--) {
//             if (i != DEST_INDEX) {
//                 path = LINE[i] + " , ";
//             }
//             else {
//                 path = LINE[i] + ". ";
//             }

//             msg += path
//         }

//     }
//     console.log(msg);
//     console.log(stops + stopsMsg);
// }
// sameLine("L", "8th", "1st");
// sameLine("L", "1st", "8th");


// function planTrip(currentLine, currentStop, destinationLine, destinationStop) 
// {

//     let changeLineMsg = "Change at Union Square."
//     let Totalstops = 0
//     let path = "";
//     let firstMsg = "You must travel through the following stops on the " + currentLine + " Line : ";
//     // const DEST_INDEX = LINES[currentLine].indexOf(destinationStop);// index of destination
//     // const STOP_INDEX = LINES[currentLine].indexOf(currentStop);// index of current stop
//     const LINE = LINES[currentLine];// returns the chosen line values
//     let stops = Math.abs(DEST_INDEX - STOP_INDEX);
//     // let secondMsg = "You must travel through the following stops on the " + DEST_LINE + " Line : ";
//     if (currentLine == destinationLine) {
//         sameLine(LINE , currentStop , destinationStop);

//     }
//     // else {
      
//     //     sameLine(STOP, currentStop, destinationStop)
//     //     console.log(changeLineMsg);
//     //     sameLine(DEST, destinationStop, destinationStop)
//     // }

// }

// planTrip("L", "8th", "L", "1st")