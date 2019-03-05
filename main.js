
cocktail_incr = 0

function generateQRCODE( id_cocktail ) {
    cocktail_incr++;
    $("#qrcode").empty()
    new QRCode(document.getElementById("qrcode"), id_cocktail + "," + cocktail_incr)
    $('#modal1').openModal()
}