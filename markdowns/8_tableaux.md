# Les tableaux en JavaScript

À présent, nous allons parler des tableaux. Les tableaux ont une structure qui permet de stocker plusieurs valeurs dans une seule variable.

En JavaScript, les tableaux sont avant tout des objets. Cependant, dans la plupart des langages, les tableaux ne sont pas des objets mais simplement des éléments de langages spéciaux qui peuvent tout de même contenir plusieurs valeurs.

Nous reviedrons sur les objets dans la séquence suivante

## Créer un tableau
- Pour débuter, ouvrez une nouvelle fenêtre : *Ctrl + N (sous Windows) ou Cmd + N (sous Mac).*
- Remplacez l'URL par about:blank pour avoir une page vierge.
- Ouvrez la console : *appuyez sur les touches Ctrl + Maj + J (sous Windows) ou Cmd + Opt + J (sous Mac).*
- coller le code ci-dessous dans la console puis appuyer sur entrée

```jsx
let monPremierTableau = ['engagement', 'militant', 'sensibilisation'];
monPremierTableau;
```

Comme avec les nombres ou les chaînes de caractères, on declare une variable avec `let` ou `const`, puis on l'initialise avec une valeur de tableau. Un tableau est délimité par des crochets `[` `]`. Chaque élément du tableau sera séparé de l'autre par une virgule.

Dans ma variable monPremierTableau, par exemple, j'ai un tableau qui contient trois éléments, `['engagement', 'militant', 'sensibilisation']`

Un tableau est capable de stocker tous types d'éléments. Contrairement à d'autres langages de programmation, JavaScript permet de stocker, dans une unique variable, plusieurs types de données.

La liste d'éléments du tableau peut ainsi contenir des chaînes de caractères, des nombres, des booléens ainsi que d'autres objets. Un tableau peut par exemple contenir un ou plusieurs autres tableaux.

 ex : `[1929, 'Association', ['engagement', 'militant', 'sensibilisation']]`.

