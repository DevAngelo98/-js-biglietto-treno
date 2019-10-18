// Funzione cambio interfaccia
function change(){
  document.getElementById("first_compra").style.display = "none";
  document.getElementById("padd").style.paddingTop = "20px";
  document.getElementById("all_ticket").style.display = "flex";
}


function verificaValori(numero){
  if (isNaN(numero)){
    alert("Non ha inserito correttamente i valori, riprovi");
    return false;
  }
}

// Funzione generatrice prezzo del biglietto in base a chilometri ed eta
function generator(){

  // Dichiaro tutte le variabili
  var chilometri = document.getElementById("form_chilometri").value;
  var eta = document.getElementById("form_eta").value;
  var prezzo = 0.21 * chilometri;
  var prezzoFinale;

  // Controllo dei parametri inseriti
  verificaValori(chilometri);
  verificaValori(eta);


  // Condizioni per stabilire il prezzo finale
  
  if (eta<18) {
    prezzoFinale = prezzo - ((prezzo * 20)/100);
    document.getElementById("form_sconto").innerHTML = "20% perché minorenne";
  } else if (eta > 65) {
    prezzoFinale = prezzo - ((prezzo * 40)/100);
    document.getElementById("form_sconto").innerHTML = "40% perché over 65";
  } else if (eta >= 18 && eta <= 65) {
    prezzoFinale = prezzo;
    document.getElementById("form_sconto").innerHTML = "0%";
  }

  // console.log(prezzoFinale);
  document.getElementById("form_prezzo").innerHTML = prezzoFinale+" €";
  
}