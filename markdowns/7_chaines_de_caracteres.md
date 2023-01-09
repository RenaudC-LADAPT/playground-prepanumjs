# les chaînes de caractères en JavaScript

## Créer une chaîne de texte
- Pour débuter, ouvrez une nouvelle fenêtre : *Ctrl + N (sous Windows) ou Cmd + N (sous Mac).*
- Remplacez l'URL par about:blank pour avoir une page vierge.
- Ouvrez la console : *appuyez sur les touches Ctrl + Maj + J (sous Windows) ou Cmd + Opt + J (sous Mac).*

```jsx
let slogan = 'Vivre ensemble, égaux & différents';
slogan;
```

Comme nous l'avons fait avec les nombres, nous déclarons une variable, l'initialisons avec une valeur de chaîne, puis renvoyons la valeur. La seule différence ici est que lorsque nous écrivons une chaîne, nous la mettons entre guillemets.

Si vous ne le faites pas, ou si vous oubliez un des guillemets, vous déclenchez une erreur. Essayez d'entrer une de ces lignes :
```jsx
let badString = Voici un test;
let badString = 'Voici un test;
let badString = Voici un test';
```
Ces lignes de code ne fonctionnent pas parce que toute chaîne de texte qui n'est pas écrite entre guillemets est considérée comme un nom de variable, un nom de propriété, un mot réservé ou quelque chose de semblable. Quand l'interpréteur ne parvient pas à trouver la déclaration de ladite variable, une erreur est déclenchée (par ex. « missing ; before statement »). Si l'interpréteur voit le début d'une chaîne mais ne trouve pas sa fin, comme dans la ligne 2, il se plaint en émettant une erreur (avec « unterminated string literal »). Si votre programme produit de telles erreurs, revoyez‑le et vérifiez qu'aucun guillemet ne manque.

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
**Faites attention cependant à un point : si votre chaine contient un caractère qui est le même que le délimiteur de chaine choisi, il faudra neutraliser ce caractère en l’échappant au moyen d’un antislash ou changer de délimiteur.**

```jsx
let phrase1 = "LADAPT | L'association pour l'insertion sociale et professionnelle des personnes handicapées"; //delimiteur guillemets double pas besoin d'échapper les apostrophes
let phrase2 = 'LADAPT | L\'association pour l\'insertion sociale et professionnelle des personnes handicapées'; //delimiteur apostrophe, besoin d'échapper les apostrophes
```

## Concaténation

## Les littéraux de gabarits

On a vu plus tôt dans ce cours qu’il fallait en JavaScript toujours entourer nos chaines de caractères (nos textes) avec des apostrophes ou des guillemets droits.

Il existe en fait une troisième manière introduite récemment d’entourer des chaines de caractères en JavaScript qui va utiliser des accents graves `` ` ``.

La grande différence entre l’utilisation d’accents graves ou l’utilisation d’apostrophes ou de guillemets est que toute expression placée entre les accents graves va être interprétée en JavaScript. Pour le dire simplement : tout ce qui renvoie une valeur va être remplacé par sa valeur.

Cela signifie notamment qu’on va pouvoir placer du texte et des variables ensemble sans avoir besoin d’utiliser d’opérateur de concaténation puisque les variables vont être interprétées, c’est-à-dire remplacées par leur valeur.

Pour que cela fonctionne bien, il va cependant falloir respecter une certaine syntaxe : il va falloir placer les expressions entre ${ et }.

Prenons immédiatement un exemple pour bien comprendre. Pour cela, je vais créer deux variables et ensuite utiliser une boite d’alerte pour afficher leur valeur et la somme des valeurs avec un texte. On va faire ça de deux façons différentes : en utilisant la concaténation d’abord puis en utilisant les littéraux de gabarits.

![travaux en cours](https://www.gifgratis.net/gifs_animes/travaux_en_cours/21.gif "travaux en cours")
