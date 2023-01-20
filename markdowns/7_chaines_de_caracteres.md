# les chaînes de caractères en JavaScript

## Créer une chaîne de texte
- Pour débuter, ouvrez une nouvelle fenêtre : *Ctrl + N (sous Windows) ou Cmd + N (sous Mac).*
- Remplacez l'URL par about:blank pour avoir une page vierge.
- Ouvrez la console : *appuyez sur les touches Ctrl + Maj + J (sous Windows) ou Cmd + Opt + J (sous Mac).*

```jsx
let slogan = 'Vivre ensemble, égaux & différents';
slogan;
```

Comme avec les nombres, on declare une variable avec `let` ou `const`, et on l'initialise avec une valeur de chaîne. La seule différence ici est que lorsque nous écrivons une chaîne, nous la mettons entre guillemets.

Si vous ne le faites pas, ou si vous oubliez un des guillemets, vous déclenchez une erreur. Essayez d'entrer une de ces lignes :
```jsx
let badString = Voici un test;
```
```jsx
let badString = 'Voici un test;
```
```jsx
let badString = Voici un test';
```
Ces lignes de code ne fonctionnent pas parce que toute chaîne de texte qui n'est pas écrite entre guillemets est considérée comme un nom de variable, un nom de propriété, un mot réservé ou quelque chose de semblable.

Quand l'interpréteur ne parvient pas à trouver la déclaration de ladite variable, une erreur est déclenchée (par ex. « missing ; before statement »). Si l'interpréteur voit le début d'une chaîne mais ne trouve pas sa fin, comme dans la ligne 2, il se plaint en émettant une erreur (avec « unterminated string literal »). Si votre programme produit de telles erreurs, revoyez‑le et vérifiez qu'aucun guillemet ne manque.

L'assertion suivante fonctionne si la variable `slogan` a été préalablement définie — essayez maintenant :
```jsx
let string = slogan;
string;
```
`string` est maintenant défini avec la même valeur que `slogan`.

### Guillemets simples vs guillemets doubles
Toute valeur stockée dans une variable en utilisant des guillemets doubles ou des guillemets simples (apostrophes) sera considérée comme une chaine de caractères, et ceci même dans le cas où nos caractères sont à priori des chiffres comme "42" par exemple.

En JavaScript, on va pouvoir utiliser indifféremment des guillemets doubles ou des apostrophes pour entourer une chaine de caractères et ces deux méthodes vont être strictement équivalentes à la différence d’autres langages(*PHP par exemple*)

En fait, Il y a une toute petite différence entre les deux, et celle que vous retenez relève de la préférence personnelle. Prenez-en une, et tenez‑vous y toutefois : du code avec des mises entre guillemets diversifiées peut amener des confusions, en particulier si vous utilisez les deux sortes dans la même chaîne ! Ce qui suit renvoie une erreur :
```jsx
let slogan = 'Vivre ensemble, égaux & différents";
```
**Faites attention cependant à un point :**
>si votre chaine contient un caractère qui est le même que le délimiteur de chaine choisi, il faudra neutraliser ce caractère en l’échappant au moyen d’un antislash `\` ou changer de délimiteur.

```jsx
let phrase1 = "LADAPT | L'association pour l'insertion sociale et professionnelle des personnes handicapées";
//délimiteur guillemets doubles"", pas besoin d'échapper les apostrophes
let phrase2 = 'LADAPT | L'association pour l'insertion sociale et professionnelle des personnes handicapées';
//délimiteur apostrophe '', renvoie d'un erreur car les apostrophes du texte n'ont pas été echappées
let phrase3 = 'LADAPT | L\'association pour l\'insertion sociale et professionnelle des personnes handicapées';
//délimiteur apostrophe '', déclaration correcte : les apostrophes sont echappées
```

## Concaténation

Concaténer est un terme de programmation qui signifie « attacher ensemble ». Pour attacher des chaînes en JavaScript, on utilise l'opérateur plus `+` , le même que l'on utilise pour ajouter deux nombres, mais dans ce contexte il fait quelque chose de différent. testez cet exemple dans la console.
```jsx
let one = 'Hello, ';
let two = 'comment allez‑vous ?';
let joined = one + two;
alert(joined);
```
Il en résulte que la variable nommée `joined` contient la valeur `'Hello, comment allez‑vous ?'`.

Dans l'exemple, nous avons juste attaché deux chaînes ensemble, mais vous pouvez en attacher autant que vous voulez, pour autant que vous mettiez un signe + entre chacune.
Essayez ceci :
```jsx
let multiple = one + one + one + one + two;
alert(multiple);
```
Vous pouvez aussi mélanger des variables avec des vraies chaînes(*chaînes littérales*). testez :
```jsx
let laReponse = 42;
let phrase = laReponse + 'est la réponse à "la grande question sur la vie, l’univers et le reste"!';
alert(phrase);
```

## Les littéraux de gabarits

On a vu plus tôt dans ce cours qu’il fallait en JavaScript toujours entourer nos chaines de caractères (nos textes) avec des apostrophes ou des guillemets.

Il existe en fait une troisième manière introduite récemment d’entourer des chaines de caractères en JavaScript qui va utiliser des accents graves `` ` ``.