### un peu de vocabulaire
![schéma d'array](https://raw.githubusercontent.com/RenaudC-LADAPT/playground-prepanumjs/master/arrayJS.png)
**tableau** est la traduction de l'anglais **array**, une autre facon de déclarer un tableau serait d'utiliser le constructeur `Array()` avec le mot clef `new` 
```jsx
let monDeuxiemeTableau = new Array(1929, 'Association', ['engagement', 'militant', 'sensibilisation'])
monDeuxiemeTableau;
```
Quand on crée un tableau, chaque valeur, ou **élément** du tableau, est placée à un emplacement ou un **index** dans le tableau

Chaque **élément** qui se trouve dans un tableau correspond à un numéro d’**index**. La numérotation commence par **0** :

 `[1929, 'Association', ['engagement', 'militant', 'sensibilisation']]`
 
- 0: `1929`
- 1: `"Association"`
- 2: `['engagement', 'militant', 'sensibilisation']`

### Exercice
?[Dans le tableau suivant : new Array('un', 'deux', 'trois', 'quatre'), Quel est l'index de l'element 'deux' ? ](single)
- [ ] 0
- [x] 1
- [ ] 2
- [ ] 3
- [ ] 4

Le nombre total d’éléments dans le tableau est sa **`length`** (longueur) :

```jsx
let monDeuxiemeTableau = new Array(1929, 'Association', ['engagement', 'militant', 'sensibilisation'])
monDeuxiemeTableau.length; // 3
```
### Exercice
?[Quel est la longueur de ce tableau : new Array(1, 3, 5, 7) ? ](single)
- [ ] 7
- [x] 4
- [ ] 3
- [ ] 5


## Accéder aux éléments d'un tableau
Les éléments de tableau sont donc numérotés en commençant par **0**.

### Accéder à un élément

On peut obtenir un élément de tableau par son numéro d'index grace aux crochets :
```jsx
let monDeuxiemeTableau = new Array(1929, 'Association', ['engagement', 'militant', 'sensibilisation'])
monDeuxiemeTableau[0]; // 1929
monDeuxiemeTableau[1]; // Association
monDeuxiemeTableau[2]; // ['engagement', 'militant', 'sensibilisation']
monDeuxiemeTableau[2][0]; // engagement
```
Vous avez surement remarqué que dans le 4e exemple : `monDeuxiemeTableau[2][0]` il y a deux index entre crochets et on obtient en retour `'engagement'`

En effet  `monDeuxiemeTableau[2]` correspond au troisieme élément de monDeuxiemeTableau : `['engagement', 'militant', 'sensibilisation']`

`monDeuxiemeTableau[2][0]` correspond donc au premier élément de `['engagement', 'militant', 'sensibilisation']` d'où le `'engagement'` en retour.
#### Exercices
Voici la déclaration d'un tableau :

`let legumes = ['aubergine', 'courgette', 'haricots verts', 'brocoli', 'patate douce']`

?[quel est l'élément situé à l'index 0 ](single)
- [ ] 'patate douce'
- [ ] 'brocoli'
- [ ] aucun, legumes[0] n'est pas défini
- [x] 'aubergine'
?[quel est l'élément situé à l'index 5 ](single)
- [ ] 'patate douce'
- [ ] 'brocoli'
- [x] aucun, legumes[5] n'est pas défini
- [ ] 'aubergine'
### Modifier une élément existant
On peut également remplacer un élément d'un tableau en utilisant l'index

exemple : on remplace `Recrutement` par `Rejoignez-nous` dans le tableau `rubriques`  qui est placé à l'index `3`
```jsx
let rubriques = ['Accessibilité', 'Mentions légales', 'Crédits', 'Recrutement', 'Publications', 'Presse',  'Contact']
rubriques[3] = 'Rejoignez-nous';
rubriques; // ['Accessibilité', 'Mentions légales', 'Crédits', 'Rejoignez-nous', 'Publications', 'Presse',  'Contact']
```

@[Exercice 1 : Modifier une élément de tableau]({ "stubs": ["exo1Tableaux.js"], "command":"node_modules/mocha/bin/mocha exo1Tableaux_test.js --reporter list"})
::: Correction
```jsx
let rubriques = ['Accessibilité', 'Mentions légales', 'Crédits', 'Rejoignez-nous', 'Publications', 'Presse',  'Contact'];

/*Remplacez 'Presse' parle 'On parle de nous' dans le tableau rubriques
 Vous ne devez pas modifier la ligne 1 de ce code
 Ecrire du code ci dessous pour arriver à vos fins*/

rubriques[5] = 'On parle de nous';
```
:::
### le dernier élément
Imaginons que nous souhaitions accéder au dernier élément du tableau sans nécessairement connaitre sa longueur.

Certains langages de programmation permettent d'utiliser des index négatifs , comme `rubriques[-1]`.

Cependant, en JavaScript, cela ne fonctionnera pas. Le résultat sera `undefined`, car l’index entre crochets est traité littéralement.

Nous pouvons calculer explicitement l'index du dernier élément puis y accéder : `rubriques[rubriques.length - 1]` pour obtenir `Contact`.

#### Pourquoi "length - 1"?
Dans l'exemple la longueur du tableau `rubriques` est de 7 **éléments**, mais comme le décompte se fait à partir de 0, l'**index** du dernier élément est 6, d'où la nécessité d'écrire length-1.

Un peu lourdingue comme écriture, n'est-ce pas ? Nous sommes obligés d'écrire le nom de la variable deux fois.

Heureusement, un ajout récent au language JavaScript permet une syntaxe plus courte : `rubriques.at(-1)` 

### En Résumé
- le premier élément d'un tableau a pour index `0`
- le dernier element a pour index `length-1`
- `array[n]` permet d'accéder à l'élément d'index n (le n+1ème élément), si `array.length` > n
- écrire `array.at(i)` revient au même que d'écrire `array[i]`, si i >= 0 et i < `array.length`.
- pour les valeurs négatives de i on ne peut pas utiliser les crochets, on utilise la methode `array.at()`
- `array.at(-1)` renvoie le dernier élément
- 
## Les tableaux à double entrée
Il n'existe pas en JavaScript de type d'objet "tableau à double entrées" ou "tableau multidimensionnel" de manière native. Il est néanmoins possible de créer un tableau à double entrée en définissant un tableau d’éléments, où chaque élément est également un autre tableau et tous ces tableaux seraient de la même longueur.

Prenons le tableau suivant : 

![tableau à double entrées](https://raw.githubusercontent.com/RenaudC-LADAPT/playground-prepanumjs/master/Capture%20tableau.PNG)

en JavaScript cela donnerait :
```jsx
let tableauDoubleEntree = [
['Monsieur', 'Dupont', 'Martin', 30],
['Monsieur', 'Jacques', 'Alain', 32],
['Madame', 'Joce', 'Jessica', 28],
['Madame', 'Luna', 'Alberta', 36],
['Madame', 'Robert', 'Aline', 38],
['Monsieur', "Giscard D'Estaing", 'Bernard', 42],
]
```
et pour accéder à un des éléments du tableau il me faudra précise dans un premier temps l'indice de la "ligne" puis l'indice de la "colonne" 

par exemple : `tableauDoubleEntree[0][0]` correspond à "Monsieur"

`tableauDoubleEntree[5][4]` correspond à 42

`tableauDoubleEntree[3][1]` correspond à "Luna"

## Les méthodes et propriétés des tableaux JavaScript
### C'est quoi ces trucs ?
#### propriétés
Vous connaissez déjà une **propriété** des tableaux, la propriété `length` qui retourne le nombre d’éléments d’un tableau. 
La seconde propriété (il n'y en a pas d'autres sinon j'aurais dit "deuxième" `;)`) est la propriété **prototype**.
C'est une propriété que possèdent tous les constructeurs en JavaScript mais que nous n'expliquerons pas ici.

Les propriétés d'un objet représentent ses caractéristiques et on peut y accéder avec une notation utilisant le point « . », de la façon suivante :

`nomObjet.nomPropriete;`

#### méthodes
Pour "vulgariser" le concept, et ne pas entrer dans des explications trop techniques si tôt dans votre découverte du developpement,
disons qu'une **méthode** est une **fonction** propre à un objet. 
C'est une **fonction** qui est la **propriété** d'un objet.

On peut appeler la méthode sur l'objet de la façon suivante : 

`objet.nomMethode(parametres);`

à note que certaines méthodes n'ont besoin d'aucun paramètre, il faut tout de même mettre les parenthèses, contrairement aux propriétés : 

`objet.nomMethode();`

Nous allons voir ici des **méthodes** de l'objet `Array`

### Les méthodes shift() et pop()
#### la méthode shift()

La méthode shift() permet de retirer le premier élément d'un tableau et de renvoyer cet élément. Cette méthode modifie la longueur du tableau.

Dans la console de votre navigateur, testez le code suivant ligne par ligne en appuyant sur entrée à la fin de chaque ligne : 
```jsx
let felins = ['lion', 'chat', 'jaguar','léopard'];
let premier = felins.shift();
console.log(felins);
console.log(premier);
```
Vous pouvez voir que le premier élément du tableau a été supprimé et affecté à la variable `premier`.
#### Exercices
Voici la déclaration d'un tableau :

`let legumes = ['aubergine', 'courgette', 'haricots verts', 'brocoli', 'patate douce']`

`let maVariable = legumes.shift()`

?[Que renvoie désormais legumes.at(0) ](single)
- [ ] 'patate douce'
- [ ] 'brocoli'
- [x] 'courgette'
- [ ] 'aubergine'
?[Que contient la variable maVariable ](single)
- [ ] 'patate douce'
- [ ] 'brocoli'
- [x] 'aubergine'
?[Quelle est désormais la longueur de legumes ](single)
- [ ] 6
- [ ] 5
- [x] 4
#### la méthode pop()
La méthode `pop()` supprime le dernier élément d'un tableau et retourne cet élément. Cette méthode modifie la longueur du tableau.

Dans la console de votre navigateur, testez le code suivant ligne par ligne en appuyant sur entrée à la fin de chaque ligne : 
```jsx
let felins = ['lion', 'chat', 'jaguar','léopard'];
let dernier = felins.pop();
console.log(felins);
console.log(dernier);
```
Vous pouvez voir que le dernier élément du tableau a été supprimé et affecté à la variable `dernier`.
#### Exercices
Voici la déclaration d'un tableau :

`let legumes = ['aubergine', 'courgette', 'haricots verts', 'brocoli', 'patate douce']`

`let maVariable = legumes.pop()`

?[Que renvoie désormais legumes.at(-1) ](single)
- [ ] 'patate douce'
- [x] 'brocoli'
- [ ] 'aubergine'
?[Que contient la variable maVariable ](single)
- [x] 'patate douce'
- [ ] 'brocoli'
- [ ] 'aubergine'
?[Quelle est désormais la longueur de legumes ](single)
- [x] 4
- [ ] 3
- [ ] 5
### Les méthodes unshift() et push()
#### la méthode unshift()
La méthode unshift() ajoute un ou plusieurs éléments au début d'un tableau et renvoie la nouvelle longueur du tableau.

Dans la console de votre navigateur, testez le code suivant ligne par ligne en appuyant sur entrée à la fin de chaque ligne : 
```jsx
let felins = ['lion', 'chat', 'jaguar','léopard'];
console.log(felins.length);
let nombreDeFelins = felins.unshift('tigre', 'panthère');
console.log(felins);
console.log(nombreDeFelins);
```
Vous pouvez voir que le premier élément du tableau et désormais`'tigre'`, le deuxieme `panthère` et que la nouvelle longueur du tableau est affectée à la variable `nombreDeFelins`.
#### Exercices
Voici la déclaration d'un tableau :

`let legumes = ['aubergine', 'courgette', 'haricots verts', 'brocoli', 'patate douce']`

`let maVariable = legumes.unshift('radis', 'potiron')`

?[Que renvoie désormais legumes.at(1) ](single)
- [ ] 'patate douce'
- [ ] 'brocoli'
- [ ] 'radis'
- [x] 'potiron'
- [ ] 'aubergine'
?[Que contient la variable maVariable ](single)
- [ ] 5
- [ ] 'radis'
- [ ] 6
- [ ] 'potiron'
- [x] 7
#### la méthode push()
La méthode push() ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle taille du tableau.

Dans la console de votre navigateur, testez le code suivant ligne par ligne en appuyant sur entrée à la fin de chaque ligne : 
```jsx
let felins = ['lion', 'chat', 'jaguar','léopard'];
console.log(felins.length);
let nombreDeFelins = felins.push('panthère', 'tigre');
console.log(felins);
console.log(nombreDeFelins);
```
Vous pouvez voir que le dernier élément du tableau et désormais`'tigre'`, l'avant dernier et `'panthère`, et que la nouvelle longueur du tableau est affectée à la variable `nombreDeFelins`.
#### Exercices
Voici la déclaration d'un tableau :

`let legumes = ['aubergine', 'courgette', 'haricots verts', 'brocoli', 'patate douce']`

`let maVariable = legumes.push('potiron')`

?[Que renvoie désormais legumes.at(-1) ](single)
- [ ] 'patate douce'
- [ ] 'brocoli'
- [x] 'potiron'
- [ ] 'aubergine'
?[Que contient la variable maVariable ](single)
- [ ] 4
- [ ] 'patate douce'
- [ ] 5
- [ ] 'potiron'
- [x] 6

### La méthode splice()
La méthode splice() modifie le contenu d'un tableau en retirant des éléments et/ou en ajoutant de nouveaux éléments à ce même tableau.
On peut ainsi vider ou remplacer une partie d'un tableau.
```jsx
const months = ['Jan', 'Mars', 'Avril', 'Juin'];
months.splice(1, 0, 'Fev');
//insere 'Fev' à l'index 1
months;// ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May');
// Remplace 1 element à l'index 4
months;//["Jan", "Feb", "March", "April", "May"]
```
**Syntaxe**

`array.splice(début, nbASupprimer, éléments)`

`début` : L'indice à partir duquel commencer à changer le tableau (l'indice du premier élement étant 0).

`nbASupprimer` : Un entier indiquant le nombre d'anciens éléments à remplacer. Si ce paramètre est absent ou si sa valeur est supérieure ou égale à `array.length - début`, alors les éléments entre début et la fin du tableau seront supprimés. Si `nbASupprimer` vaut 0, aucun élément ne sera supprimé. Dans ce cas, il est nécessaire de spécifier au moins un nouvel élément.

`éléments` : Les éléments à ajouter au tableau à partir de début. Si vous ne spécifiez pas de nouvel élément, les anciens éléments seront simplement supprimés du tableau.

![travaux en cours](http://www.animated-gifs.fr/category_website/under-construction-fr/14285595.gif)
### La méthode concat()
### La méthode join()

### La méthode splice()
### La méthode slice()

# Aller plus loin...
[Testez vos compétences : les tableaux](https://developer.mozilla.org/fr/docs/Learn/JavaScript/First_steps/Test_your_skills:_Arrays/ "Testez vos compétences : les tableaux")
