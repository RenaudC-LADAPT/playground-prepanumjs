# Les Test Conditionnels

**Dans la vie courante on rencontre tous les jours des tests logiques, les exemples sont nombreux**

- « Dans la station-service TOPAL le sans plomb 98 est plus cher que dans celle du
supermarché AUPRÉ»
- « Je touche le même salaire que mon collègue de bureau »
- « Camille est plus petite que Rachida »
- « En 2017, Jacques Chirac est président de la république »

**On peut attribuer à chacun de ces exemples une valeur logique. Soit c’est VRAI soit c’est FAUX, il n’y a pas d’autre valeur possible.**

>Prix du Sans Plomb 98 chez TOPAL : 1,78 €/L
>
>Prix du Sans Plomb 98 chez AUPRÉ : 1,76 €/L
>
>La phrase « Dans la station-service TOPAL le sans plomb 98 est plus cher que dans celui du
supermarché AUPRÉ» est donc vraie, **on dit que sa valeur logique est « VRAI »**

>Mon Salaire : 1789 €
>
>Salaire de mon collègue de Bureau : 1750 €
>
>La phrase « Je touche le même salaire que mon collègue de bureau » est fausse, **on dit que sa valeur logique est « FAUX »**


>Camille mesure 1 m 56, Rachida mesure 1 m 67
>
>La phrase « Camille est plus petite que Rachida » est donc vraie, **on dit que sa valeur logique est « VRAI »**

>La phrase « En 2017, Jacques Chirac est président de la république » est fausse, **on dit que sa valeur logique est « FAUX »**

# En JavaScript

### Le type de données booléen (Boolean)

Une variable en JavaScript peut stocker une valeur de type Boolean, c’est-à-dire un booléen.

Un booléen, en algèbre, est une valeur binaire (soit 0, soit 1). En informatique, le type booléen est un type qui ne contient que deux valeurs : les valeurs true (vrai) et false (faux).

Ce type de valeur peut sembler plus compliqué à appréhender à première vue. Pas d’inquiétude, nous allons souvent l’utiliser par la suite car il va nous être particulièrement utile en valeur de test pour vérifier si le test est validé ou non.

Une nouvelle fois, faites bien attention : pour qu’une variable stocke bien un booléen, il faut lui faire stocker la valeur true ou false, sans guillemets ou apostrophes car dans le cas contraire le JavaScript considèrera que c’est la chaine de caractères « true » ou « false » qui est stockée et on ne pourra plus effectuer les mêmes opérations avec ces valeurs.

On peut stocker un booléen true ou false dans une variable JavaScript
```jsx
let vrai = true; // stocke le booléen true
let faux = false; // stocke le boolléen false
```
L'exemple suivant est un peu plus complexe à comprendre. Ici, vous devez comprendre que l’affectation se fait en dernier et que la comparaison est faite avant. Lorsqu’on écrit « 8 > 4 », (qui signifie 8 strictement supérieur à 4) on demande au JavaScript d’évaluer cette comparaison.
```jsx
let resultat = 8 > 4;
console.log(resultat) // renvoie true
```
Si la comparaison est vérifiée (si elle est vraie), alors JavaScript renvoie le booléen `true`. Dans le cas contraire, il renvoie le booléen `false`. On stocke ensuite le booléen renvoyé dans la variable `let resultat`.

## Opérateurs de comparaison en JavaScript

Ils permettent de faire des tests de comparaison sur des valeurs, comme vérifier l’égalité, la différence, la supériorité etc..

Ils sont utilisés avec les structures de contrôles conditionnelles (`if`, `while`…) Chaque opérateur renvoie un booléen vrai ou faux (`true` ou `false`) en fonction de la véracité de la comparaison.

Les opérateurs de comparaison sont :

- **>** : supérieur
- **<** : inférieur
- **>=** : supérieur ou égale
- **<=** : inférieur ou égale
- **!=** : différent en valeur
- **!==** : différent en valeur et en type
- **==** : égalité des valeurs
- **===** : égalité des valeurs et des types

### Tester une valeur supérieur ou inférieur

Vous pouvez vérifier la supériorité stricte avec le signe **`>`** et l’infériorité stricte avec le signe **`<`**
```jsx
alert(3>2); // 3 supérieur à 2 - affichera vrai (true)
alert(3<2); // 3 inférieur à 2 - affichera faux (false)
```
Une comparaison moins stricte, qui accepte l’égalité, peut se faire avec le signe **`>=`** ou le signe **`<=`**
```jsx
alert(3<=3); // 3 inférieur ou  égale à 3 - affichera vrai (true)
alert(3>=3); // 3 supérieur ou  égale à 3 - affichera vrai (true)
```

> *Pour tester les exemples, vous pouvez utiliser la console JavaScript de votre navigateur.*
> 
> *ouvrez un nouvel onglet Ctrl + T (sous Windows) ou Cmd + T (sous Mac).*
> *remplacez l'URL par about:blank pour avoir une page vierge*
> 
> *Pour ouvrir la console, appuyez sur les touches Ctrl + Maj + J (sous Windows) ou Cmd + Opt + J (sous Mac).*
> *Vous pouvez alors saisir votre code et appuyer sur Entrée pour l'exécuter.*


