function ucitajSliku() {                                                 /*za dodavanje slike u galeriju*/
    var fajl = document.getElementById(File1);
        if (fajl.files.length != 0 && fajl.files[o].type.match(/image.*/))
    {
        var reader = new FileReader()
        reader.readAsDataURL(fajl.files[0]);
        reader.onload = function (e){
        var img = document.getElementById(slika1);
        img.src = e.target.result;
        }
        reader.onerror = function (e) {
        alert("Can not load the picure");
        }
    } 
        else {
        alert("Choose the picture");
        }
}   
function brojBedzeva(){                                            /* funk. broji postove odredjenih klasa i stavlja ih u BLOG/CATEGORIES/badges */
    var destinacije = document.getElementsByClassName("dest").length;
    var saveti = document.getElementsByClassName("tTips").length;
    var letovanja = document.getElementsByClassName("summerTime").length;
    document.getElementById("drugiBadge").innerHTML = destinacije;
    document.getElementById("prviBadge").innerHTML = saveti;
    document.getElementById("treciBadge").innerHTML = letovanja;
}
document.addEventListener("DOMContentLoaded", function() {
    brojBedzeva();
  });
  