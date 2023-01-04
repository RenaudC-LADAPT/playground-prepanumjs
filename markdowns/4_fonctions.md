# Les fonctions en JavaScript

## C’est quoi une fonction ?

Une fonction correspond à **un bloc de code nommé et réutilisable, dont le but est d’effectuer une tâche précise**.

Une fonction a une entrée (des informations qu'on lui fournit appelées paramètres ou arguments), exécute un travail sur ces paramètres et renvoie des informations en sortie, comme des nombres ou des messages par exemple.

![schema fonction.PNG](http://zestedesavoir.com/media/galleries/285/df4cd563-07b3-4fdf-a00d-2d60d080ae07.png)

## Définir une fonction en JavaScript

En JavaScript, comme dans la plupart des langages les supportant, nous allons très souvent utiliser des fonctions car celles-ci possèdent de nombreux atouts.

Une définition de fonction (aussi appelée déclaration de fonction ou instruction de fonction) est construite avec le mot-clé **`function`**, suivi par :
- Le nom de la fonction.
- Une liste d'arguments à passer à la fonction, entre parenthèses et séparés par des virgules.
- Les instructions JavaScript définissant la fonction, entre accolades, { }.
- Il est possible (mais pas obligatoire) de renvoyer des informations en sortie grace au mots-clé **`return`** dans le bloc d'instructions

```jsx
function maFonction(/*paramètre1*/, /*paramètre2*/, /* etc... */) { 
	/*instructions*/ 
	return /*sortie*/ ; 
}
```
**Remarque :** *l'indentation (décalage) du contenu de la fonction (entre l'accolade ouvrante et fermante) a pour but de rendre le code plus lisible. Ce n'est pas obligatoire, mais fortement conseillé.*


@[Testez plusieurs fois le programme en changeant la valeur de la variable num]({ "stubs": ["exo1Fonctions.js"], "command":"node_modules/mocha/bin/mocha exo1Fonctions_test.js --reporter list"})

`calcul(num)` appelle la fonction `calcul` avec un paramètre, ici égal à la valeur contenu dans la variable `num`. Dans le `console.log` de la dernière ligne, `calcul(num)` est "remplacé" par la valeur retournée (`return y`) par la fonction `calcul`.

## Exercices :

### Vous devez compléter le code ci-dessous afin que la fonction `francs_suisses_en_euros` prennent en paramètre un montant en franc suisses et renvoie sa conversion en euros.

@[Complétez la fonction]({ "stubs": ["exo2Fonctions.js"], "command":"node_modules/mocha/bin/mocha exo2Fonctions_test.js --reporter list"})
::: proposition de correction
```jsx
let chf = 10;

function francs_suisses_en_euros(x) {
 return x*1.01367;
}

let euros = francs_suisses_en_euros(chf);

console.log(chf + " franc suisses valent " + euros + " €.");
```
:::
### Écrivez une fonction `minuteToSecond` qui prend un nombre entier de minutes et le convertit en secondes.

>Exemple:
>
>minuteToSecond(4) ➞ 240
>
>minuteToSecond(3) ➞ 180

@[Créez la fonction minuteToSecond]({ "stubs": ["exo3Fonctions.js"], "command":"node_modules/mocha/bin/mocha exo3Fonctions_test.js --reporter list"})
::: proposition de correction
```jsx
function minuteToSecond(num) {
    return num*60;
}

```
:::
### Écrivez une fonction `getSurface` qui prend la base et la hauteur d’un triangle et retourne sa surface. *Notez que la surface d’un triangle est: **(base * hauteur) / 2** *

>Exemple:
>
>getSurface(8, 2) ➞ 8
>
>getSurface(7, 3) ➞ 10.5

@[Créez la fonction getSurface]({ "stubs": ["exo4Fonctions.js"], "command":"node_modules/mocha/bin/mocha exo4Fonctions_test.js --reporter list"})
::: proposition de correction
```jsx
function getSurface(b, h) {
    return b*h/2;
}

```
:::
### Dans cet exercice, on vous demande de  dire combien d'oeufs sont présents dans le rayon d'une superette :
ensachant qu'il existe 4 formats de boites 
- petite = 4 oeufs
- normale = 6 oeufs
- grande = 10 oeufs
- très grande = 12 oeufs

On a compté les boites et on vous donne un sous-total pour chaque format de boite . Vous devez implémenter une fonction `nbrsOeufs` qui renvoie le nombre total d'oeufs dans le rayon.

L’ordre des boites transmis à la fonction est : nb de petites, nb de normales, nb de grandes, nb de très grandes.

Exemple:
- nbrsOeufs(1, 0, 0, 0) ➞ 4
- nbrsOeufs(0, 1, 0, 0) ➞ 6
- nbrsOeufs(0, 0, 1, 0) ➞ 10
- nbrsOeufs(0, 0, 0, 1) ➞ 12

N’oubliez pas que l'on veut connaître le nombre total de d'oeufs et non pas le nombre total de boites

@[Créez la fonction nbrsOeufs]({ "stubs": ["exo5Fonctions.js"], "command":"node_modules/mocha/bin/mocha exo5Fonctions_test.js --reporter list"})
::: proposition de correction
```jsx
function nbrsOeufs(p, n, g, tg) {
    return p*4+n*6+g*10+tg*12;
}
```
:::

## Les commentaires en JavaScript

Vos programmes vont être de plus en plus complexes. Pour qu'ils restent malgré tout le plus clair possible, vous devrez systématiquement ajouter des commentaires. Ces commentaires auront principalement 2 buts
- aider une tierce personne à comprendre votre code
- assurer une maintenance efficace de votre code (il est parfois difficile de comprendre son propre code des mois après son écriture).

En JavaScript, il existe 2 façons d'écrire des commentaires :
```jsx
// Ceci est un commentaire sur une ligne
/* Ceci est un commentaires
sur plusieurs lignes */
```
