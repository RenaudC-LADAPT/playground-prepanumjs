
# Opérations sur les variables en JavaScript
Il existe de nombreux opérateur en JavaScript nous allons voir ici une partie de ces opérateurs

## Les opérateurs mathématiques
De nombreux opérateurs nous sont connus de l’école. Ce sont les additions +, multiplications \*, soustractions -, dicisions / etc.
Les opérations mathématiques suivantes sont supportées en javascript:

- Addition +,
- Soustraction -,
- Multiplication \*,
- Division /,
- Reste %,
- Exponentiation **.
Les quatre premières sont assez simples, tandis que % et ** nécéssitent quelques explications.

### Reste % (Modulo)
L’opérateur reste %, malgré son apparence, n’est pas lié aux pourcentages.

Le résultat de a % b est le reste de la division entière de a par b.

Par exemple:
```jsx
5 % 2 // 1, le reste de 5 divisé par 2
8 % 3 // 2, le reste de 8 divisé par 3
```
### Exponentiation 
L’opérateur d’exponentiation a ** b multiplie a par lui-même b fois. En mathématiques à l’école, nous écrivons cela ab.

Par exemple:
```jsx
2 ** 2; // 2² = 4
2 ** 3; // 2³ = 8
2 ** 4; // 2⁴ = 16
```
Mathématiquement, l’exponentiation est également définie pour les nombres non entiers.

Par exemple, une racine carrée est une exponentiation de ½ :
```jsx
4 ** (1/2); // 2 (la puissance de 1/2 équivaut à une racine carrée)
8 ** (1/3); // 2 (la puissance de 1/3 équivaut à une racine cubique)
```
## Concaténation de chaînes de caractères

Découvrons les fonctionnalités des opérateurs JavaScript qui vont au-delà de l’arithmétique scolaire.

Habituellement, l’opérateur + additionne des chiffres.

Mais si le binaire + est appliqué aux chaînes de caractères, il les fusionne (concatène) :
```jsx
let s = "my" + "string";
console.log(s); // mystring
```
Notez que si l’un des opérandes est une chaîne de caractères, l’autre est automatiquement converti en chaîne de caractères.

Par exemple :
```jsx
console.log( '1' + 2 ); // "12"
console.log( 2 + '1' ); // "21"
```
Peu importe que le premier opérande soit une chaîne de caractères ou le second. La règle est simple : si l’un des opérandes est une chaîne de caractères, convertissez l’autre également en une chaîne de caractères.

Cependant, notez que les opérations se déroulent de gauche à droite. S’il y a deux nombres suivis d’une chaîne, les nombres seront ajoutés avant d’être convertis en chaîne :
```jsx
console.log(2 + 2 + '1' ); // "41" et non "221"
```
Ici, les opérateurs travaillent les uns après les autres. Le premier + additionne deux nombres, donc il renvoie 4, puis le + suivant ajoute la chaîne de caractères 1, donc c’est comme 4 + '1' = 41.
```jsx
console.log('1' + 2 + 2); // "122" and not "14"
```
Ici, le premier opérande est une chaîne de caractères, le compilateur traite également les deux autres opérandes comme des chaînes de caractères. Le 2 est concaténé à '1', donc c’est comme '1'+ 2 = "12" et "12" + 2 = "122".

Le binaire + est le seul opérateur qui prend en charge les chaînes de caractères de cette manière. D’autres opérateurs arithmétiques ne fonctionnent qu’avec des nombres et convertissent toujours leurs opérandes en nombres.

Voici l’exemple pour la soustraction et la division:
```jsx
console.log( 6 - '2' ); // 4, convertit '2' en nombre
console.log( '6' / '2' ); // 3, convertit les deux opérandes en nombre
```

## Exercice 3
### Opérations sur les variables dans l'exercice ci-dessous vous devez :
- Appliquez à num l'opérateur d'incrémentation
- Concaténez à la chaîne str la chaîne " est la réponse à la grande question sur la vie, l’univers et le reste."
- Inversez la valeur logique de bool
- Ajoutez à flt la valeur contenue dans num

@[complétez le code]({ "stubs": ["exo3Variables.js"], "command":"node_modules/mocha/bin/mocha exo3Variables_test.js --reporter list"})
