
// # Calcolare il prezzo del biglietto

// ### chiedere il nome del passeggero
// ### chiedere il numero di km da percorrere
// ### chiedere l'età del passeggero
// ### definire il prezzo base del biglietto
// ### calcolare l'entità dello sconto
// ### calcolare il prezzo finale del biglietto con o senza sconto
// ### stampare il risultato delle informazioni che l'utente ha inserito

// const per calcolare i risultati
const PREZZO_PER_KM = 0.21;
const discount20 = 20 / 100;
const discount40 = 40 / 100;
const discontZero = 0;

// calcolo del prezzo quando l'utente fa click sul btn genera
const btnGeneraDomElement = document.getElementById('btn-genera');
btnGeneraDomElement.addEventListener('click',
function(){
    // nome del passeggero
    let inputDomUserName = document.getElementById('userName').value;
    console.log ('nome passeggero:', inputDomUserName)
    // numero di chilometri da percorre
    let inputDomChilometri = document.getElementById('chilometri').value;
    console.log ('distanza:', inputDomChilometri)
    // età del passeggero
    let selectDomAge = document.getElementById('age').value;
    console.log ('età del passeggero:', selectDomAge)

    // calcolare il prezzo base del biglietto
    const tickePrice = inputDomChilometri * PREZZO_PER_KM;
    console.log ('ticket price:', tickePrice)
    
})