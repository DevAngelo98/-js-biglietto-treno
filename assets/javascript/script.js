function change(){
  document.getElementById("first_compra").style.display = "none";
  document.getElementById("padd").style.paddingTop = "20px";
  document.getElementById("all_ticket").style.display = "flex";
}

function generator(){
  var chilometri = parseInt(document.getElementById("form_chilometri").value);
  var eta = parseInt(document.getElementById("form_eta").value);
  
  var prezzo = 0.21 * chilometri;

  if(eta<18){
    var prezzoFinale = prezzo - ((prezzo * 20)/100);
    document.getElementById("form_sconto").innerHTML = "20% perché minorenne";
  } else if(eta > 65){
    var prezzoFinale = prezzo - ((prezzo * 40)/100);
    document.getElementById("form_sconto").innerHTML = "40% perché over 65";
  } else if(eta >= 18 && eta <= 65){
    var prezzoFinale = prezzo;
    document.getElementById("form_sconto").innerHTML = "0%";
  }

  console.log(prezzoFinale);
  document.getElementById("form_prezzo").innerHTML = prezzoFinale+" €";
  
}