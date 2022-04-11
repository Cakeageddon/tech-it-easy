// Opdracht 2 - Elementen in de DOM plaatsen
// Tip: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon een oude vertrouwde for-loop voor!
//
//     Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
let soldtTvs = 0
for (let i = 0; i < inventories.length; i++) {
    soldtTvs += inventories[i].sold
} console.log(soldtTvs)

// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
const soldtTv = document.getElementById("sold-tv")
soldtTv.textContent = soldtTvs

//     Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
let boughtTvs = 0
for (let i = 0; i < inventories.length; i++) {
    boughtTvs += inventories[i].originalStock
} console.log(boughtTvs)

// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
const boughtTv = document.getElementById("bought-tv")
boughtTv.textContent = boughtTvs

//     Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
let toSellTvs = boughtTvs - soldtTvs
const toSellTv = document.getElementById("to-sell-tv")
toSellTv.textContent = toSellTvs