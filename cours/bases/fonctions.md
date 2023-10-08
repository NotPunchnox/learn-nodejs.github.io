### Les fonctions
Les fonctions sont fondamentales en JavaScript (et dans les langages de programmation en général). Elles vous permettent de créer un ensemble d'instructions que vous pouvez réutiliser plusieurs fois sans avoir besoin de les réécrire à chaque fois. Les fonctions sont essentielles pour organiser et réutiliser du code, ce qui améliore la lisibilité et la maintenance de votre programme.

En JavaScript, une fonction est définie à l'aide du mot-clé `function`. Voici une structure de base pour déclarer une fonction :
```js
function nomDeLaFonction(parametre1, parametre2) {
    // Instructions à exécuter
    // ...
    return resultat; // Optionnel
}
```

* `nomDeLaFonction`: le nom qu'on veut donner à la fonction.
* `parametre1 et parametre2`: ce sont les paramètres de la fonction ils sont facultatifs mais ils permettent de donner des valeurs supplémentaire dans la fonction.
* `return`: return permet de mettre fin à la fonction en retournant une valeur donc `resultat` dans cet exemple. ( facultatif )

Voici un exemple simple d'une fonction:
```js
function addition(a, b) {
    let resultat = a + b;
    return resultat;
}
```

Vous pouvez ensuite utiliser ( on dit appeler lorsqu'on utilise une fonction ), de cette façon:
```js
const résultat = addition(1, 2)
console.log(résultat)//affiche: 3
```