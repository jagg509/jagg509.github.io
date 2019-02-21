function dateUpdate() {
   var event = new Date();
   document.getElementById("date").innerHTML = event.toDateString();
}

window.onload = dateUpdate;