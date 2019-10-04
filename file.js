function subway(atline,atstop,toline,tostop){
  let sen = "";
  let rtv = "";
  let sameline = 0;

let sub = {
    N : ["Times Square","34th","28th","23rd","Union Square","8th"],
    L : ["8th","6th","Union Square","3rd","1st"],
    6 : ["Grand Central","33rd","28th","23rd","Union Square","Astor Place"]
  }
  for(let i = (sub[atline].indexOf(atstop))+1;i<=(sub[atline].length);i++){
    
    if(sub[atline][i]=="Union Square"){

      sen = sen + sub[atline][i]
      sen = sen + "."
      
      break;
    }
    
    sen = sen + sub[atline][i]
    sen = sen + ", "
    
    if(sub[atline][i]==tostop && atline==toline){
      sameline = sen ;
      break;
    }
    }

   if(sen.indexOf("Union Square")==-1){
     
      sen=""
   }

  if(sen==""){
    
    for(let i = ((sub[atline].indexOf(atstop))-1);i>=0;i--){
      
    if(sub[atline][i]=="Union Square"){
      sen = sen + sub[atline][i]
      sen = sen + "."
      
      break;
    } 
      
     sen = sen + sub[atline][i]
     sen = sen + ", " 
     
  }

  }
  
  if(sen.indexOf('Union')>=0){ 
    for(let i = sub[toline].indexOf("Union Square");i<sub[toline].length;i++){
      
      if(tostop == "Union Square"){
        //console.log("You have reached your destination")
        break;
      }else
      if(sub[toline][i]==tostop){
        
        rtv = rtv + sub[toline][i]
        rtv = rtv + "."
        break;
      }
        if(sub[toline][i]!="Union Square")
        rtv = rtv + sub[toline][i]  

        if(sub[toline][i]!="Union Square")
        rtv = rtv + ", "
        
        
      }
  }
     
      if(rtv.indexOf(tostop)==-1){
        rtv = "";
        for(let i = sub[toline].indexOf("Union Square");i>=0;i--){
          
          if(tostop == "Union Square"){
              //console.log("You have reached your destination")
            break;
          }else
        if(sub[toline][i]==tostop){   
                rtv = rtv + sub[toline][i]
                rtv = rtv + "."
                break;
        }

        if(sub[toline][i]!="Union Square")
        rtv = rtv + sub[toline][i]  

        if(sub[toline][i]!="Union Square")
        rtv = rtv + ", "

        
      }
      }

     if(rtv.indexOf(tostop)==-1){
        rtv = "";
        for(let i = sub[toline].indexOf("Union Square");i>=0;i++){
          
          if(tostop == "Union Square"){
              //console.log("You have reached your destination")
            break;
          }else
        if(sub[toline][i]==tostop){   
                rtv = rtv + sub[toline][i]
                rtv = rtv + "."
                break;
        }

        if(sub[toline][i]!="Union Square")
        rtv = rtv + sub[toline][i]  

        if(sub[toline][i]!="Union Square")
        rtv = rtv + ", "

        
      }
      }

  if(atstop == "Union Square")
  sen = " "

if(sameline>0 || sameline.length>0){sameline = sameline.slice(0,-2)};
let add1 = sen.split(",")
if(atline == toline && (sameline>0 || sameline.length>0)){add1 = sameline.split(",")}
let add2 = rtv.split(",")
if(atline == toline && (sameline>0 || sameline.length>0)){add2 = ""}
let sum = (add1.length + add2.length)
if(atline == toline && (sameline>0 || sameline.length>0)){sum += 1}
if(atline == toline && (sameline>0 || sameline.length>0) && (sameline.indexOf('Union')==-1)||(atstop=="Union Square")){sum-=1}
if(sameline.length > 0 && atstop!="Union Square"){
  console.log("You must travel through the following stops on the " + atline + " line: "+sameline+ ".")
}else if(atstop!="Union Square"){
console.log("You must travel through the following stops on the " + atline + " line: "+sen)}
if(atline!=toline){
  console.log("Change at Union Square to line "+toline+".")
}else if(tostop != "Union Square"){
  console.log("Stay on the same line")
}
if(tostop != "Union Square"){console.log("Your journey continues through the following stops: "+rtv)}


console.log( sum + " stops in total")
}


subway("L", "Union Square", "L", "6th")