La grande différence entre l’utilisation d’accents graves ou l’utilisation d’apostrophes ou de guillemets est que toute expression placée entre les accents graves va être interprétée en JavaScript. Pour le dire simplement : tout ce qui renvoie une valeur va être remplacé par sa valeur.

Cela signifie notamment qu’on va pouvoir placer du texte et des variables ensemble sans avoir besoin d’utiliser d’opérateur de concaténation puisque les variables vont être interprétées, c’est-à-dire remplacées par leur valeur.

Pour que cela fonctionne bien, il va cependant falloir respecter une certaine syntaxe : il va falloir placer les expressions entre ${ et }.

Prenons immédiatement un exemple pour bien comprendre. 
```jsx
let x = 2;
let y = 40;
//version avec concaténation
alert('x contient ' + x + '\ny contient ' + y +'\nLeur somme vaut ' + (x + y));
// version utilisant les littéraux de gabarits.
alert(`x contient ${x}
y contient ${y}
Leur somme vaut ${x + y}`);
```
## Indexation des chaînes de caractères
### De quelle manière sont indexées les chaînes ?

Chaque caractère qui se trouve dans une chaîne correspond à un numéro d’index. La numérotation commence par 0.
exemple pour la chaine de caractère `LADAPT est une association.`

![chaîne de caractères](https://i.postimg.cc/FKMydhpz/Capture-chaine.png "chaîne de caractères")

Le premier caractère de la chaîne est `L` et correspond à l’index 0. Le dernier caractère est `.`, il correspond à 26.
Les espaces sont également indexés: 6, 10  et 14.
### Déterminer la longueur d’une chaîne
En utilisant la propriété `length`, vous pouvez obtenir le nombre de caractères dans une chaîne.
```jsx
"LADAPT est une association.".length;// renvoie 27
```
> **ATTENTION**
>
> la propriété `length` renvoie le nombre réel de caractères, dans l'exemple 27 et pas le numéro d’index final 26.
> 
> il y a bien 27 caractères numérotés de 0 à 26

### Accéder aux caractères
Dans la console, entrez l'instruction suivante : 
```jsx
"LADAPT est une association."[5];
```
?[Quel resultat obtenez-vous ?](single)
- [ ] A
- [ ] D
- [ ] P
- [x] T
- [ ] L

En utilisant des crochets et le bon numéro d'index, vous pouvez accéder à n’importe quel caractère de la chaîne.

Vous pouvez également utiliser la méthode charAt() pour renvoyer le caractère en utilisant le numéro d’index comme paramètre
```jsx
"LADAPT est une association.".charAt(7); // renvoie 'e'
```
Vous pouvez utiliser `indexOf()` pour renvoyer le numéro d’index par la première instance d’un caractère.
```jsx
"LADAPT est une association.".indexOf('A'); // renvoie 1
```
Bien que `A` apparaisse deux fois dans la chaîne , indexOf() obtiendra la première instance, ici 1.

lastIndexOf() permet de trouver la dernière instance.
```jsx
"LADAPT est une association.".lastIndexOf('A'); // renvoie 3
```
Avec ces deux méthodes, vous pouvez également rechercher plusieurs caractères dans la chaîne. Elles renverront le numéro d’index du premier caractère dans l’instance.
```jsx
"LADAPT est une association.".indexOf("est");// renvoie 7
```
Si vous mettez un caractère ou une chaîne en parametre de `indexOf()`ou`lastIndexOf()` qui n'apparait pas dans la chaine, elles renverrons l'index `-1`.
```jsx
"LADAPT est une association.".indexOf("O");// renvoie -1
"LADAPT est une association.".LastIndexOf("à");// renvoie -1
```
## Récapitulatif
> Les chaînes de caractères sont utiles pour stocker des données qui peuvent être représentées sous forme de texte.
> Parmi les opérations les plus utilisées pour manipuler les chaînes de caractères, on a :
> - la vérification de leur longueur avec `length`,
> - la construction et la concaténation avec les opérateurs `+` et `+=`, 
> - la recherche de sous-chaîne avec les méthodes `includes()` ou `indexOf()`
> - l'extraction de sous-chaînes avec la méthode `substring()`.
> 
> Il existe un grand nombre de méthodes qui permettent des opérations sur les chaînes de caractères, toutes référencées sur [le site pour les developpeurs  de la fondation mozilla](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String)

## Exercices
### Exercice 1
Écrivez une fonction `bonjour(str)` qui prend en paramètre un Prénom sous forme de chaîne de caractères et qui retourne "Bonjour 'Prenom', que la Force soit avec toi".

@[Exercice 1 : Créez la fonction bonjour()]({ "stubs": ["exo1Chaines.js"], "command":"node_modules/mocha/bin/mocha exo1Chaines_test.js --reporter list"})

::: Proposition de correction
avec littéraux de gabarits
```jsx
function bonjour(prenom) {
  return `Bonjour ${prenom}, que la Force soit avec toi`;
}

console.log(bonjour("Suzanne")); // doit afficher "Bonjour Suzanne, que la Force soit avec toi"
```
avec concaténation
```jsx
function bonjour(prenom) {
  return "Bonjour " + prenom + ", que la Force soit avec toi";
}

console.log(bonjour("Suzanne")); // doit afficher "Bonjour Suzanne, que la Force soit avec toi"
```
:::
### Exercice 2
Écrivez une fonction `verificationMotDePasse(password)` qui prend un argument de type string. Elle devra retourner un boolean qui vaut `true` si le password fait au moins 12 caractères et `false` si moins.

@[Exercice 2 : Vérification de mot de passe()]({ "stubs": ["exo2Chaines.js"], "command":"node_modules/mocha/bin/mocha exo2Chaines_test.js --reporter list"})

::: Proposition de correction
```jsx
function verificationMotDePasse(password) {
    return password.length >= 12;
}
```
:::
### Exercice 3
 - Créez une variable appelée `phrase` qui contient la chaîne de caractères suivante: "Bonjour tout le monde, comment allez-vous aujourd'hui?".
 - Utilisez la méthode [`charAt()`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/charAt) pour stocker le 3ème caractère de la variable `phrase` dans une variable `caractere3 `.
 - Utilisez la méthode [`substring()`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/substring) pour extraire la sous-chaîne de caractères allant de la position 10 à la position 20 de la variable "phrase" et stockez-la dans une nouvelle variable appelée "sousPhrase".
 - Utilisez la méthode [`indexOf()`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) pour trouver la position du premier caractère 'a' dans la variable "phrase" et stockez-la dans une variable appelée "indexA".

@[Exercice 3 : Chaînes et index]({ "stubs": ["exo3Chaines.js"], "command":"node_modules/mocha/bin/mocha exo3Chaines_test.js --reporter list"})

::: Proposition de correction
```jsx
let phrase = "Bonjour tout le monde, comment allez-vous aujourd'hui?" ;
// contient la chaine de caratères : "Bonjour tout le monde, comment allez-vous aujourd'hui?"

let caractere3 = phrase.charAt(2) ;
// contient le 3ème caractère de la variable "phrase" : le caractère d'index 2

let sousPhrase = phrase.substring(9,20);
// contient la sous-chaîne de caractères allant de la position 10 à la position 20 de la variable "phrase"

let indexA = indexOf('a');
// contient la position du premier caractère 'a' dans la variable "phrase"
```
:::

### Exercice 4
Écrivez une fonction `lettreEnChiffre(str)` qui prend un argument de type string. Elle devra retourner cette même string mais en remplacant les e (ou E) par des 3, les i ou I) par des 1 et les o (ou O) par des 0 et les (t ou T) par des 7 :

