/*
* File: app.js
* Author: Dargai Dániel
* Copyright: 2024, Dargai Dániel    
* Group: Szoft I-2-N
* Date: 2024-04-03
* Github: https://github.com/danidargai/
* Licenc: GNU GPL
*/

console.log('Dargai Dániel, Szoft I-2-N, 2024.04.03')
console.log('A program kiszámolja a hexadecagon területét')

const oldalhosszusag = document.getElementById('oldal')
const parseButton = document.getElementById('parseButton')
const eredmenyBekezdes = document.getElementById('eredmeny')

function hexadecagonterulet(oldalhossz) {
    const kerulet = 16 * oldalhossz
    const apothem = oldalhossz / (2 * Math.tan(Math.PI / 16))
    return (kerulet * apothem) / 2
}

parseButton.addEventListener("click", () => {
    const oldalhossz = oldalhosszusag.value; 
    const terulet = hexadecagonterulet(oldalhossz)
    eredmenyBekezdes.textContent = "A hexadecagon területe: " + terulet+ ' ' + ' cm2'
});