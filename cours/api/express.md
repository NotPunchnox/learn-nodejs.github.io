# Introduction à Express

## Objectif
Dans ce mini tutoriel, vous allez apprendre à utiliser Express, un framework minimaliste pour créer des serveurs web avec Node.js.

## Express
**Express est une bibliothèque qui facilite la création d'applications web et d'API.**  
Il simplifie la gestion des routes, des requêtes HTTP et des réponses.

### Installation
Avant d'utiliser Express, vous devez l'installer via npm.  
Dans votre terminal, exécutez la commande suivante :
```bash
npm install express
```

### Création d'un serveur avec Express
Voici un exemple simple pour démarrer un serveur web avec Express :

Exemple :
```js
// Importer la bibliothèque Express
const express = require('express');

// Créer une application Express
const app = express();

// Définir une route de base
app.get('/', (req, res) => {
    res.send('Bonjour, bienvenue sur mon serveur Express !');
});

// Démarrer le serveur sur le port 3000
app.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000');
});
```

Dans cet exemple :
- `app.get()` définit une route pour répondre aux requêtes GET.
- `res.send()` envoie une réponse au client.
- `app.listen()` démarre le serveur sur le port spécifié.

### Ajout de plusieurs routes
Vous pouvez créer plusieurs routes pour gérer différents types de requêtes.

Exemple :
```js
// Route d'accueil
app.get('/', (req, res) => {
    res.send('Accueil');
});

// Route "À propos"
app.get('/about', (req, res) => {
    res.send('À propos de ce site');
});

// Route avec paramètre
app.get('/user/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Bonjour, ${name} !`);
});
```

### Middleware
Un middleware est une fonction qui intercepte les requêtes avant qu’elles n’atteignent la route. Express permet d’ajouter facilement des middlewares.

Exemple avec un middleware simple :
```js
// Middleware qui log les requêtes
app.use((req, res, next) => {
    console.log(`Requête reçue : ${req.method} ${req.url}`);
    next(); // Passer au middleware ou à la route suivante
});

// Route d'accueil
app.get('/', (req, res) => {
    res.send('Accueil avec middleware');
});
```

### Servir des fichiers statiques
Vous pouvez utiliser Express pour servir des fichiers statiques comme des images, des styles CSS ou des fichiers JavaScript.

Exemple :
```js
app.use(express.static('public'));
```
En plaçant vos fichiers dans un dossier `public`, ils seront accessibles directement dans le navigateur.

### Résumé
- **Créer un serveur** : Utilisez `app.listen()` pour démarrer votre serveur.
- **Gérer des routes** : Utilisez `app.get()`, `app.post()`, etc., pour répondre aux requêtes.
- **Middleware** : Interceptez les requêtes avant qu'elles n'atteignent une route.
- **Fichiers statiques** : Servez des fichiers avec `express.static`.

**Essayez d’ajouter des routes et d’intercepter des requêtes avec des middlewares !**

Cours suivant : [Comment Tester et utiliser une API](../../examples/api/insomnia.md)