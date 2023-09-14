# Les opérateurs


## Les opérateurs arithmétiques
Les opérateurs arithmétiques sont des opérateurs qui permettent de faire des opérations mathématiques.

- L'addition `+`
```js
  const nombre = 1 + 1
  //nombre représente 2
```
```js
  const phrase = "hello " + "world!"
  //phrase représente "hello world!"
```
- La soustraction `-`
```js
  const nombre = 1 - 1
  //nombre représente 0
```
- La multiplication `*`
```js
    const nombre = 2 * 2
    //nombre représente 4
```
- La division `/`
```js
    const nombre = 4 / 2
    //nombre représente 2
```
- Le modulo `%`
```js
    const nombre = 5 % 2
    //nombre représente 1
```
- L'incrémentation `++`
```js
    let nombre = 1
    nombre++
    //nombre représente 2
```
- La décrémentation `--`
```js
    let nombre = 2
    nombre--
    //nombre représente 1
```
- L'opérateur d'affectation `=`
```js
    let nombre = 1
    nombre = 2
    //nombre représente 2
```
- L'opérateur d'addition et d'affectation `+=`
```js
    let nombre = 1
    nombre += 2
    //nombre représente 3
```

## Les opérateurs de comparaison
Les opérateurs de comparaison permettent de comparer deux valeurs.

- L'opérateur d'égalité `==`
```js
    const nombre = 1
    const nombre2 = 1
    console.log(nombre == nombre2)
    //Terminal: true
```
- L'opérateur d'inégalité `!=`
```js
    const nombre = 1
    const nombre2 = 2

    console.log(nombre != nombre2)
    //Terminal: true
```
- L'opérateur de supériorité `>`
```js
    const nombre = 2
    const nombre2 = 1

    console.log(nombre > nombre2)
    //Terminal: true
```
- L'opérateur de supériorité ou égalité `>=`
```js
    const nombre = 2
    const nombre2 = 1

    console.log(nombre >= nombre2)
    //Terminal: true
```
- L'opérateur d'infériorité `<`
```js
    const nombre = 1
    const nombre2 = 2

    console.log(nombre < nombre2)
    //Terminal: true
```
- L'opérateur d'infériorité ou égalité `<=`
```js
    const nombre = 1
    const nombre2 = 2

    console.log(nombre <= nombre2)
    //Terminal: true
```

## Les opérateurs logiques
Les opérateurs logiques permettent de combiner plusieurs conditions.

- L'opérateur `&&` ( ET )
```js
    const nombre = 1
    const nombre2 = 2

    console.log(nombre == 1 && nombre2 == 2)
    //Terminal: true
    //Si une des deux conditions est fausse, le résultat sera faux.
```
- L'opérateur `||` ( OU )
```js
    const nombre = 1
    const nombre2 = 2

    console.log(nombre == 1 || nombre2 == 2)
    //Terminal: true
    //Si une des deux conditions est vraie, le résultat sera vrai.
```
- L'opérateur `!` ( NON )
```js
    const bool = true

    console.log(!bool)
    //Terminal: false
    //Si `bool` n'est pas positif alors le résultat sera négatif.
```

***Cours suivant : [Les fonctions en JavaScript.](./fonctions.md)***

/!\ **Les opérateurs ci dessous sont moins fréquents mais ça peut être intéressant à savoir, cependant si vous débutez vous n'avez pas besoin de les connaitre.**

- L'opérateur de soustraction et d'affectation `-=`
```js
    let nombre = 3
    nombre -= 2
    //nombre représente 1
```
- L'opérateur de multiplication et d'affectation `*=`
```js
    let nombre = 2
    nombre *= 2
    //nombre représente 4
```
- L'opérateur de division et d'affectation `/=`
```js
    let nombre = 4
    nombre /= 2
    //nombre représente 2
```
- L'opérateur de modulo et d'affectation `%=`
```js
    let nombre = 5
    nombre %= 2
    //nombre représente 1
```
- L'opérateur d'exponentiation `**`
```js
    const nombre = 2 ** 2
    //nombre représente 4
```
- L'opérateur d'exponentiation et d'affectation `**=`
```js
    let nombre = 2
    nombre **= 2
    //nombre représente 4
```