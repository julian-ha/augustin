function kontingent() {
  var stunden_preis = document.getElementById("stunden").value;
  document.getElementById("ausgabe_stunden_preis").innerHTML =
    stunden_preis + "€";
}
function domain_preis() {
  var domain_preis = document.getElementById("domains").value;
  document.getElementById("domains_ausgabe").innerHTML = domain_preis + "€";
}

function endpreis_berechnen() {
  var endpreis = stunden_preis + domain_preis;
}
document.getElementById("endpreis_ausgabe");
