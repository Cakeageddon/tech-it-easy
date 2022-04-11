
// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
const listednames = inventories.map((inventory) => {
    return inventory.name;
});

console.log(listednames)

// Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.
const outOfStock = inventories.filter((inventory) => {
    if (inventory.originalStock - inventory.sold === 0) {
        return true
    }
})

console.log(outOfStock)

// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console
const ambilight = inventories.filter((inventory) => {
    if (inventory.options.ambiLight === true) {
        return true
    }
})

console.log(ambilight)

// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.
tempArr = Array.from(inventories)
const priceCompare = tempArr.sort( (a, b) => {
    return a.price - b.price;
})

console.log(priceCompare)