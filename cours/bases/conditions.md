# Les conditions

## Objectif
Dans cette leçon vous allez apprendre à utiliser les conditions en JavaScript pour pouvoir les réutiliser en Node.js

## Les conditions
**Les conditions permettent d'exécuter du code seulement si une condition est remplie.**

Pour créer une condition en JavaScript, il faut utiliser le mot clé suivant: `if`, ce mot clé signifie `si... alors...`

Exemple
```js
const nombre = 1//la constante nombre est égale à 1

if(nombre === 1) {//si la constante nombre est égale à 1 alors,
    console.log("Le nombre est égal à 1")//on affiche dans la console "Le nombre est égal à 1"
}
```

*Vous n'êtes pas obligé d'utiliser les accolades {} pour dire au programme d'executer une instruction, vous pouvez utiliser le mot clé return pour retourner une action*
/!\ **Cependant si vous utilisez return les lignes de code se trouvant en dessous ne seront pas executés**

Exemple:
```js
const nombre = 1

if(nombre === 1) return console.log("Le nombre est égale à un")
//le programme se termine par l'action ci dessus

console.log("Ce message ne va pas apparaître")
```

Dans le Javascript nous avons la possibilité de dire `sinon`, sinon s'utilise avec le mot clé suivant `else`

Exemple:
```js
const nombre = 1

if(nombre === 1) {//Si le nombre est égale à 1 alors...
    console.log("Le nombre est égale à 1")//Le nombre est égale à 1
} else {//Si le nombre n'est pas égale à 1 alors...
    console.log("Le nombre n'est pas égale à un")//le nombre n'est pas égale à 1
}
```

Vous avez aussi la possibilité de donner une condition à `else`, pour ce faire il faudra tout simplement ajouter `if` à `else` donc `else if` suivi de la nouvelle instruction...

Exemple:
```js
const nombre = 2

if(nombre === 1) {
    console.log("le nombre est égale à 1")
} else if (nombre === 2) {
    console.log("Le nombre est égale à deux")
} else {
    console.log("Le nombre est égale à " + nombre)
}
```


**IMPORTANT**
Je vais pas vous faire tout les exemples possibles et immaginable mais vous pouvez vous amuser à essayer un peu toutes les combinaisons possible, dans le cours précédent nous avions vu les opérateurs, il faut savoir que les opérateurs sont utilisables dans les conditions, je vous ai fait une petite liste ci dessous avec des exemples de conditions et d'opérations

```js
var nombre = 1
var nombre2 = 2

var text = "hello"
var text2 = "world"

if(nombre === 1)return console.log("nombre est égale à 1")
if(nombre !== 1) return console.log("nombre n'est pas égale à 1")
if(nombre !== nombre2) return console.log("nombre n'est pas égale à nombre2")
if(text == text2) return console.log("Le text est égale à text2")


if(nombre > nombre2) return console.log("nombre est supérieur à nombre2")
if(nombre < nombre2) return console.log("nombre est inférieur à nombre2")
if(nombre >= nombre2) return console.log("nombre est supérieur ou égale à nombre2")
if(nombre <= nombre2) return console.log("nombre est inférieur ou égale à nombre2")


if(nombre == 1 && nombre2 == 2) return console.log("nombre est égale à 1 et nombre2 est égale à 2")
if(nombre == 1 || nombre2 == 2) return console.log("nombre est égale à 1 ou nombre2 est égale à 2")

if(nombre !== 1 && nombre2 !== 2) return console.log("nombre n'est pas égale à 1 et nombre2 n'est pas égale à 2")
if(nombre !== 1 || nombre2 !== 2) return console.log("nombre n'est pas égale à 1 ou nombre2 n'est pas égale à 2")
if(nombre == 1 && nombre2 !== 2) return console.log("nombre est égale à 1 et nombre2 n'est pas égale à 2")

```

Cours suivant: [Les Tableaux](./tableaux.md)