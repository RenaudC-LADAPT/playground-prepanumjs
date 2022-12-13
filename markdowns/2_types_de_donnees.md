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
## Exercice 2
### Dans l'exercice ci-dessous vous devez compléter le code pour afficher le type des variables num, str, bool, flt, array & x :
@[complétez le code]({ "stubs": ["exo2Variables.js"], "command":"node_modules/mocha/bin/mocha exo2Variables_test.js --reporter list"})
