

"use strict"; 

// Step 1 nome 
const userName = prompt('Inserisci il tuo nome');
// Step 2 cognome 
const userSurname = prompt('Inserisci il tuo cognome');
// Step 3 colore 
const userFavoriteColor = prompt('Inserisci il tuo colore preferito');

// step 4 risultato nel body 
document.querySelector('h1').innerHTML = `Ciao ${userName} ${userSurname}, you favourite color is ${userFavoriteColor}`;
// step 5 risultato nella console
console.log(`Ciao ${userName} ${userSurname}, you favourite color is ${userFavoriteColor}`);
