# Les Boucles
## La boucle while (tant que)

L'instruction **`while`** permet de créer une boucle qui s'exécute tant qu'une condition de test est vérifiée.

La condition est évaluée **avant** d'exécuter l'instruction contenue dans la boucle.

```jsx
while (/*condition*/) 
{ 
//instructions à répéter 
}
```
Tant que la **condition** reste vraie, les instructions à l'intérieur du bloc (entre les 2 accolades) seront exécutées.
### exemple
```jsx
let i=0; 
while (i<5) { 
	console.log("i vaut ",i,"\n"); 
	i=i+1; 
}
```
ici on aura l'affichage  suivant dans la console : 
> i vaut 0
> 
> i vaut 1
> 
> i vaut 2
> 
> i vaut 3
> 
> i vaut 4

### Retour sur les [opérations sur les variables](https://tech.io/playgrounds/99822/ladapt-rhone-metropole-de-lyon---prepa-num----parcours-decouverte-javascript/operations-sur-les-variables-en-javascript)
J'attire votre attention sur la ligne `i=i+1` : Nous avons ici aussi un exemple de la non-équivalence du signe égal en mathématiques et en informatique. En mathématiques, écrire i=i+1 n'a aucun sens (cela reviendrait à dire par exemple que 5 = 6 !).

Ici `i=i+1` veut dire : "*Prends la valeur de i, ajoute 1 à cette valeur puis attribue cette nouvelle valeur à la variable i*", on parle d’affectation. 

Dans le cas spécial où on ajoute une constante à une variable on parle d'incrémentation. `i=i+1` peut être remplacé par l'eciture simplifiée `i++`

## La boucle do…while

L'instruction **`do...while`** crée une boucle qui exécute une instruction jusqu'à ce qu'une condition de test ne soit plus vérifiée.

La condition est testée **après** que l'instruction soit exécutée, le bloc d'instructions défini dans la boucle est donc exécuté au moins une fois.*

le fonctionnement est similaire à la boucle while mais ici, les instructions sont forcément exécutées au moins une fois. 

Dans certains cas, l'utilisation de la boucle **`do while`** est plus logique car il faut acquérir la valeur avant de la tester.

### exemple
```jsx
let n = 0;
do {
  document.write("n vaut ",n,"\n")
	n++;
} while (n < 5);
```
ici on aura l'affichage  suivant dans la console : 
> n vaut 0
> 
> n vaut 1
> 
> n vaut 2
> 
> n vaut 3
> 
> n vaut 4
> 
> n vaut 5

Notez que "n vaut 5" est affiché car l'instructions est éxécutée avant le test`n < 5`

## La boucle for

**Cette boucle `for` est de loin la plus utilisée, il faut bien la maîtriser!**

Nous avons toujours ici affaire à une boucle, mais les conditions de répétitions sont un peu différentes :

```js
for (/*début*/ ; /*condition de répétition*/ ; /*incrémentation*/) 
{ 
//instructions à répéter 
}
```

### Exemple
la boucke ci dessous execute `console.log'("i vaut" + i)` pour i allant de 0 à 4 (5 est exclu)
```jsx
for (let i = 0; i < 5; i++) { 
 console.log'("i vaut" + i);
}
// affiche i vaut 0, puis i vaut 1, puis i vaut 2,  puis i vaut 3, puis i vaut 4
```
Examinons la déclaration `for` partie par partie :

| partie | code | description |
| ------ |:----:| ----------- |
| début | let i = 0 | Exécuté une fois en entrant dans la boucle |
| condition de répétition | i < 5 | Vérifié avant chaque itération de la boucle, en cas d’échec, la boucle s’arrête |
| instructions à répéter  | console.log'("i vaut" + i) | Exécuté encore et encore tant que la condition est vraie |
| incrémentation | i++ | Exécuté **après** l'instructions à répéters à chaque itération |



## Aller plus loin
il existe deux autres formes de boucles en JavaScript qui sont liée aux objets
- `for/in` qui permet de parcourir l'ensemble des propriétés énumérables d'un objet. 
- `for/of` qui parcourt l'objet et les valeurs de ses différentes propriétés.

Nous reviendrons sur ces boucles dans un module sur les **Objets** en JavaScript

![travaux en cours](https://www.gifgratis.net/gifs_animes/travaux_en_cours/21.gif "travaux en cours")