Utilisez la méthode [`replace()`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace).

Le remplacement global ne peut être fait qu'avec une expression régulière, prenez le temps de bien lire [la documentation de replace sur le site mdn](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

```jsx
lettreEnChiffre("LADAPT | L’association pour l’insertion sociale et professionnelle des personnes handicapées");
// renvoie "LADAP7 | L’ass0c1a710n p0ur l’1ns3r7i0n s0c1al3 37 pr0f3ss10nn3ll3 d3s p3rs0nn3s hand1capé3s"
```

@[Exercice 4 : lettres en chiffres]({ "stubs": ["exo4Chaines.js"], "command":"node_modules/mocha/bin/mocha exo4Chaines_test.js --reporter list"})

::: Proposition de correction
```jsx
function lettreEnChiffre(str) {
    str = str.replace(/i/gi, '1'); // Utilisation de global et ignore avec replace()
    str = str.replace(/e/gi, '3');
    str = str.replace(/o/gi, '0');
    str = str.replace(/t/gi, '7');
    return str;
}
```
:::

### Exercice 5
Écrivez une fonction `vowelCount(str)` qui prend en paramètre une chaîne de caractères et qui retourne le nombre de voyelles contenues dans la chaîne.
```jsx
vowelCount("Hello World!"); // doit renvoyer 3
vowelCount("JavaScript"); // doit renvoyer 3
```
::: ***indice 1*** :
déclarer une variables voyelles = 'aeiouyAEIOUY' et une variable compteur = 0en début de fonction
:::