### Tester l’égalité
Ne pas confondre l’opérateur d’affectation **=** avec l’opérateur d’égalité **`==`**

Bien différencier le **`==`** qui vérifie l’égalité des valeurs et le **`===`** qui vérifie l’égalité des valeurs et des types
```jsx
alert(2 == "2"); // affichera vrai (true)
alert(2 === "2"); // affichera faux (false)
```

> *Pour tester les exemples, vous pouvez utiliser la console JavaScript de votre navigateur.*
> 
> *ouvrez un nouvel onglet Ctrl + T (sous Windows) ou Cmd + T (sous Mac).*
> *remplacez l'URL par about:blank pour avoir une page vierge*
> 
> *Pour ouvrir la console, appuyez sur les touches Ctrl + Maj + J (sous Windows) ou Cmd + Opt + J (sous Mac).*
> *Vous pouvez alors saisir votre code et appuyer sur Entrée pour l'exécuter.*

### Tester la différence

Pour vérifier que deux variables sont différentes *en valeur* on utilise le signe **`!=`**
```jsx
alert(2 != "2"); // affichera faux (false)
```
Si vous voulez vérifier que deux variables sont différentes *en valeur et en type* on utilisera le signe **`!==`**
```jsx
alert(2 !== "2"); // affichera vrai (true)
```

> *Pour tester les exemples, vous pouvez utiliser la console JavaScript de votre navigateur.*
> 
> *ouvrez un nouvel onglet Ctrl + T (sous Windows) ou Cmd + T (sous Mac).*
> *remplacez l'URL par about:blank pour avoir une page vierge*
> 
> *Pour ouvrir la console, appuyez sur les touches Ctrl + Maj + J (sous Windows) ou Cmd + Opt + J (sous Mac).*
> *Vous pouvez alors saisir votre code et appuyer sur Entrée pour l'exécuter.*

### ET logique (`&&`)

L'opérateur ET logique (`&&`) (conjonction logique) renvoie vrai si et uniquement si ses deux opérandes sont `true` ou équivalents à `true`. Il est généralement utilisé avec des valeurs booléennes et, quand c'est le cas, il renvoie une valeur booléenne. 
```jsx
const a = 3;
const b = -2;

console.log(a > 0 && b > 0);
// resultat attendu: false
```

> *Pour tester les exemples, vous pouvez utiliser la console JavaScript de votre navigateur.*
> 
> *ouvrez un nouvel onglet Ctrl + T (sous Windows) ou Cmd + T (sous Mac).*
> *remplacez l'URL par about:blank pour avoir une page vierge*
> 
> *Pour ouvrir la console, appuyez sur les touches Ctrl + Maj + J (sous Windows) ou Cmd + Opt + J (sous Mac).*
> *Vous pouvez alors saisir votre code et appuyer sur Entrée pour l'exécuter.*

### OU logique (`||`)

L'opérateur OU logique (`||`) (disjonction logique) renvoie vrai si et seulement si au moins un de ses opérandes est vrai. Cet opérateur est généralement utilisé avec des valeurs booléennes et, lorsque c'est le cas, il renvoie une valeur booléenne.
```jsx
const a = 3;
const b = -2;

console.log(a > 0 || b > 0);
// resultat attendu: true
```

> *Pour tester les exemples, vous pouvez utiliser la console JavaScript de votre navigateur.*
> 
> *ouvrez un nouvel onglet Ctrl + T (sous Windows) ou Cmd + T (sous Mac).*
> *remplacez l'URL par about:blank pour avoir une page vierge*
> 
> *Pour ouvrir la console, appuyez sur les touches Ctrl + Maj + J (sous Windows) ou Cmd + Opt + J (sous Mac).*
> *Vous pouvez alors saisir votre code et appuyer sur Entrée pour l'exécuter.*

### NON logique (`!`)

L'opérateur logique NON (`!`) prend l'opposé logique de la valeur fournie par son opérande. Vrai devient faux et vice versa. Il est généralement utilisé avec les booléens. Lorsque cet opérateur est utilisé avec une valeur non-booléenne, il renvoie `false` si son opérande peut être converti en `true` et `true` sinon.


## SI ALORS `if {} else {}`

Prenons un exemple en JavaScript :

```jsx
const a=5; 
if (a==5) { 
	console.log("a est égale à 5"); 
} 
else { 
	console.log("a n'est pas égale à 5"); 
}
```

Vous constatez que le `if`  `else` se construit de la manière suivante : 

```jsx
if (/*Test Logique*/) {
	/*action réalisée si la valeur booleene du test logique est **true** (vrai)*/
}
else { 
	/*action réalisée si la valeur booleene du test logique est **false** (faux)*/
}
```

Important : le `else` n’est pas obligatoire, on peut utiliser `if` seul.

