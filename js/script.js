/*
- chiedere all'utente quanti km vuole percorrere e memorizza
- Chiedere l'età dell'utente e memorizza
- Calcola il prezzo del biglietto (km * 0.21)
? SE l'utente è < 18
  ° prezzoFinale = prezzoBase - (prezzoBase / 100 * 20)
ALTRIMENTI SE L'ETà è > 65
  ° prezzoFinale = prezzoBase - prezzoBase * 0.4
ALTRIMENTI
  ° prezzoFinale - prezzoBase
- formatta prezzoFinale con due decimali
- stampa a schermo prezzoFinale in forma umana
*/


// chiedere e memorizzare km e età
let tripKmEl = document.getElementById("tripKm");
let userAgeEl = document.getElementById("userAge");


// prezzo per km 
let pricePerKm = 0.21;


let userButtonEl = document.getElementById("userButton");

userButtonEl.addEventListener('click', function() {

  let baseTicketPrice = tripKmEl.value * pricePerKm;

  let finalPrice;

  let discount;


  if (userAgeEl.value < 18) {

    finalPrice = baseTicketPrice - (baseTicketPrice / 100 * 20);
    console.log("prezzo scontato minorenni: " + finalPrice);
    discount = '20%';

  } else if (userAgeEl.value >= 65) {

    finalPrice = baseTicketPrice - (baseTicketPrice / 100 * 40);
    console.log("prezzo scontato over 65: " + finalPrice);
    discount = '40%';

  } else {
    
    finalPrice = baseTicketPrice;
    console.log(finalPrice);
    
  }

  
  finalPrice = finalPrice.toFixed(2);

  document.getElementById("ticket").style.display = "block";


  document.getElementById("ticketKm").innerHTML = "Km del viaggio: " + tripKmEl.value;
  document.getElementById("ticketUserAge").innerHTML = "Età dell'utente: " + userAgeEl.value;
  document.getElementById("ticketDiscount").innerHTML = "Sconto: " + discount;

  document.getElementById("ticketPrice").innerhtml = "Prezzo del tuo biglietto: " + finalPrice;
  console.log('ticketPrice');

});

