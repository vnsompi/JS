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

//  let x = 10;
//  let y = 5+5;

// //  une if  else en ligne  
//  if(x > y) {alert("x est plus grand que y");{}

//  }else if (y==x) {alert("ils sont egaux");}

// //  pour complexifier les consdition on peut utiliser les operateurs logiques
// // && (et), || (ou), ! (non)


// on test si ma variable est true ou fausse

    // if (x){
        // console.log("x existe!")

    // les egalites

     let x = 10;
    let y = "10";
    if (x == y) {
        console.log("ils sont egaux");
    }

    // pour tester les egalités il faut utlisiser ===  
   
    if (x === y){
        console.log("ils sont egaux et de meme type");
    } else {
        console.log("ils ne sont pas egaux ou de meme type");
    }

    // ==teste iil teste l'egalite de s valeurs sans prendre compte de type 


// le ou
// if (x == y || x === y) {
//     console.log("x est egale à y");
// }

if (x> y  || x > 1) {
    console.log("x est plus grand que y ou x est egale à y");
} else {
    // alert("alerte Erreur");
}
// && est l'operateur logique ET qui teste si les deux conditions sont vraies sans quoi im ne s'execute pas 

let a = 2 
let b = "2";
if(a < b && a > 1) {
    console.log("ui");
} else{
    // alert("une erreur est commise");
}

// les fonctions
// fonction classique

function FaireQuelqueChose() {
    console.log("je fais un truc");
    console.log(5+6);
    // alert("fonction terminée");
}

FaireQuelqueChose(); // appel de la fonction

// il faut impérativement appeler une fonction pour qu'elle s'exécute

//  la fonction fléchée

const FaireAddition = (a, b) => {
    console.log(a + b); // retourne la somme de a et b
}

FaireAddition(5, 6); // appel de la fonction fléchée
FaireAddition(432, 6); // appel de la fonction fléchée
// return permet aussi de reytourner la fonction

// LA PORTÉE DES VARIABLES

 function add2 (){
    let a = 4
    console.log(a + 2);

 }

 add2(a)

