# les chaînes de caractères en JavaScript

## Créer une chaîne de texte
- Pour débuter, ouvrez une nouvelle fenêtre : *Ctrl + N (sous Windows) ou Cmd + N (sous Mac).*
- Remplacez l'URL par about:blank pour avoir une page vierge.
- Ouvrez la console : *appuyez sur les touches Ctrl + Maj + J (sous Windows) ou Cmd + Opt + J (sous Mac).*

```jsx
let slogan = 'Vivre ensemble, égaux & différents';
slogan;
```

Comme avec les nombres, on declare une variable avec `let` ou `const`, et on l'initialise avec une valeur de chaîne. La seule différence ici est que lorsque nous écrivons une chaîne, nous la mettons entre guillemets.

Si vous ne le faites pas, ou si vous oubliez un des guillemets, vous déclenchez une erreur. Essayez d'entrer une de ces lignes :
```jsx
let badString = Voici un test;
```
```jsx
let badString = 'Voici un test;
```
```jsx
let badString = Voici un test';
```
Ces lignes de code ne fonctionnent pas parce que toute chaîne de texte qui n'est pas écrite entre guillemets est considérée comme un nom de variable, un nom de propriété, un mot réservé ou quelque chose de semblable.

Quand l'interpréteur ne parvient pas à trouver la déclaration de ladite variable, une erreur est déclenchée (par ex. « missing ; before statement »). Si l'interpréteur voit le début d'une chaîne mais ne trouve pas sa fin, comme dans la ligne 2, il se plaint en émettant une erreur (avec « unterminated string literal »). Si votre programme produit de telles erreurs, revoyez‑le et vérifiez qu'aucun guillemet ne manque.

L'assertion suivante fonctionne si la variable `slogan` a été préalablement définie — essayez maintenant :
```jsx
let string = slogan;
string;
```
`string` est maintenant défini avec la même valeur que `slogan`.

### Guillemets simples vs guillemets doubles
Toute valeur stockée dans une variable en utilisant des guillemets doubles ou des guillemets simples (apostrophes) sera considérée comme une chaine de caractères, et ceci même dans le cas où nos caractères sont à priori des chiffres comme "42" par exemple.

En JavaScript, on va pouvoir utiliser indifféremment des guillemets doubles ou des apostrophes pour entourer une chaine de caractères et ces deux méthodes vont être strictement équivalentes à la différence d’autres langages(*PHP par exemple*)

En fait, Il y a une toute petite différence entre les deux, et celle que vous retenez relève de la préférence personnelle. Prenez-en une, et tenez‑vous y toutefois : du code avec des mises entre guillemets diversifiées peut amener des confusions, en particulier si vous utilisez les deux sortes dans la même chaîne ! Ce qui suit renvoie une erreur :
```jsx
let slogan = 'Vivre ensemble, égaux & différents";
```
**Faites attention cependant à un point :**
>si votre chaine contient un caractère qui est le même que le délimiteur de chaine choisi, il faudra neutraliser ce caractère en l’échappant au moyen d’un antislash `\` ou changer de délimiteur.

```jsx
let phrase1 = "LADAPT | L'association pour l'insertion sociale et professionnelle des personnes handicapées";
//délimiteur guillemets doubles"", pas besoin d'échapper les apostrophes
let phrase2 = 'LADAPT | L'association pour l'insertion sociale et professionnelle des personnes handicapées';
//délimiteur apostrophe '', renvoie d'un erreur car les apostrophes du texte n'ont pas été echappées
let phrase3 = 'LADAPT | L\'association pour l\'insertion sociale et professionnelle des personnes handicapées';
//délimiteur apostrophe '', déclaration correcte : les apostrophes sont echappées
```

## Concaténation

Concaténer est un terme de programmation qui signifie « attacher ensemble ». Pour attacher des chaînes en JavaScript, on utilise l'opérateur plus `+` , le même que l'on utilise pour ajouter deux nombres, mais dans ce contexte il fait quelque chose de différent. testez cet exemple dans la console.
```jsx
let one = 'Hello, ';
let two = 'comment allez‑vous ?';
let joined = one + two;
alert(joined);
```
Il en résulte que la variable nommée `joined` contient la valeur `'Hello, comment allez‑vous ?'`.

Dans l'exemple, nous avons juste attaché deux chaînes ensemble, mais vous pouvez en attacher autant que vous voulez, pour autant que vous mettiez un signe + entre chacune.
Essayez ceci :
```jsx
let multiple = one + one + one + one + two;
alert(multiple);
```
Vous pouvez aussi mélanger des variables avec des vraies chaînes(*chaînes littérales*). testez :
```jsx
let laReponse = 42;
let phrase = laReponse + 'est la réponse à "la grande question sur la vie, l’univers et le reste"!';
alert(phrase);
```

## Les littéraux de gabarits

On a vu plus tôt dans ce cours qu’il fallait en JavaScript toujours entourer nos chaines de caractères (nos textes) avec des apostrophes ou des guillemets.

Il existe en fait une troisième manière introduite récemment d’entourer des chaines de caractères en JavaScript qui va utiliser des accents graves `` ` ``.

