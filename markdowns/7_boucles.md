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
while (i<=10) { 
	console.log("i vaut ",i,"\n"); 
	i=i+1; 
}
```
ici on aura l'affichage  suivant dans la console : 
> 0
> 1
> 2
> 3
> 4
> 5
> 6
> 7
> 8
> 9
> 10

### Retour sur les [opérations sur les variables](https://tech.io/playgrounds/99822/ladapt-rhone-metropole-de-lyon---prepa-num----parcours-decouverte-javascript/operations-sur-les-variables-en-javascript)
J'attire votre attention sur la ligne `i=i+1` : Nous avons ici aussi un exemple de la non-équivalence du signe égal en mathématiques et en informatique. En mathématiques, écrire i=i+1 n'a aucun sens (cela reviendrait à dire par exemple que 5 = 6 !).

Ici `i=i+1` veut dire : "*Prends la valeur de i, ajoute 1 à cette valeur puis attribue cette nouvelle valeur à la variable i*", on parle d’affectation. 

Dans le cas spécial où on ajoute une constante à une variable on parle d'incrémentation. `i=i+1` peut être remplacé par l'eciture simplifiée `i++`

![travaux en cours](https://www.gifgratis.net/gifs_animes/travaux_en_cours/21.gif "travaux en cours")
