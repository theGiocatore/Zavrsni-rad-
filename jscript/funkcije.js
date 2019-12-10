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
$(function(){                           /*klikom na sliku iz galerije, otvaramo je u novom prozoru*/
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
    $("#bookTable tbody").append('<tr><td>' + pod.destination 
                                + '</td><td>' + pod.date 
                                + '</td><td>' + pod.duration 
                                + '</td><td>' + pod.price 
                                + '</td><td><button id="'+ pod.id 
                                + '"class=pogledaj btn btn-primary " data-toggle="modal" data-backdrop="static" data-target="#myModal'+ pod.id +'"'+'>View details</button>'
                                + '</td><td><button id="' + pod.id 
                                + '"class=rezervisi btn btn-secondary " data-toggle="modal" data-backdrop="static" data-target="#myModal">Make reservation</button></td></tr>');
    });
    $('#bookTable').DataTable();
} );

var ucitaj2 = $.ajax({
    type: "GET",
    url: "http://localhost:3000/reservations"
});
// var ucitaj3 = $.extend(ucitaj, ucitaj2);
// console.log(ucitaj3);
ucitaj2.done(function (podatak2) {
    $.each(podatak2, function (i, pod1) {
    $("#bookTable2 tbody").append('<tr><td>' + pod1.name
                                             +'</td><td>' + pod1.surname 
                                             +'</td><td>' + pod1.Email 
                                             +'</td><td>'+ 'xxx' 
                                             +'</td><td>'+'xxx' 
                                             +'</td><td>' + pod1.note 
                                             +'</td><td><button id="'+ pod1.id 
                                             +'"class=izmeni btn btn-success">Change<br>reservation</button>'
                                             +'</td><td><button id="'+ pod1.id 
                                             +'"class=obrisiMe btn btn-warning">Delete<br>reservation</button></td></tr>');
    });
    $('#bookTable2').DataTable();
});
// $("bookTable2 tbody").on("click","button", function(){
//     if($(this).hasClass("obrisiMe")){
//         $ajax({
//             url:'"http://localhost:3000/reservations/' + $(this).attr("id") + '"',
//             type:'DELETE',
//             dataType:'json',
//             success: function(){
//                 console.log("obrisano");
//             },
//             error: alert("nije uspelo")  
//         });
//         $(this).parent().parent().remove();
//     }
// })
function dodajRez(){
    let rezerv = {
        name: document.getElementById("nameZ").value,
        surname : document.getElementById("lastNameZ").value,
        Email : document.getElementById("mailZ").value,
        jmbg: document.getElementById("jbg").value,
        note: document.getElementById("noteZ").value
    };
    var zahtevZS = $.ajax({
        type: 'POST',
        url: "http://localhost:3000/reservations",
        data: rezerv
    });
    zahtevZS.done(function(podaci){
        $("#proba4").text(JSON.stringify(podaci));
    });
    zahtevZS.fail(function(podaci){
        alert(podaci.statusText);
    });
}