La grande différence entre l’utilisation d’accents graves ou l’utilisation d’apostrophes ou de guillemets est que toute expression placée entre les accents graves va être interprétée en JavaScript. Pour le dire simplement : tout ce qui renvoie une valeur va être remplacé par sa valeur.

Cela signifie notamment qu’on va pouvoir placer du texte et des variables ensemble sans avoir besoin d’utiliser d’opérateur de concaténation puisque les variables vont être interprétées, c’est-à-dire remplacées par leur valeur.

Pour que cela fonctionne bien, il va cependant falloir respecter une certaine syntaxe : il va falloir placer les expressions entre ${ et }.

Prenons immédiatement un exemple pour bien comprendre. 
```jsx
let x = 2;
let y = 40;
//version avec concaténation
alert('x contient ' + x + '\ny contient ' + y +'\nLeur somme vaut ' + (x + y));
// version utilisant les littéraux de gabarits.
alert(`x contient ${x}
y contient ${y}
Leur somme vaut ${x + y}`);
```
## Indexation des chaînes de caractères
### De quelle manière sont indexées les chaînes ?

Chaque caractère qui se trouve dans une chaîne correspond à un numéro d’index. La numérotation commence par 0.
exemple pour la chaine de caractère `LADAPT est une association.`

| L | A | D | A | P | T | · | e | s | t | · | u | n | e | · | a | s | s | o | c | i | a | t | i | o | n | . |
| - | - | - | - | - | - | - | - | - | - | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- |
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 |


Le premier caractère de la chaîne est `L` et correspond à l’index 0. Le dernier caractère est `.`, il correspond à 26.
Les espaces sont également indexés: 6, 10  et 14.
### Déterminer la longueur d’une chaîne
En utilisant la propriété `length`, vous pouvez obtenir le nombre de caractères dans une chaîne.
```jsx
"LADAPT est une association.".length;// renvoie 27
```
> **ATTENTION**
>
> la propriété `length` renvoie le nombre réel de caractères, dans l'exemple 27 et pas le numéro d’index final 26.
> 
> il y a bien 27 caractères numérotés de 0 à 26

### Accéder aux caractères
Dans la console, entrez l'instruction suivante : 
```jsx
"LADAPT est une association."[5];
```
?[Quel resultat obtenez-vous ?](single)
- [ ] A
- [ ] D
- [ ] P
- [x] T
- [ ] L

En utilisant des crochets et le bon numéro d'index, vous pouvez accéder à n’importe quel caractère de la chaîne.

Vous pouvez également utiliser la méthode charAt() pour renvoyer le caractère en utilisant le numéro d’index comme paramètre
```jsx
"LADAPT est une association.".charAt(7); // renvoie 'e'
```
Vous pouvez utiliser indexOf() pour renvoyer le numéro d’index par la première instance d’un caractère.
```jsx
"LADAPT est une association.".indexOf('A'); // renvoie 1
```
Bien que `A` apparaisse deux fois dans la chaîne , indexOf() obtiendra la première instance, ici 1.

lastIndexOf() permet de trouver la dernière instance.
```jsx
"LADAPT est une association.".lastIndexOf('A'); // renvoie 3
```
Avec ces deux méthodes, vous pouvez également rechercher plusieurs caractères dans la chaîne. Elles renverront le numéro d’index du premier caractère dans l’instance.
```jsx
"LADAPT est une association.".indexOf("est");// renvoie 7
```
![travaux en cours](https://www.gifgratis.net/gifs_animes/travaux_en_cours/21.gif "travaux en cours")
