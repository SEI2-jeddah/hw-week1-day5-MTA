function subway(atline,atstop,toline,tostop){
  let sen = [];
  let rtv = [];
  let sameline = 0;
  let x = "";
  let y = "";
  let countA = 0;
  let countB = 0;
  let countC = 0;
  let sum = 0;
let sub = {
    N : ["Times Square","34th","28th","23rd","Union Square","8th"],
    L : ["8th","6th","Union Square","3rd","1st"],
    6 : ["Grand Central","33rd","28th","23rd","Union Square","Astor Place"]
  }

  for(let i = sub[atline].indexOf(atstop)+1;i<sub[atline].length;i++){

    if(sub[atline][i]=="Union Square"){
      sen.push(sub[atline][i])
      sen.push(".")
      countA+=1
      break;
    }

    if(atline == toline && sub[atline][i]==tostop){
      sen.push(sub[atline][i])
      sen.push(".")
      countA+=1
      break;
    }

      sen.push(sub[atline][i])
      sen.push(", ")
      countA+=1

  }

if(!(sen.includes("Union Square")) && atstop != "Union Square" && atline != toline){

  sen = [];
  countA=0;
  for(let i = sub[atline].indexOf(atstop)-1;i>=0;i--){

    if(sub[atline][i]=="Union Square"){
      sen.push(sub[atline][i])
      sen.push(".")
      countA+=1
      break;
    }

      sen.push(sub[atline][i])
      sen.push(", ")
      countA+=1
  }

}

if(atline == toline && sameline == 0){
  sameline = sen
  countB=countA;}
if(atline == toline && !(sameline.includes(tostop))){
  sameline = []
  countB=0;
  for(let i = sub[atline].indexOf(atstop)-1;i>=0;i--){
    if(sub[atline][i]==tostop){

      sameline.push(sub[atline][i])
      sameline.push(".")
      countB+=1
      break;
    }

      sameline.push(sub[atline][i])
      sameline.push(", ")
      countB+=1
  }
}
if(atline == toline && !(sameline.includes(tostop))){
  sameline = []
  countB=0;
  for(let i = sub[atline].indexOf(atstop)+1;sub[atline].length;i++){

    if(sub[atline][i]==tostop){
      sameline.push(sub[atline][i])
      sameline.push(".")
      countB+=1
      break;
    }

      sameline.push(sub[atline][i])
      sameline.push(", ")
      countB+=1
  }
}

if(atline != toline){
  for(let i = sub[toline].indexOf("Union Square")+1;i<=sub[atline].length;i++){
    if(sub[toline][i]==tostop){
      rtv.push(sub[toline][i])
      rtv.push(".")
      countC+=1
      break;
    }
      rtv.push(sub[toline][i])
      rtv.push(", ")
      countC+=1
  }
}
if(atline != toline && !(rtv.includes(tostop))){
  rtv=[];
  countC=0;
  for(let i = sub[toline].indexOf("Union Square")-1;i>=0;i--){

    if(sub[toline][i]==tostop){
      rtv.push(sub[toline][i])
      rtv.push(".")
      countC+=1
      break;
    }

      rtv.push(sub[toline][i])
      rtv.push(", ")
      countC+=1

  }
}

if(sameline.length>0){
  x = sameline.join('')
  countA=0
}else{ x = sen.join('')
countB=0}
y = rtv.join('')

if(atstop=="Union Square" && atline != toline){
countA=0
countB=0
}else{console.log("You must travel through the following stops on the " + atline + " line: "+ x)}

if(atline != toline && tostop != "Union Square"){
  console.log("Change at Union Square to line "+toline+".")
}else if(tostop != "Union Square"){
  console.log("Stay on the same line")
}

if(tostop != "Union Square" && !(sameline>0 || sameline.length>0)){
console.log("Your journey continues through the following stops: "+y)
}else if(rtv.length>0 && tostop != "Union Square"){console.log("Your journey continues through the following stops: "+y)}else{countC=0}

sum = countA + countB + countC;
console.log( sum + " stops in total")
}

subway("6", "Union Square", "N", "34th");
