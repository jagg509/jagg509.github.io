function windChill() {
   let t =  parseFloat(document.getElementById('air-average').innerHTML);
   let x = parseFloat(document.getElementById("air-speed").innerHTML);

   let s = Math.pow(x,0.16);

   let chillfactor = 35.74 + (0.6215 * t) - (35.75 * s) + (0.4275 * t * s);

   let result = chillfactor.toFixed(1);

   document.getElementById("chill-factor").innerHTML = result;

}

window.onload = windChill;