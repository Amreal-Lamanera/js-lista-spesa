const shoppingList = [
    "banane",
    "lamponi",
    "zucchine",
    "pane",
    "salame",
    "iPhone 13 pro",
    "airPods",
    "pupazzo di baby yoda"
]

// Recupero elemento html dove stampare la lista
const listElement = document.querySelectorAll(".shopping-list");

// Ciclo for per stampare
for (let i = 0; i < shoppingList.length; i++) {
    // Creo un elemento li
    const li = document.createElement('li');

    // Inserisco il contenuto
    li.innerHTML = shoppingList[i];

    // Lo aggiungo a ul
    listElement[0].append(li);
}

// Ciclo while per stampare
// Creo un index
let index = 0;

while (index < shoppingList.length) {
    // Creo un elemento li
    const li = document.createElement('li');

    // Inserisco il contenuto
    li.innerHTML = shoppingList[index];

    // Lo aggiungo a ul
    listElement[1].append(li);

    // Decremento indice
    index++;
}

// TODO: Bonus
const shoppingListCopy = [];

for (let i = 0; i < shoppingList.length; i++) {
    shoppingListCopy.push(shoppingList[i]);
}
console.log("LIST: ", shoppingList, "LIST COPY: ", shoppingListCopy)

//Ciclo for + shift
for (let i = shoppingList.length; i > 0; i--) {
    // Creo un elemento li
    const li = document.createElement('li');

    // Inserisco il contenuto
    li.innerHTML = shoppingList.shift();

    // Lo aggiungo a ul
    listElement[2].append(li);
}
console.log("LIST: ", shoppingList, "LIST COPY: ", shoppingListCopy)

//Ciclo while + shift
while (shoppingListCopy.length > 0) {
    // Creo un elemento li
    const li = document.createElement('li');

    // Inserisco il contenuto
    li.innerHTML = shoppingListCopy.shift();

    // Lo aggiungo a ul
    listElement[3].append(li);
}
console.log("LIST: ", shoppingList, "LIST COPY: ", shoppingListCopy)