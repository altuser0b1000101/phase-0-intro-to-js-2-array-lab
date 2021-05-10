// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat() {
 let newCats = [...cats, "Broom"];
 return newCats;
}
function prependCat() {
    let newCats = ["Arnold", ...cats];
    return newCats;
   }
function removeLastCat() {
   let newCat = cats.slice(0, cats.length - 1);
   return newCat;
}   
function removeFirstCat() {
    let newCat = cats.slice(1);
    return newCat;
}