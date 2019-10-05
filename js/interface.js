var departureLine;
var departureStop;
var arrivalLine;
var arrivalStop;
var departureN=document.getElementById('departure-N');
departureN.addEventListener('click',dropdown1);
var departureL=document.getElementById('departure-L');
 departureL.addEventListener('click',dropdown1);
var departure6=document.getElementById('departure-6');
departure6.addEventListener('click',dropdown1);

var arrivalN=document.getElementById('arrival-N');
arrivalN.addEventListener('click',dropdown2);
var arrivalL=document.getElementById('arrival-L');
 arrivalL.addEventListener('click',dropdown2);
var arrival6=document.getElementById('arrival-6');
arrival6.addEventListener('click',dropdown2);

var show=document.getElementById('Submit');
show.addEventListener('click',submit);
 
 function dropdown1(){
    departureLine=this.value;

    document.getElementById('instructions').textContent=departureLine;
    deleteChild("dropdown1");

    for(let i=0;i<map[departureLine].length;i++){
        var cardElement=document.createElement('button');
        cardElement.setAttribute('id',map[departureLine][i]);
        cardElement.setAttribute('value',map[departureLine][i]);
        cardElement.setAttribute('class',"dropdown-item");
        cardElement.addEventListener('click',setDeparture);
        document.getElementById('dropdown1').appendChild(cardElement);
        document.getElementById(map[departureLine][i]).textContent=map[departureLine][i];
    }
       
}

function dropdown2(){
    arrivalLine=this.value;

    document.getElementById('instructions').textContent=arrivalLine;
    deleteChild("dropdown2");

    for(let i=0;i<map[arrivalLine].length;i++){
        var cardElement=document.createElement('button');
        cardElement.setAttribute('id',map[arrivalLine][i]+"2");
        cardElement.setAttribute('value',map[departureLine][i]);
        cardElement.setAttribute('class',"dropdown-item");
        cardElement.addEventListener('click',setArrival);
        document.getElementById('dropdown2').appendChild(cardElement);
        document.getElementById(map[arrivalLine][i]+"2").textContent=map[arrivalLine][i];
    }
       
}

function setDeparture(){
    departureStop=this.value;
    document.getElementById('dropdownMenuButton1').textContent=departureStop;


};
function setArrival(){
    arrivalStop=this.value;
    document.getElementById('dropdownMenuButton2').textContent=arrivalStop;

};

function deleteChild(id) { 
    var e = document.getElementById(id); 
    var first = e.firstElementChild; 
    while (first) { 
        first.remove(); 
        first = e.firstElementChild; 
    } 
} 

function submit(){
    if(departureLine&&departureStop&&arrivalLine&&arrivalLine){
    document.getElementById('instructions').textContent=planTrip(departureLine, departureStop, arrivalLine, arrivalStop);
    }
    else{
    document.getElementById('instructions').textContent="Please choose a starting point for your trip and a destination to see the instructions!"

    }
}