let tempreture = 50;
let wSpeed = 3.0;
let windChill = (35.74 + (0.6215 * tempreture))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*tempreture*Math.pow(wSpeed,0.16));
windChill = Math.round(windChill);
document.getElementById("windchill").innerHTML = windChill;