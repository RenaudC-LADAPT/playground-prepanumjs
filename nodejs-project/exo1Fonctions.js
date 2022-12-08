// Executez ce code plusieurs fois en modifiant la valeur de la variable num
let num = 4 ; // modifiez la valeur de num

function afficheNom (nom) { 
	console.log("Bonjour ", nom);
	//ecrit "Bonjour nom" où nom est une String donné en argument de la fonction
} 
let nom_utilisateur = prompt("Quel est votre nom ?"); 
afficheNom(nom_utilisateur);

/*function calcul (x) { 
	let y; 
	y=3*x+2; 
	return y; 
} 
console.log("y=3x+2 avec x = " + num + " Résultat : y = " + calcul(num));
*/
// { autofold
module.exports = {
	num: num,
};
// }
