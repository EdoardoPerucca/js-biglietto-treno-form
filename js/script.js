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


let userAgeButton = document.getElementById('userAgeButton');

let userAge = document.getElementById('userAge');

let tripKm = document.getElementById('tripKm');

let pricePerKM = 0.21;

let baseTicketPrice = tripKm * pricePerKM;

let finalPrice;

userAgeButton.addEventListener('click', function() {


    if(userAge.value < 18){
    
      finalPrice = baseTicketPrice - baseTicketPrice / 100 * 20;
    
    } else if(userAge.value >= 65) {
    
      finalPrice = baseTicketPrice - baseTicketPrice * 0.4;
    
    } else {
    
      finalPrice = baseTicketPrice;
    }

    document.getElementById('finalTicketCost').innerHTML = finalPrice.toFixed(2);
});




