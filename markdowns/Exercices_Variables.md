# Les Variables
# Qu’est ce qu’une variable
Une variable est un conteneur servant à stocker des informations de manière temporaire, comme une chaine de caractères (un texte) ou un nombre par exemple.
Le propre d’une variable est de pouvoir varier, c’est-à-dire de pouvoir stocker différentes valeurs au fil du temps et c’est cette particularité qui les rend si utiles.
Notez bien déjà qu’une variable en soi et la valeur qu’elle va stocker sont deux éléments différents et qui ne sont pas égaux. Encore une fois, une variable n’est qu’un conteneur. Vous pouvez imaginer une variable comme une boite dans laquelle on va pouvoir placer différentes choses au cours du temps.
Les variables sont l’une des constructions de base du JavaScript et vont être des éléments qu’on va énormément utiliser. Nous allons illustrer leur utilité par la suite.
[![boites qui contient une information](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables/boxes.png)](https://developer.mozilla.org)
Exemple : dans un programme de jeu vidéo, j’ai besoin de stocker le score et les points de vie du joueur, j’utiliserai des variables :
## Exercice 1
### Dans l'exercice ci-dessous vous devez créer les variables suivantes :
- **num** qui contient le nombre 42
- **str** qui contient la chaîne de caractère *42*
- **bool** qui contient la valeur booléenne *true*
- **flt** qui contient la valeur 0,42
@[Créez les variables demandées ci-dessus]({ "stubs": ["exo1Variables.js"], "command":"node_modules/mocha/bin/mocha exo1Variables_test.js --reporter list"})
## Exercice 2
### Dans l'exercice ci-dessous vous devez compléter le code pour afficher le type des variables num, str, bool & flt :
@[complétez le code]({ "stubs": ["exo2Variables.js"], "command":"node_modules/mocha/bin/mocha exo2Variables_test.js --reporter list"})
## Exercice 3
### Opérations sur les variables dans l'exercice ci-dessous vous devez :
- Appliquez à num l'opérateur d'incrémentation
- Concaténez à la chaîne str la chaîne " est la réponse à la grande question sur la vie, l’univers et le reste."
- Inversez la valeur logique de bool
- Ajoutez à flt la valeur contenue dans num
@[complétez le code]({ "stubs": ["exo3Variables.js"], "command":"node_modules/mocha/bin/mocha exo3Variables_test.js --reporter list"})
