const prompt = require('prompt-sync')({ sigint: true });

const nom = prompt('Comment tu t\'appelles ? ');
console.log('Bonjour ' + nom + ' !');

console.log('=== MACHINE À BOISSONS ===');
console.log('1. Café ....... 0,60 €');
console.log('2. Thé ........ 0,80 €');
console.log('3. Chocolat ... 1,10 €');
console.log('4. Eau ........ 0,50 €');
console.log('5. Quitter ......');

const option = prompt('Choisissez une option : ');
if (option === '1') {
    console.log('Vous avez tapé le : Café - 0,60 €');
} else if (option === '2') {
    console.log('Vous avez tapé le : Thé - 0,80 €');   
} else if (option === '3') {
    console.log('Vous avez tapé le : Chocolat - 1,10 €');
} else if (option === '4') {
    console.log('Vous avez tapé le : Eau - 0,50 €');
} else if (option === '5') {
    console.log('Vous avez tapé le : Quitter - 0,00 €');
} else {
    console.log('Option invalide - 0,00 €');
}   