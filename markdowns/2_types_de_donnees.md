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

Ce que vous devez bien comprendre ici est que les données vont pouvoir être manipulées différemment en fonction de leur type et qu’il est donc essentiel de les connaitre pour créer des scripts fonctionnels.
```jsx
console.log(2 + 2);\\ valeur attendue 4 car on additionne des données de type "Number"
console.log('2' + '2');\\ valeur attendue '22' car on concatène des données de type "String"
```
## Détail des différents types
Consultez [cette page de l’excellent site de Pierre GIRAUD](https://www.pierre-giraud.com/javascript-apprendre-coder-cours/type-donnee/) pour en apprendre plus sur les types de données
## Exercice
### Dans l'exercice ci-dessous vous devez compléter le code pour afficher le type des variables num, str, bool, flt, array & x :
@[types de variables]({ "stubs": ["exo2Variables.js"], "command":"node_modules/mocha/bin/mocha exo2Variables_test.js --reporter list"})
::: Correction
```jsx
let num = 42;
let str = "42";
let bool = true;
let flt = 0.42;
let array = [num, str, bool, flt];
let x;
//compléter le code ci-dessous (utiliser la fonction typeof)
let numType = typeof(num);
let strType = typeof(str);
let boolType = typeof(bool);
let fltType = typeof(flt);
let arrayType = typeof(array);
let xType = typeof(x);
```
:::
### Répondez aux questions suivantes en tenant compte des resultats de l'exercice ci-dessus
?[De quel type est la valeur 42 contenu dans la variable num ?](single)
- [ ] string
- [x] number
- [ ] object
- [ ] boolean
- [ ] undefined

?[De quel type est la valeur '42' contenu dans la variable str ?](single)
- [x] string
- [ ] number
- [ ] object
- [ ] boolean
- [ ] undefined

?[De quel type est la valeur 0.42 contenu dans la variable flt ?](single)
- [ ] string
- [x] number
- [ ] object
- [ ] boolean
- [ ] undefined

?[De quel type est la valeur [42, '42', true, 0.42] contenu dans la variable array ?](single)
- [ ] string
- [ ] number
- [x] object
- [ ] boolean
- [ ] undefined

?[De quel type est la valeur contenu dans la variable x ?](single)
- [ ] string
- [ ] number
- [ ] object
- [ ] boolean
- [x] undefined

?[De quel type est la valeur true contenu dans la variable bool ?](single)
- [ ] string
- [ ] number
- [ ] object
- [x] boolean
- [ ] undefined
