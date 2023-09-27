# Les tableaux en JavaScript

À présent, nous allons parler des tableaux. Les tableaux ont une structure qui permet de stocker plusieurs valeurs dans une seule variable.

En JavaScript, les tableaux sont avant tout des objets. Cependant, dans la plupart des langages, les tableaux ne sont pas des objets mais simplement des éléments de langages spéciaux qui peuvent tout de même contenir plusieurs valeurs.

Nous reviedrons sur les objets dans la séquence suivante

## Créer un tableau
- Pour débuter, ouvrez une nouvelle fenêtre : *Ctrl + N (sous Windows) ou Cmd + N (sous Mac).*
- Remplacez l'URL par about:blank pour avoir une page vierge.
- Ouvrez la console : *appuyez sur les touches Ctrl + Maj + J (sous Windows) ou Cmd + Opt + J (sous Mac).*

```jsx
let monPremierTableau = ['engagement', 'militant', 'sensibilisation'];
monPremierTableau;
```

Comme avec les nombres oules chaînes de caractères, on declare une variable avec `let` ou `const`, puis on l'initialise avec une valeur de tableau. Un tableau est délimité par des crochets `[` `]`. Chaque élément du tableau sera séparé de l'autre par une virgule.
Dans ma variable monPremierTableau, par exemple, j'ai un tableau qui contient trois éléments, `['engagement', 'militant', 'sensibilisation']`
Dans un tableau tous les élements ne sont pas nécessairement de même type. Un même tableau peut contenir plusieurs type de données, ex : `[1929, 'Association', ['engagement', 'militant', 'sensibilisation']]`.

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

## Accéder aux éléments d'un tableau


![travaux en cours](https://www.gifgratis.net/gifs_animes/travaux_en_cours/21.gif "travaux en cours")
