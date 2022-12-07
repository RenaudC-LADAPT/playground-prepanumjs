# Les Variables
## Qu’est ce qu’une variable
Une variable est un conteneur servant à stocker des informations de manière temporaire, comme une chaine de caractères (un texte) ou un nombre par exemple.
Le propre d’une variable est de pouvoir varier, c’est-à-dire de pouvoir stocker différentes valeurs au fil du temps et c’est cette particularité qui les rend si utiles.
Notez bien déjà qu’une variable en soi et la valeur qu’elle va stocker sont deux éléments différents et qui ne sont pas égaux. Encore une fois, une variable n’est qu’un conteneur. Vous pouvez imaginer une variable comme une boite dans laquelle on va pouvoir placer différentes choses au cours du temps.
Les variables sont l’une des constructions de base du JavaScript et vont être des éléments qu’on va énormément utiliser. Nous allons illustrer leur utilité par la suite.
[![boites qui contient une information](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables/boxes.png)](https://developer.mozilla.org)
Exemple : dans un programme de jeu vidéo, j’ai besoin de stocker le score et les points de vie du joueur, j’utiliserai des variables.
## D**éclaration des variables en JavaScript**

Pour pouvoir utiliser les variables, il va déjà falloir les créer. Lorsqu’on crée une variable en JavaScript, on dit également qu’on « déclare » une variable.

Vous pouvez **déclarer** une variable en utilisant le mot clé **let** ou le mot clé **const**.

```jsx
let point_de_vie;
const vie_max;
```

Historiquement, on utilisait le mot clé **var** pour définir ses variables en JavaScript. Si vous avez à faire à un script qui a été codé avant 2015, c’est ce mot clé que vous retrouverez.
Désormais, l’utilisation de **var** est déconseillée dans la plupart des cas, bien qu’elle fonctionne toujours. Il est plutôt recommandé d’utiliser les mots clés **let** et **const** pour définir vos variables.

## let vs const

Dans ce module de découverte nous n’entrerons dans les détails techniques.

On utilisera **let** pour déclaré des variables et **const** pour déclarer des constantes.

Une **constante** est similaire à une **variable** au sens où c’est également un conteneur pour une valeur. Cependant, à la différence des variables, on ne va pas pouvoir modifier la valeur d’une constante.

# **Initialiser une variable**

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

Ensuite, vous remarquez qu’on utilise des apostrophes droits ou guillemets simples pour entourer la valeur ‘**Suzanne’** mais pas pour la valeur **10**. Cela est dû au fait que ‘**Suzanne’** est une valeur textuelle tandis que **10**  est un nombre et ces valeurs ne vont pas pouvoir être manipulées de la même façon en JavaScript. Nous verrons cela en détail dans une prochaine étape.
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
### Dans l'exercice ci-dessous vous devez compléter le code pour afficher le type des variables num, str, bool & flt :
@[complétez le code]({ "stubs": ["exo2Variables.js"], "command":"node_modules/mocha/bin/mocha exo2Variables_test.js --reporter list"})

# Opérations sur les variables en JavaScript 

## Exercice 3
### Opérations sur les variables dans l'exercice ci-dessous vous devez :
- Appliquez à num l'opérateur d'incrémentation
- Concaténez à la chaîne str la chaîne " est la réponse à la grande question sur la vie, l’univers et le reste."
- Inversez la valeur logique de bool
- Ajoutez à flt la valeur contenue dans num
@[complétez le code]({ "stubs": ["exo3Variables.js"], "command":"node_modules/mocha/bin/mocha exo3Variables_test.js --reporter list"})
