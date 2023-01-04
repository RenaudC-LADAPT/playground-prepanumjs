# Les Variables
## Qu’est ce qu’une variable
Une variable est un conteneur servant à stocker des informations de manière temporaire, comme une chaine de caractères (un texte) ou un nombre par exemple.

Le propre d’une variable est de pouvoir varier, c’est-à-dire de pouvoir stocker différentes valeurs au fil du temps et c’est cette particularité qui les rend si utiles.

Notez bien déjà qu’une variable en soi et la valeur qu’elle va stocker sont deux éléments différents et qui ne sont pas égaux. Encore une fois, une variable n’est qu’un conteneur. Vous pouvez imaginer une variable comme une boite dans laquelle on va pouvoir placer différentes choses au cours du temps.

Les variables sont l’une des constructions de base du JavaScript et vont être des éléments qu’on va énormément utiliser. Nous allons illustrer leur utilité par la suite.

[![boites qui contient une information](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables/boxes.png)](https://developer.mozilla.org)
Exemple : dans un programme de jeu vidéo, j’ai besoin de stocker le score et les points de vie du joueur, j’utiliserai des variables.

## Déclaration des variables en JavaScript
Pour pouvoir utiliser les variables, il va déjà falloir les créer. Lorsqu’on crée une variable en JavaScript, on dit également qu’on « déclare » une variable.
Vous pouvez **déclarer** une variable en utilisant le mot clé **let** ou le mot clé **const**.
```jsx
let point_de_vie;
const vie_max;
```
Historiquement, on utilisait le mot clé **var** pour définir ses variables en JavaScript. Si vous avez à faire à un script qui a été codé avant 2015, c’est ce mot clé que vous retrouverez.

Désormais, l’utilisation de **var** est déconseillée dans la plupart des cas, bien qu’elle fonctionne toujours. Il est plutôt recommandé d’utiliser les mots clés **let** et **const** pour définir vos variables.

### let vs const
Dans ce module de découverte nous n’entrerons pas dans les détails techniques.
On utilisera **let** pour déclaré des variables et **const** pour déclarer des constantes.

Une **constante** est similaire à une **variable** au sens où c’est également un conteneur pour une valeur. Cependant, à la différence des variables, on ne va pas pouvoir modifier la valeur d’une constante.

## Initialiser une variable
Lorsqu’on assigne une valeur pour la première fois à une variable, c’est-à-dire lorsqu’on stocke une valeur dans une variable qui n’en stockait pas encore, on dit également qu’on initialise une variable.

On va pouvoir initialiser une variable après l’avoir déclarée ou au moment de sa déclaration. Les deux façons de faire sont équivalentes en termes de résultat mais il est plus rapide (en termes d’écriture de code) d’initialiser une variable lors de sa déclaration puisque cela nous va nous éviter d’avoir à réécrire le nom de la variable.

Pour initialiser une variable, on utilise l’opérateur `=` qui est dans ce cas non pas un opérateur d’égalité mais un opérateur d’assignation ou d’affectation comme ceci :
```jsx
//déclarer puis initialiser
let nom_du_joueur;
nom_du_joueur = 'Suzanne';
//déclarer et initialiser en même temps
let score = 10;
```
Ce point est un point très important à retenir pour éviter les confusions futures : 
le signe `=` ne possède pas du tout la même signification que le « égal » mathématique que vous utilisez dans la vie de tous les jours.

Ici, c’est un opérateur d’affectation. Il sert à indiquer qu’on affecte (ou « assigne » ou encore « stocke ») la valeur à droite du signe dans le conteneur à gauche de celui-ci. Encore une fois, la variable n’est pas « égale » à sa valeur.

Vous pouvez également noter deux autres choses intéressantes dans le code ci-dessus : tout d’abord, vous pouvez voir que le mot clef **let** n’est utilisé qu'une seule fois et ne doit être utilisé que pour déclarer une variable. Lorsqu’on manipule une variable ensuite, on se contente d’utiliser son nom.

Ensuite, vous remarquez qu’on utilise des apostrophes droits ou guillemets simples pour entourer la valeur **‘Suzanne’** mais pas pour la valeur **10**. Cela est dû au fait que **‘Suzanne’** est une valeur textuelle tandis que **10**  est un nombre et ces valeurs ne vont pas pouvoir être manipulées de la même façon en JavaScript.

Nous verrons cela en détail dans une prochaine étape.

## Exercices
### Dans l'exercice ci-dessous vous devez créer les variables suivantes :
- **num** qui contient le nombre 42
- **str** qui contient la chaîne de caractère *'42'*
- **bool** qui contient la valeur booléenne *true*
- **flt** qui contient la valeur 0.42

@[Créez les variables demandées ci-dessus]({ "stubs": ["exo1Variables.js"], "command":"node_modules/mocha/bin/mocha exo1Variables_test.js --reporter list"})
::: Correction
```jsx
// Créez ci-dessous les variables demandées
let num = 42;
let str = '42';
let bool = true;
let flt = 0.42;
```
:::
?[Lequel de ces mots clés est obsolète et ne doit pas être utilisé]
-[ ] let
-[ ] const
-[x] var

?[Que signifie le symbole = dans "let x = 2;" ]
-[ ] x est égal à 2
-[x] la valeur 2 est affecté à la variable x

## Règles de nommage des variables
### Nom des variables
Il existe deux limitations pour un nom de variable en JavaScript :

>Le nom ne doit contenir que des lettres (majuscule ou minuscule), des chiffres, des symboles $ ou _
>
>Le premier caractère ne doit pas être un chiffre.
```jsx
let userName;
let test123;
```
Le signe dollar '$' et l’underscore ' _ ' peuvent également être utilisé dans les noms. Ce sont des symboles réguliers, tout comme les lettres, sans aucune signification particulière.

Ces noms sont valides :
```jsx
let $ = 1; // déclarer une variable avec le nom "$"
let _ = 2; // et maintenant une variable avec le nom "_"
```
Exemples de noms de variables incorrects :
```jsx
let 1a; // ne peut pas commencer avec un chiffre

let mon-nom; // un trait d'union '-' n'est pas autorisé dans le nom
```
### Attention à la casse
on parle de « casse » pour désigner l'alternance entre capitale (ou majuscule) et minuscule.

La sensibilité à la casse est essentielle en informatique, selon que les différents langages employés font ou non une distinction entre majuscule et minuscule.

**JavaScript est sensible à la casse**

Des variables nommées `apple` et `Apple` sont deux variables différentes.
#### le camelCase
Lorsque le nom contient plusieurs mots, le camelCase est couramment utilisé.

Le camel case (de l'anglais, littéralement « casse de chameau ») consiste à écrire un ensemble de mots en les liant sans espace ni ponctuation, et en mettant en capitale la première lettre de chaque mot. La première lettre du premier mot est en minuscule. 

Autrement dit les mots se succèdent sans espace, chaque mot à l’exception du premier commence par une majuscule : `monTresLongNom`.

Exemples en Javascript :
```jsx
const body = document.getElementsByTagName("body");
const myFirstParagraph = document.createElement("p");
const helloWorld = document.createTextNode("Hello, world!");
myFirstParagraph.appendChild(helloWorld);
body.item(0).appendChild(myFirstParagraph);
```

### Autres caractères autorisés mais...
Il est possible d’utiliser les caracyères accentués ou les caractères de n’importe quelle langue, y compris les lettres cyrilliques, les logogrammes chinois, etc., comme ceci :
```jsx
let prénom = '...';
let имя = '...';
let 我 = '...';
```
Techniquement, il n’y a pas d’erreur ici, ces noms sont autorisés, mais il existe une convention internationale d’utiliser uniquement les caracteres de a à z, A à Z et 0 à 9 dans les noms de variables.

### Noms réservés
Il existe une liste de [mots réservés](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Lexical_grammar#mots-cl%C3%A9s), qui ne peuvent pas être utilisés comme noms de variables, car ils sont utilisés par le langage lui-même.

Par exemple, les mots let, class, return, function sont réservés.

Le code ci-dessous donne une erreur de syntaxe :
```jsx
let let = 5; // impossible de nommer une variable "let", erreur!
let return = 5; // on ne peut pas la nommer "return" aussi, erreur!
```

## Exercice
?[Lequel de ces exemples utilise correctement le camelCase](single)
- [ ] let my_code_date = "c";
- [x] let myCodeDate = "c";
- [ ] let MycodeDate = "c";
- [ ] let MyCodeDate = "c";

?[Comment créeriez-vous une variable str qui contiendrait la chaîne de caractères "LADAPT"](single)
- [ ] let LADAPT;
- [ ] 'LADAPT';
- [ ] let str = LADAPT;
- [x] let str = 'LADAPT';

?[Comment changeriez-vous le contenu d'une variable déjà existante str par la chaîne de caractères "Suzanne"](single)
- [ ] let str = 'Suzanne';
- [x] str = 'Suzanne';
- [ ] str = Suzanne;
- [ ] let str = Suzanne;

?[Lesquels des déclarations ci dessous sont valables en JavaScript](multiple)
- [ ] let 1Step = 1;
- [ ] let USA! = 'United States Of America';
- [x] let maVariable = 'x';
- [ ] let this Is A Good Variable = 'Yes';
- [x] let camelCase = 'Its got the look!';
