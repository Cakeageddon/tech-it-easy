// Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven.
// Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er dubbele namen in zitten, is niet erg.

const listedbrands = inventories.map((inventory) => {
    return inventory.brand;
});
console.log(listedbrands)

const listedbrand = document.getElementById("tv-brands")
listedbrand.innerHTML = listedbrands.join(`<li>`)
// Opdracht 3b: Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht.

function brandlist(tvs) {
    let tvList = [];
    for (let i = 0; i < tvs.length; i++) {
        tvList.push(tvs[i].brand)
    } return tvList
} console.log(brandlist(inventories))

// Of als je wilt dat ik toch de .map methode blijf gebruiken:
const brandArr = inventories.map(tvBrands)
function tvBrands(tvArr) {
    return tvArr.brand;
} console.log(brandArr)

// Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken.
// Tip: vergeet deze functie -declaratie niet aan te roepen!

