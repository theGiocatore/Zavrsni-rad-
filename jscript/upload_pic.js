function ucitajSliku() {
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