::: ***indice 2*** :
utiliser la propriété length pour déterminer la longueur de la chaîne `str`
:::

::: ***indice 3*** :
la méthode indexOf() permet de vérifier si un élément donné est présent dans une chaîne, si elle renvoie autre chose que `-1` cela veut dire que l'élément est présent dans la chaine.
:::

@[Créez la fonction vowelCount]({ "stubs": ["exo5Chaines.js"], "command":"node_modules/mocha/bin/mocha exo5Chaines_test.js --reporter list"})

::: Proposition de correction
```jsx
function vowelCount(str) {
  let voyelles = "aeiouyAEIOUY";
  let compteur = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (voyelles.indexOf(str[i]) !== -1) {
      compteur++;
    }
  }
  return compteur;
}

console.log(vowelCount("Hello World!")); // doit afficher 3
console.log(vowelCount("javascript")); // doit afficher 3

```
Dans cette solution, on utilise la propriété length pour déterminer la longueur de la chaîne, une boucle for pour parcourir tous les caractères de la chaîne, et la méthode indexOf() pour vérifier si un caractère donné est présent dans la chaîne "voyelles".

Si la méthode `voyelles.indexOf(str[i])` retourne un indice différent de -1 cela signifie que le caractère est une voyelle, donc on incrémente le compteur.
La fonction retourne finalement le nombre de voyelles dans la chaine de caractère.

:::
### Exercice 6
Écrivez une fonction `verificationMotDePasseAvance(password)` qui prend un argument de type string.

Elle devra retourner un boolean qui vaut `true` si les **toutes** les conditions suivantes sont respectées :
- 'password' fait au moins 12 caractères
- 'password' contient au moins 1 chiffres
- 'password' contient au moins 1 lettre en majuscule
- 'password' contient au moins 1 lettre en minuscule
- 'password' contient au moins 1 des caractères suivant : &@$£€\*µ¥ƒ_-)([]{}#

Elle devra retourner `false` si au moins une des conditions n'est pas respectée.

:::Indice

Vous pouvez vous inspirer de l'exercice 5 pour verifier la présence de certains caractères

```jsx

function verificationMotDePasseAvance(password) {
    //verification de la longueur
    
    let longueurCheck;
    
    //vérification de la présence d'un chiffre
    
    let chiffresCheck;
    
    /*vérification de la présence d'une minuscule*/
    
    let minusCheck;
    
    /*vérification de la présence d'une majuscule*/
    
    let majCheck;
   
    // verification de la présence d'un caractère de la liste &@$£€*µ¥ƒ_-)([]{}#
    
    let carSpecialCheck;
    
   
    return longueurCheck && chiffresCheck && minusCheck && majCheck && carSpecialCheck;
}

```
:::

@[Exercice 6 : Vérification de mot de passe avancée]({ "stubs": ["exo6Chaines.js"], "command":"node_modules/mocha/bin/mocha exo6Chaines_test.js --reporter list"})

::: Proposition de correction
```jsx

function verificationMotDePasseAvance(password) {
    //verification de la longueur
    let longueurCheck = password.length >= 12;
    //vérification de la présence d'un chiffre (sans utiliser les expressions régulières)
    let chiffres = "0123456789";
    let chiffresCheck = false;
    for (let i = 0; i < password.length; i++) {
        if (chiffres.indexOf(password[i]) != -1) {
            chiffresCheck = true;
            break;
        }
    }
    
    /*vérification de la présence d'une minuscule (en les expressions régulières)
    il est possible en utilisant un chaine "abcdefghijklmnopqrstuvwxyz" d'utiliser la même methode que pour les chiffres*/
    let minus = /[a-z]/g;
    let minusCheck = password.match(minus).length!= null;// voir le documentation de String.prototype.match() sur https://developer.mozilla.org/
    
    /*vérification de la présence d'une majuscule (en les expressions régulières)*/
    let maj = /[A-Z]/g;
    let majCheck = password.match(maj) != null;// voir le documentation de String.prototype.match() sur https://developer.mozilla.org/
    
    // verification de la présence d'un caractère de la liste &@$£€*µ¥ƒ_-)([]{}# (sans utiliser les expressions régulières)
    let carSpecial = "&@$£€*µ¥ƒ_-)([]{}#";
    let carSpecialCheck = false;
    for (let i = 0; i < password.length; i++) {
        if (carSpecial.indexOf(password[i]) != -1) {
            carSpecialCheck = true;
            break;
        }
    }
    return longueurCheck && chiffresCheck && minusCheck && majCheck && carSpecialCheck;
}

```
:::
