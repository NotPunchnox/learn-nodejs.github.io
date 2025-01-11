
# Les Modules avec require

## Objectif
Dans cette leçon, vous allez apprendre à utiliser les modules en Node.js pour organiser et réutiliser votre code de manière efficace.

## Les Modules
**Les modules permettent de diviser votre code en plusieurs fichiers réutilisables.**

En Node.js, chaque fichier est traité comme un module distinct. Pour utiliser le code d’un fichier dans un autre, vous devez l’exporter et l’importer à l’aide de `require`.

### Exporter un module
Pour rendre des fonctions, objets ou variables accessibles dans d’autres fichiers, vous devez les exporter. Cela se fait à l’aide de `module.exports`.

Exemple:
```js
// fichier math.js

function addition(a, b) {
    return a + b;
}

function soustraction(a, b) {
    return a - b;
}

// On exporte les fonctions pour les rendre disponibles dans d'autres fichiers
module.exports = {
    addition,
    soustraction,
};
```

Dans cet exemple, le fichier `math.js` contient deux fonctions (`addition` et `soustraction`) qui sont exportées sous forme d’un objet.

### Importer un module
Pour utiliser un module exporté dans un autre fichier, vous utilisez la fonction `require`.

Exemple:
```js
// fichier app.js

// On importe le fichier math.js
const math = require('./math.js');

const resultatAddition = math.addition(5, 3); // Appel de la fonction addition
console.log("Résultat de l'addition:", resultatAddition); // Résultat: 8

const resultatSoustraction = math.soustraction(10, 4); // Appel de la fonction soustraction
console.log("Résultat de la soustraction:", resultatSoustraction); // Résultat: 6
```

Dans cet exemple, le fichier `app.js` importe le module `math.js` et utilise ses fonctions.

### Exports individuels
Vous pouvez également exporter directement une fonction ou une variable unique sans utiliser un objet.

Exemple:
```js
// fichier salut.js

module.exports = function(name) {
    return `Salut, ${name} !`;
};
```

Et pour l’importer:
```js
// fichier app.js

const salut = require('./salut.js');

console.log(salut("Alice")); // Résultat: Salut, Alice !
```

### Modules intégrés
Node.js fournit plusieurs modules intégrés que vous pouvez utiliser directement sans avoir à les créer ou les installer.

Exemple avec le module `fs` (File System):
```js
const fs = require('fs');

// Lire le contenu d'un fichier
fs.readFile('./exemple.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Erreur lors de la lecture du fichier:", err);
        return;
    }
    console.log("Contenu du fichier:", data);
});
```

### Installer des modules tiers

Vous pouvez trouver pleins de modules externes pour vous faciliter le travail sur ce site: https://www.npmjs.com/

En plus de vos propres modules et des modules intégrés, vous pouvez utiliser des modules tiers via npm (Node Package Manager). Par exemple, pour installer `readline-sync` :

```bash
npm install readline-sync
```

Et l’utiliser:
```js
// Importer le module
const readline = require('readline-sync');

// Demander le nom d'utilisateur pour l'exemple
const username = readline.question("Whats your username: ");

// Afficher "Hi username !" avec le nom d'utilisateur choisi
console.log("Hi " + username + "!");
```

**référence** : https://www.npmjs.com/package/readline-sync

### Résumé
- **Exporter un module**: utilisez `module.exports`.
- **Importer un module**: utilisez `require`.
- **Modules intégrés**: Node.js fournit des modules prêts à l’emploi comme `fs`, `path`, etc.
- **Modules tiers**: Installez des packages avec `npm` pour enrichir vos projets.

**Amusez-vous à explorer les modules et à organiser votre code !**

Cours suivant: [Les Promesses](./promesses.md)