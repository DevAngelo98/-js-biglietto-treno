function change(){
  document.getElementById("first_compra").style.display = "none";
  document.getElementById("all_ticket").style.display = "flex";
}

function generator(){
  var chilometri = parseInt(document.getElementById("form_chilometri").value);
  var eta = parseInt(document.getElementById("form_eta").value);
  console.log(chilometri);
  console.log(eta);
  var prezzo = 0.21 * chilometri;

  if(eta<18){
    var prezzoFinale = prezzo - ((prezzo * 20)/100);
  } else if(eta > 65){
    var prezzoFinale = prezzo - ((prezzo * 40)/100);
  } else if(eta >= 18 && eta <= 65){
    var prezzoFinale = prezzo;
  }

  console.log(prezzoFinale);
  document.getElementById("form_prezzo").innerHTML = prezzoFinale+" €";

}