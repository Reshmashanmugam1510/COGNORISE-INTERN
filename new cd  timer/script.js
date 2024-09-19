const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');
const start = document.getElementById('start');
const reset = document.getElementById('reset');

var interval = null;
var total = 0;


totalValue = ()=>{
    total = Number(days.value)*86400 + Number(hours.value)*3600 + Number(mins.value)*60 + Number(secs.value);
}

Timer = ()=>{ 
    totalValue();
    total--;

    if (total >= 0) {
        var dy = Math.floor(total/86400);
        var hr = Math.floor((total % 86400) / 3600);
        var mt = Math.floor((total % 3600) / 60);
        var sc = total % 60;
        days.value = dy;
        hours.value = hr;
        mins.value = mt;
        secs.value = sc;
    }
    else{
        console.log("Timer Over!!")
    }
}

start.addEventListener('click', ()=>{
    clearInterval(interval);
    interval = setInterval(Timer, 1000);
});

reset.addEventListener('click', ()=>{
    clearInterval(interval);
    days.value=0;
    hours.value=0;
    mins.value=0;
    secs.value=0;
});