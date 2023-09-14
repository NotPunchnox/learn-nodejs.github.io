# Les variables et les types de données en JavaScript.

## Objectif
Dans cette leçon vous allez apprendre à manipuler les variables, les constantes et les types de données en JavaScript.

## Les constantes
Une constante est une valeur qui est fixée et qui ne peut pas être modifiée par le programme durant son exécution.

Pour créer une constante en Node.js, il faut utiliser le mot clé suivant: `const`. Ensuite on va lui donner un nom et une valeur.

```js
const maConstante = "Hello World"
```

Si je veux utiliser ma constante il suffit d'écrire son nom, exemple:
```js
const maConstante = "Hello World"

console.log(maConstante)
//Terminal: Hello World
```

## Les variables
Une variable est une valeur qui peut être modifiée par le programme durant son exécution.

Pour créer une variable, il suffit d'utiliser le mot clé suivant: `var` ou `let`. Ensuite on va lui donner un nom et une valeur.

```js
var maVariable = "Hello World"
```

Si je veux modifier ma variable il suffit d'écrire son nom et de lui donner une nouvelle valeur, exemple:
```js
var maVariable = "Hello World"
console.log(maVariable) //Terminal: Hello World

maVariable = "Bonjour le monde"
console.log(maVariable) //Terminal: Bonjour le monde
```
exemple 2:
```js
let maVariable = 1
console.log(maVariable) //Terminal: 1

maVariable = maVariable + 1
//Terminal: 2

//Vous pouvez utiliser "maVariable++" au lieux de faire maVariable = maVariable + 1, mais on le verras plus tard.
```

## Les types de données
En JavaScript, il existe plusieurs types de données, les plus courants sont les suivants:

- Les nombres, ils sont appelés `number` en informatique.
    ```js
    const nombre = 1
    ```
- Les chaînes de caractères, elles sont appelées `string` en informatique.
    ```js
    const string = "ceci est une chaine de caractères"
    ```
- Les booléens, ils permettent de représenter les valeurs `vrai` ou `faux`.
  ```js
  const vrai = true
  const faux = false
  ```
- Les tableaux, Ils permettent de stocker plusieurs valeurs dans une seule variable/constante.
  ```js
  const tableau = [1, 2, 3, 4, 5]
  ```
- Les objets, ils permettent de stocker plusieurs valeurs et de les organisées dans une seule variable/constante.
  ```js
  const objet = {
      nom: "punchnox",
      etude: "tmsec",
  }
  ```
- Les Dates, elles permettent de stocker une date.
  ```js
  const date = new Date()
  //date représente la date actuelle
  ```
- RegExp ( Expression régulière ): elles permettent de stocker une expression régulière.
  ```js
  const regex = /punchnox/
  //regex représente "punchnox", c'est à dire que si veut chercher le mot "punchnox" dans une chaine de caractères on peut utiliser la variable regex. ( on le verra plus tard dans les leçons aussi )
  ```

Cours suivant : [Les opérateurs en JavaScript.](./operateurs.md)