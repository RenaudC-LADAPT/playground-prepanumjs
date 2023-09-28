# Les tableaux en JavaScript

À présent, nous allons parler des tableaux. Les tableaux ont une structure qui permet de stocker plusieurs valeurs dans une seule variable.

En JavaScript, les tableaux sont avant tout des objets. Cependant, dans la plupart des langages, les tableaux ne sont pas des objets mais simplement des éléments de langages spéciaux qui peuvent tout de même contenir plusieurs valeurs.

Nous reviedrons sur les objets dans la séquence suivante

![schéma d'array](https://github.com/RenaudC-LADAPT/playground-prepanumjs/blob/ba37dac511f7364e3bb21434f79d4e216127b1a5/arrayJS.png)

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

## Les méthodes et propriétés des tableaux JavaScript
### C'est quoi ces trucs ?
#### propriétés
Vous connaissez déjà une **propriété** des tableaux, la propriété `length` qui retourne le nombre d’éléments d’un tableau. 
La seconde propriété (il n'y en a pas d'autres sinon j'aurais dit "deuxième" `;)`) est la propriété **prototype**.
C'est une propriété que possèdent tous les constructeurs en JavaScript mais que nous n'expliquerons pas ici.
#### méthodes
Pour "vulgariser" le concept, et ne pas entrer dans des explications trop techniques si tôt dans votre découverte du developpement,
disons qu'une **méthode** est une **fonction** propre à un objet. 
C'est une **fonction** qui est la **propriété** d'un objet.

Nous allons voir ici des **méthodes** de l'objet `Array`
![travaux en cours](http://www.animated-gifs.fr/category_website/under-construction-fr/14285595.gif)
### Les méthodes push() et pop()
### Les méthodes unshift() et shift()
### La méthode splice()
### La méthode join()
### La méthode slice()
### La méthode concat()
### La méthode includes()

