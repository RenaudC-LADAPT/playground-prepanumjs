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

