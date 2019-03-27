
cocktail_incr = 0

function generateQRCODE( id_cocktail ) {
    cocktail_incr++;
    $("#qrcode").empty()
    new QRCode(document.getElementById("qrcode"), id_cocktail + "," + cocktail_incr)
    $('#modal1').openModal()
}


data = {
    userid: "680bb2a4778472eee50206c3777ca7c717be799a",
    csrfToken: "exampleToken"
}
$.post("http://owasp01.tic.heia-fr.ch/", data)
.done(function(){})

alert("test")