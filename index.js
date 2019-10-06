let n = [ "Times-Square", "34th", "28th", "23rd", "Union Square", "8th"]
let l = [ "Grand-Central", "33rd", "28th", "23rd", "Union Square","Astor-Place"]
let six = [ "8th", "6th", "Union Square", "3rd", "1st"]
 function stops(line, position, next_line,  destination ){
let ans = ''
   if (line == "n"){
     for (let i = 0; i < n.length; i++){
        if ( n.indexOf(position) !== -1){
          if ( n.indexOf(position) < n.indexOf(destination)){
            for (let i =n.indexOf(position) ; i <= n.indexOf(destination) ; i++){
              ans += n[i]
            
            }
            
          }

            else if(n.indexOf(position) > n.indexOf(destination)){
               for (let i = n.indexOf(position) - 1 - 1; i > 0; i--){

                 ans += '' + n[i]
               }
            }
         console.log(ans)


        }
     }
   }
   else if ( line == "l"){
     for (let i = 0; i < l.length; i++){
        if ( l.indexOf(position) !== -1){
          if ( l.indexOf(position) < l.indexOf(destination)){
            for (let i =l.indexOf(position) ; i <= l.indexOf(destination) ; i++){
              ans += l[i]
            
            }
            
          }

            else if(l.indexOf(position) > l.indexOf(destination)){
               for (let i = l.indexOf(position) - 1; i > 0; i--){

                 ans += '' + l[i]
               }
            }
   }
 
 }
   }

  else if ( line == "6"){
     for (let i = 0; i < six.length; i++){
        if ( six.indexOf(position) !== -1){
          if ( six.indexOf(position) < six.indexOf(destination)){
            for (let i =six.indexOf(position) ; i <= six.indexOf(destination) ; i++){
              ans += six[i]
            
            }
            
          }

            else if(six.indexOf(position) > six.indexOf(destination)){
               for (let i = six.indexOf(position) - 1; i > 0; i--){

                 ans += '' + six[i]
               }
            }
        }
     }
  }
 }
      
       

stops("n", "Times Square", "n", "8th");