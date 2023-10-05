// # Calcolare il prezzo del biglietto

// ### chiedere il nome del passeggero
// - creare un input nell'HTML
// - prendere l'input dal DOM
const inputDomUserName = document.getElementById('userName')
console.log('Nome e cognome del passeggero:', inputDomUserName)
// ### chiedere il numero di km da percorrere
// - creare un input nell'HTML
// - prendere l'input dal DOM
const inputDomChilometri = document.getElementById('chilometri')
console.log('chilometri da percorrere:', inputDomChilometri)
// ### chiedere l'età del passeggero
// - creare un input select nell'HTML
// - prendere l'input select dal DOM
const selDomUserAge = document.getElementById('age')
console.log('Età del passeggero:', selDomUserAge)

// ### creare un button genera e annulla
// - inserire i tag button nell'HTML
// - prendere i button dal DOM
const btnGeneraDomElement = document.getElementById('btn-genera')
const btnAnnullaDomElement = document.getElementById('btn-annulla')
// ### definire il prezzo base del biglietto
// - creare un 
// - prendere la classe dal DOM
const finalPrice = document.querySelector('.finalPrice') 
console.log('Prezzo base del biglietto:', finalPrice)


// ### calcolare l'entità dello sconto
// ### calcolare il prezzo finale del biglietto
// ### stampare il risultato delle informazioni che l'utente ha inserito
// - creare un operazione nella quale faremo i calcoli che avverranno all'evento "click" e stamperà il risultato

btnGeneraDomElement.addEventListener('click', function () {
    // recupero i valori degli input
    console.log(selDomUserAge.value)
})
