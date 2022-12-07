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
Dans ce module de découverte nous n’entrerons dans les détails techniques.
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

Vous pouvez également noter deux autres choses intéressantes dans le code ci-dessus : tout d’abord, vous pouvez voir que le mot clef **let** n’est utilisé q"une seule fois et ne doit être utilisé que pour déclarer une variable. Lorsqu’on manipule une variable ensuite, on se contente d’utiliser son nom.

Ensuite, vous remarquez qu’on utilise des apostrophes droits ou guillemets simples pour entourer la valeur ‘**Suzanne’** mais pas pour la valeur **10**. Cela est dû au fait que ‘**Suzanne’** est une valeur textuelle tandis que **10**  est un nombre et ces valeurs ne vont pas pouvoir être manipulées de la même façon en JavaScript.

Nous verrons cela en détail dans une prochaine étape.

## Exercice 1
### Dans l'exercice ci-dessous vous devez créer les variables suivantes :
- **num** qui contient le nombre 42
- **str** qui contient la chaîne de caractère *42*
- **bool** qui contient la valeur booléenne *true*
- **flt** qui contient la valeur 0,42
@[Créez les variables demandées ci-dessus]({ "stubs": ["exo1Variables.js"], "command":"node_modules/mocha/bin/mocha exo1Variables_test.js --reporter list"})
# Les types de données en JavaScript 
En JavaScript il existe différents types de données:
- `String` ou « chaine de caractères » en français ;
- `Number` ou « nombre » en français ;
- `Boolean` ou « booléen » en français ;
- `Null` ou « nul / vide » en français;
- `Undefined` ou « indéfini » en français ;
- `Symbol` ou « symbole » en français ;
- `Object` ou « objet » en français ;

La fonction `typeof(variable)` renvoie le type de la variable qui a été passé comme argument.
## Détail des différents types
Consultez [cette page de l’excellent site de Pierre GIRAUD](https://www.pierre-giraud.com/javascript-apprendre-coder-cours/type-donnee/) pour en apprendre plus sur les types de données
## Exercice 2
### Dans l'exercice ci-dessous vous devez compléter le code pour afficher le type des variables num, str, bool, flt, array & x :
@[complétez le code]({ "stubs": ["exo2Variables.js"], "command":"node_modules/mocha/bin/mocha exo2Variables_test.js --reporter list"})
# Opérations sur les variables en JavaScript
Il existe de nombreux opérateur en JavaScript nous allons voir ici une partie de ces opérateurs

## Les opérateurs mathématiques
De nombreux opérateurs nous sont connus de l’école. Ce sont les additions +, multiplications \*, soustractions -, dicisions / etc.
Les opérations mathématiques suivantes sont supportées en javascript:

- Addition +,
- Soustraction -,
- Multiplication \*,
- Division /,
- Reste %,
- Exponentiation **.
Les quatre premières sont assez simples, tandis que % et ** nécéssitent quelques explications.

### Reste % (Modulo)
L’opérateur reste %, malgré son apparence, n’est pas lié aux pourcentages.

Le résultat de a % b est le reste de la division entière de a par b.

Par exemple:
```jsx
5 % 2 // 1, le reste de 5 divisé par 2
8 % 3 // 2, le reste de 8 divisé par 3
```
### Exponentiation 
L’opérateur d’exponentiation a ** b multiplie a par lui-même b fois. En mathématiques à l’école, nous écrivons cela ab.

Par exemple:
```jsx
2 ** 2; // 2² = 4
2 ** 3; // 2³ = 8
2 ** 4; // 2⁴ = 16
```
Mathématiquement, l’exponentiation est également définie pour les nombres non entiers.

Par exemple, une racine carrée est une exponentiation de ½ :
```jsx
4 ** (1/2); // 2 (la puissance de 1/2 équivaut à une racine carrée)
8 ** (1/3); // 2 (la puissance de 1/3 équivaut à une racine cubique)
```
###Concaténation de chaînes de caractères
Découvrons les fonctionnalités des opérateurs JavaScript qui vont au-delà de l’arithmétique scolaire.

Habituellement, l’opérateur + additionne des chiffres.

Mais si le binaire + est appliqué aux chaînes de caractères, il les fusionne (concatène) :
```jsx
let s = "my" + "string";
console.log(s); // mystring
```
Notez que si l’un des opérandes est une chaîne de caractères, l’autre est automatiquement converti en chaîne de caractères.

Par exemple :
```jsx
console.log( '1' + 2 ); // "12"
console.log( 2 + '1' ); // "21"
```
Peu importe que le premier opérande soit une chaîne de caractères ou le second. La règle est simple : si l’un des opérandes est une chaîne de caractères, convertissez l’autre également en une chaîne de caractères.

Cependant, notez que les opérations se déroulent de gauche à droite. S’il y a deux nombres suivis d’une chaîne, les nombres seront ajoutés avant d’être convertis en chaîne :
```jsx
console.log(2 + 2 + '1' ); // "41" et non "221"
```
Ici, les opérateurs travaillent les uns après les autres. Le premier + additionne deux nombres, donc il renvoie 4, puis le + suivant ajoute la chaîne de caractères 1, donc c’est comme 4 + '1' = 41.
```jsx
console.log('1' + 2 + 2); // "122" and not "14"
```
Ici, le premier opérande est une chaîne de caractères, le compilateur traite également les deux autres opérandes comme des chaînes de caractères. Le 2 est concaténé à '1', donc c’est comme '1'+ 2 = "12" et "12" + 2 = "122".

Le binaire + est le seul opérateur qui prend en charge les chaînes de caractères de cette manière. D’autres opérateurs arithmétiques ne fonctionnent qu’avec des nombres et convertissent toujours leurs opérandes en nombres.

Voici l’exemple pour la soustraction et la division:
```jsx
console.log( 6 - '2' ); // 4, convertit '2' en nombre
console.log( '6' / '2' ); // 3, convertit les deux opérandes en nombre
```
## Exercice 3
### Opérations sur les variables dans l'exercice ci-dessous vous devez :
- Appliquez à num l'opérateur d'incrémentation
- Concaténez à la chaîne str la chaîne " est la réponse à la grande question sur la vie, l’univers et le reste."
- Inversez la valeur logique de bool
- Ajoutez à flt la valeur contenue dans num
@[complétez le code]({ "stubs": ["exo3Variables.js"], "command":"node_modules/mocha/bin/mocha exo3Variables_test.js --reporter list"})
