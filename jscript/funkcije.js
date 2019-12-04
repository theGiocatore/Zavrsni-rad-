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

function subscribe(){                                       /*alert posle pritiska na "subscribe" dugme*/
    var txt = document.getElementById('subs').value;
    alert("Thank you for subscribing! Our new blog posts will wait for you on: " + txt);
}
$(function(){                               /*dodavanje komentara u blog delu*/
$("#dugmeKom").on("click", function(){
    var postTxt = $("#tArea").val();
    $("#listaKom").append("<li>"+ postTxt + "</li>");
    $("#tArea").val('');
    return false;
});
});
$(function(){                       /*read more/less dugme*/
    $(".dugme").on("click", function(){
      var dugmeId = $(this).attr("id");
      $('#n' + dugmeId).toggle();
      $('#s' + dugmeId).toggle();
      $(this).text(function(i, text){
            return text === "Read more" ? "Read less" : "Read more";
        });
    });
  });
$(function(){                   /*pritiskom na dugme'read more' otvara se post, sa opcijom za komentarisanje*/
    $(".linkOne").on("click", function(){
        var prvi = $('#zamena1');
        var drugi = $('#zamena2');
        prvi.replaceWith(drugi);
        $('#zamena2').css("display","initial");
        
    });
});
$(function(){
    $("#dugmeBack").on("click", function(){
            window.location.reload();
        });      
});
$(function(){
    $(".slk").on("click",function(){
       var slicica = $(this).attr("src");
       window.open(slicica);
    });
});

var ucitaj = $.ajax({               /*'dovlacimo' podatke sa ponudom za putovanja sa servera u tabelu*/
    type: "GET",
    url:"http://localhost:3000/destinations"
});
ucitaj.done(function(podatak){
    $.each(podatak,function(i, pod){
    $("tbody").append('<tr><td>' + pod.destination + '</td><td>' + pod.date + '</td><td>' + pod.duration + '</td><td>' + pod.price + '</td><td><button id="' + pod.id + '"class=btn btn-primary">View details</button></td><td><button id="' + pod.id + '"class=btn btn-secondary">Make reservation</button></td></tr>');
    });

    $('#bookTable').DataTable();
} );

$(document).on("click", "button", function(){
    if($(this).hasClass("btn-secondary")){
        alert("1");
    }else if($(this).hasClass("btn-primary")){
        alert("2");
    }else{
        alert("3");
    }
});
