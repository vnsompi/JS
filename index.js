// alert("salut Js !");

// comment fair un commentaire

// commenter plusieur ligne  avec /* puis */

// la syntaxe de Js

// console.log("coucou");

// ne pas oublier de mettre ; a la fin de chaque ligne

let variable = "Helo World !";

console.log(variable);

// les variables
// var qui etais utiluisé avant
// let qui est la nouvelle variable a utiliser

var unText = "voici un text";
console.log(unText);

// const est une consatnte qui ne peut pas etre modifié
// elle est utile pour les valeurs qui ne changent pas
const Prenom = "bainqueur";
console.log(Prenom);

// Prenom = "djess"; // ne peut pas etre modifié car c'est une constante

// let 

let Chiffre = 10;
console.log(Chiffre);

Chiffre = 20; // peut etre modifié car c'est une variable let

let chaine = "je sui une chaine de caractere";
// avec des simples guillemets ou les doubles guillemets

let phrase = "je suis l'utilisateur de cette page web";
console.log(phrase);

// la concaténation
// comment ça marche ?
let nouvellechaine ="voici: " + chaine + " et " + phrase;
console.log(nouvellechaine);

let concat =` voici:  ${chaine} et ${phrase}`

console.log(nouvellechaine);
console.log(concat);

// les type de données
// string, number, boolean, null, undefined, object
// string: chaine de caractere
let string = "je suis une chaine de carctere";
// number: nombre

let number = 42;
// boolean: vrai ou faux
let boolean = true; // ou false

// null: valeur nulle

// undefined: valeur non définie
let arbre;
// object: objet
let objet = {
    nom: "djess",
    age: 47,
    estActif: true
};

//  les tableaux sont des objets
let array = ["je", "suis", "47", "true"];



// les operateurs

console.log(4+5); // addition
console.log(4-5); // soustraction 
console.log(4*5); // multiplication
console.log(4/5); // division
console.log(4%5); // modulo (reste de la division)
console.log(4**5); // puissance
console.log(4 == 5); // egalité
console.log(4 != 5); // inegalité

// les operateurs d'affectation
let total = 10; // affectation
total = total + 1; // addition
total += 1; // addition avec affectation
total -= 1; // soustraction avec affectation
total--; // soustraction de 1
console.log(total);