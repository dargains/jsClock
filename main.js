function setClock(){
    var date = new Date(),
        digital = document.getElementById("digital"),
        hh = document.getElementById("hour-hand"),
        mh = document.getElementById("minute-hand"),
        sh = document.getElementById("second-hand"),
        hdeg = (date.getHours()%12)*30 + 90,
        mdeg = date.getMinutes()*6 + 90,
        sdeg = date.getSeconds()*6 + 90;
    hh.style.transform = "rotate(" + hdeg + "deg)";
    mh.style.transform = "rotate(" + mdeg + "deg)";
    sh.style.transform = "rotate(" + sdeg + "deg)";
    digital.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
};
setInterval(setClock,1000);
setClock();