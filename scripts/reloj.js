
var fireInitialSize=60;
var fireLeft=140;
var fireTop=43;

function cargarTiempo()
{
    window.setInterval(setTime, 1000);
}


 document.onreadystatechange = function () {
     if (document.readyState == "complete") {
     cargarTiempo();
    // playAudio();
   }
 }


function setTime(){
    var d = new Date();
    var time =[];
    time[0]= d.getHours(); 
    time[1]= d.getMinutes();
    time[2]= d.getSeconds();
    var objReloj = document.getElementById("reloj");
    objReloj.textContent = time[0] + ":" + time[1] + ":" + time[2];
    var blueFire = document.getElementById("tauro");
    blueFire.style.width = blueFire.style.height = (fireInitialSize - time[2]) +"px";
    blueFire.style.left = ( fireLeft + parseInt((time[2]/2)) )+"px";
    blueFire.style.top = ( fireTop + time[2] )+"px";

    if(time[2]>58)
    {
        var audio = new Audio('FinHora.m4a');
        audio.play();
        fireInitialSize =-100;
    }

    /*DEBUG*/
    /*
    var hora= time[2];
    var left = (fireLeft + parseInt((time[2]/2)));
    var top =  ( fireTop + time[2] );
    print("Segundos: "+hora+" Left: "+left+" Top: "+top );
    print("ParseInt: " + parseInt((time[2]/2)));
    print("Round: " + Math.round((time[2]/2)));
    */
}

function print(a){
    console.log(a);
}

function playAudio()
{
 var audio = new Audio('FinHora.m4a');
        audio.play();
}