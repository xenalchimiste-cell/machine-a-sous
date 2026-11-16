const prompt = require('prompt-sync')({ sigint: true });

const nom = prompt('Comment tu t\'appelles ? ');
console.log('Bonjour ' + nom + ' !');