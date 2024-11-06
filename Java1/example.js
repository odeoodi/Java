const nimi = prompt('Anna nimi');

let nimenSisalto = `Hei, ${nimi}!`;

document.querySelector('#nimi').innerHTML = nimenSisalto;