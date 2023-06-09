function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";
    
    if (h == 0) {
        h = 12; // 12-hour format
    }
    
    if (h > 12) {
        h = h - 12;
        session = "PM";
    }
    
    if (h < 10) {
        h = "0" + h;
    }
    
    if (m < 10) {
        m = "0" + m;
    }
    
    if (s < 10) {
        s = "0" + s;
    }
    
    var clockDisplay = h + ":" + m + ":" + s + " " + session;
    document.getElementById("DigitalClock").innerHTML = clockDisplay;
    document.title = clockDisplay + " - Digital Clock";
    
    setTimeout(showTime, 1000);
}

showTime();
