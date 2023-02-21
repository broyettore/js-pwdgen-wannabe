"use strict"; 

// Step 1 nome 
const userName = prompt('Inserisci il tuo nome');
// Step 2 cognome 
const userSurname = prompt('Inserisci il tuo cognome');
// Step 3 colore 
const userFavoriteColor = prompt('Inserisci il tuo colore preferito');

// step 4 risultato nel body 
document.querySelector('h1').innerHTML = `${userName}${userSurname}${userFavoriteColor}89`;
// step 5 risultato nella console
console.log(`${userName}${userSurname}${userFavoriteColor}89`);
