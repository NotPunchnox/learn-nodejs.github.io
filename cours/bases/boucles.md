## Les boucles

Les boucles permettent de répéter une ou plusieurs instructions un certain nombre de fois. Il existe plusieurs types de boucles en JavaScript et Node.js, Nous allons voir les plus courantes.

### La boucle `for`
La boucle `for` est la plus courante, elle permet de répéter un bloc d'instructions un certain nombre de fois. Elle est composée de 3 parties :

- L'initialisation de la variable de contrôle
- La condition de sortie de la boucle
- L'incrémentation de la variable de contrôle

```js
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

**Que va faire ce code ?**
Quand on utilise `for`, on déclare une variable de contrôle, ici c'est `i` et on lui donne une valeur donc `let i = 0`, ensuite on donne une condition pour finir la boucle dans notre cas c'est `i < 10` ( donc si i est inférieur à 10 on continue la boucle) et enfin on ajoute une action à faire à chaque tour de boucle, ici c'est `i++` ( donc on ajoute 1 à `i` à chaque tour de boucle ).

Bien évidamment je vous recommande d'essayer plusieurs combinaisons pour maitriser correctement la boucle `for`.

### La boucle `while`
La boucle `while` est une boucle qui va répéter un bloc d'instructions tant qu'une condition est vraie. Elle est composée d'une seule partie :

- La condition de sortie de la boucle

```js
let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}
```

**Que va faire ce code ?**
Quand on utilise `while`, on déclare une variable de contrôle, ici c'est `i` et on lui donne une valeur donc `let i = 0`, ensuite on donne une condition pour finir la boucle dans notre cas c'est `i < 10` ( donc si i est inférieur à 10 on continue la boucle) et enfin on ajoute une action à faire à chaque tour de boucle, ici c'est `i++` ( donc on ajoute 1 à `i` à chaque tour de boucle ).

### La boucle `do while`
La boucle `do while` est une boucle qui va répéter un bloc d'instructions tant qu'une condition est vraie. Elle est composée de deux parties :

- La condition de sortie de la boucle
- Le bloc d'instructions

```js
let i = 0;

do {
    console.log(i);
    i++;
} while (i < 10);
```

**Que va faire ce code ?**
Quand on utilise `do while`, on déclare une variable de contrôle, ici c'est `i` et on lui donne une valeur donc `let i = 0`, ensuite on ajoute une action à faire à chaque tour de boucle, ici c'est `i++` ( donc on ajoute 1 à `i` à chaque tour de boucle ) et enfin on donne une condition pour finir la boucle dans notre cas c'est `i < 10` ( donc si i est inférieur à 10 on continue la boucle).

### La boucle `for of`
La boucle `for of` est une boucle permettant d'énumérer un tableau ( Array )

- La variable de contrôle
- Le tableau

```js
const fruits = ["pomme", "banane", "poire"];

for (const fruit of fruits) {
    console.log(fruit);
}
```

**Que va faire ce code ?**
Ce script va afficher chaque élément du tableau `fruits` dans la console.


### La boucle `for in`
La boucle `for in` est une boucle permettant d'énumérer un objet ( Object )

- La variable de contrôle
- L'objet

```js
const personne = {
    nom: "Doe",
    prenom: "John",
    age: 20
}

for(const infos in personne) {
    console.log(infos)
}
```

**Que va faire ce code exactement ?**
Ce script va afficher chaque clé ( nom, prenom, age ) de l'objet dans la console.
Cette boucle contrairement aux autre est sous forme de fonction.

### La boucle `For Each`
La boucle `for each` est une boucle similaire à `for of` mais elle est disponible seulement en Node.js et elle est plus performante.

- Le tableau: `fruits`
- La fonction: `forEach`

```js
const fruits = ["pomme", "banane", "poire"];

fruits.forEach(fruit => {
    console.log(fruit)
})
```

**Que va faire ce script ?**
Ce script va énumérer chaque élément du tableau `fruits` et les afficher dans la console.


Cours suivant: [Les fonctions](/cours/bases/fonctions.md)