### Exercice 1 
Écrivez une fonction `majorite` qui prend un âge (nombre entier) et retourne le message "Vous êtes majeur." ou "Vous êtes mineur." selon que l'utilisateur est majeur ou mineur.
#### Exemples
> majorite(16) → "Vous êtes mineur."
>
> majorite(19) → "Vous êtes majeur."

@[Exercice 1 : Créez la fonction majorite]({ "stubs": ["exo1Conditions.js"], "command":"node_modules/mocha/bin/mocha exo1Conditions_test.js --reporter list"})

### Exercice 2
Écrivez une fonction `estPair` qui prend en paramètre un nombre entier et qui retourne `true` si le nombre est pair, et `false` s'il est impair.

**Attention** : Vous ne devez pas utiliser d'instruction if... else pour cet exercie, ce n'est pas utile!
#### Exemples
> estPair(2) → true
> 
> estPair(3) → false
> 
> estPair(-4) → true

@[Exercice 2 : Créez la fonction estPair]({ "stubs": ["exo2Conditions.js"], "command":"node_modules/mocha/bin/mocha exo2Conditions_test.js --reporter list"})

### Exercice 3 
Écrivez une fonction `div` qui prend deux nombres en paramètres, et renvoi le résultat de leur division.
Si le deuxième nombre est nul, la fonction doit renvoyer un message d'erreur.
#### Exemples
> div(16, 2) → "Le résultat de la division est 8."
>
> div(16, 0) → "Erreur : division par zéro interdite."

@[Exercice 3 : Créez la fonction div]({ "stubs": ["exo3Conditions.js"], "command":"node_modules/mocha/bin/mocha exo3Conditions_test.js --reporter list"})

### Exercice 4
Écrivez une fonction `maFonction` qui prend un nombre compris entre -100 et 100, et renvoie un message selon que le nombre est positif, négatif ou nul.
Si le nombre  est en dehors de l'intervalle autorisé, la fonction renvoie un message d'erreur.
#### Exemples
> maFonction(50) → "Le nombre est positif."
>
> maFonction(-50) → "Le nombre est négatif."
> 
> maFonction(0) → "Le nombre est nul."
> 
> maFonction(101) → "Erreur : le nombre est en dehors de l'intervalle autorisé."

@[Exercice 4 : Créez la fonction maFunction]({ "stubs": ["exo4Conditions.js"], "command":"node_modules/mocha/bin/mocha exo4Conditions_test.js --reporter list"})

### Exercice 5
#### Année bissextile ?
Si une année est bissextile alors elle a 366 jours.
Un moyen simple de déterminer si une année est bissextile est de vérifier :
> si l'année est divisible par 4 **et** non divisible par 100
> **ou**
> si l'année est divisible par 400.

Écrire une fonction `estBissextile(annee)` renvoyant "bissextile" si une année fournie en paramètre est bissextile et "non bissextile" sinon.

@[Exercice 5 : Année bissextile ?]({ "stubs": ["exo5Conditions.js"], "command":"node_modules/mocha/bin/mocha exo5Conditions_test.js --reporter list"})
::: proposition de correction exercice 1
### exercice 1
```jsx
function majorite(age) {
    if (age >= 18) {
        return("Vous êtes majeur.");
      } else {
        return("Vous êtes mineur.");
      }
};
// si age est superieur ou égale à 18, alors la fonction renvoie "Vous êtes majeur.", sinon elle renvoie "Vous êtes mineur."
```
:::
::: proposition de correction exercice 2
### exercice 2
```jsx
function estPair(num) {
    return num % 2 == 0;
};
//On utilise l'opérateur de comparaison d'égalité "==" dans l'expression "num % 2 == 0", l'expression a donc une valeur booléenne,
//Ca tombe bien c'est ce que la fonction doit renvoyer
```
:::
::: propositions de correction exercice 3
### exercice 3
```jsx
function div(num1, num2) {
    if (num2 != 0){
        let resultat = num1/num2;
        return 'Le résultat de la division est ' + resultat + '.';
    }
    else {
        return "Erreur : division par zéro interdite.";
    }
}
```
ou
```jsx
function div(num1, num2) {
    if (num2 == 0){
    	return "Erreur : division par zéro interdite.";
    }
    else {
    	let resultat = num1/num2;
        return 'Le résultat de la division est ${resultat}.';
    }
}
```
:::
::: proposition de correction exercice 4
### exercice 4
```jsx
function maFonction(num) {
    //on vérifie si le nombre est dans l'intervalle autorisé
    if (num >= -100 && num <= 100) {
        // ensuite on vérifie si le nombre est positif, négatif ou nul
        if (num > 0) {
            return "Le nombre est positif.";
        } 
        else {
            if (num < 0) {
                return "Le nombre est négatif.";
            }
            else {
                return "Le nombre est nul.";
            }
        } 
    }
    else {
        return "Erreur : le nombre est en dehors de l'intervalle autorisé.";
    }

}
```
:::
::: proposition de correction exercice 5
### exercice 5
```jsx
function estBissextile(y) {
    if ((y % 4 == 0 && y % 100 != 0)|| y % 400 == 0) {
        return("bissextile");
      } else {
        return("non bissextile");
      }
};
```
:::
