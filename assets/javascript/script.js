// Funzione cambio interfaccia
function change(){
  document.getElementById("first_compra").style.display = "none";
  document.getElementById("padd").style.paddingTop = "20px";
  document.getElementById("all_ticket").style.display = "flex";
}

// Funzione per verificare se non è stato inserito un numero
function verificaValori(numero){
  if (isNaN(numero) || numero === ""){
    return false;
  }
  return true;
}

// Funzione generatrice prezzo del biglietto in base a chilometri ed eta
function generator() {

  // Dichiaro tutte le variabili
  var chilometri = document.getElementById("form_chilometri").value;
  var eta = document.getElementById("form_eta").value;
  var prezzo = 0.21 * chilometri;
  var prezzoFinale;

  // Controllo dei parametri inseriti; in caso negativo reset dei campi
  if(verificaValori(chilometri) == false || verificaValori(eta) == false ){
    alert("Non ha inserito correttamente i valori, riprovi");
    document.getElementById("form_chilometri").value = null;
    document.getElementById("form_eta").value = null;
    document.getElementById("form_sconto").innerHTML = "";
    document.getElementById("form_prezzo").innerHTML = "";
  } else if (eta  < 18 ) {
    prezzoFinale = prezzo - ((prezzo * 20)/100);
    document.getElementById("form_sconto").innerHTML = "20% perché minorenne";
  } else if (eta > 65) {
    prezzoFinale = prezzo - ((prezzo * 40)/100);
    document.getElementById("form_sconto").innerHTML = "40% perché over 65";
  } else if (eta >= 18 && eta <= 65) {
    prezzoFinale = prezzo;
    document.getElementById("form_sconto").innerHTML = "0%";
  }

  document.getElementById("form_prezzo").innerHTML = prezzoFinale.toFixed(2)+" €";
  
}