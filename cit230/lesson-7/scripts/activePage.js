
var pages = document.getElementsByClassName("page");

for (var i = 0; i < pages.length; i++) {
    pages[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }