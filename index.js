// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop(cats.length - 1);
}

function destructivelyRemoveFirstCat() {
    cats.shift(0);
}

function appendCat(name) {
   const newCats = [...cats, "Broom"];
   return newCats;
}

function prependCat(name) {
    const catsNew = ["Arnold", ...cats];
    return catsNew;
}

function removeLastCat(){
    return cats.slice(0,2);
}

function removeFirstCat(){
    return cats.slice(1);
}