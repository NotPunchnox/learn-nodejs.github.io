# Mise en place d'une API avec Express

## Objectif
Dans cette leçon, vous allez apprendre à créer une API REST de base en utilisant Express. Ce guide couvre l'initialisation du projet, l'écriture des routes et la mise en place d'un serveur fonctionnel.

---

## Étape 1 : Créer un dossier pour le projet
1. Choisissez un emplacement sur votre machine (par exemple, sur le bureau).
2. Créez un nouveau dossier pour le projet, par exemple `MonAPI`.
3. Ouvrez un terminal, puis accédez au dossier avec la commande :
   ```bash
   cd Desktop/MonAPI/
   ```

---

## Étape 2 : Initialiser le projet Node.js
1. **Initialisez un projet Node.js**  
   Exécutez la commande suivante pour générer un fichier `package.json` avec les paramètres par défaut :
   ```bash
   npm init -y
   ```

2. **Installer Express.js**  
   Express.js est une bibliothèque utilisée pour créer des serveurs web. Installez-la avec la commande :
   ```bash
   npm install express
   ```

Votre projet est maintenant configuré.

---

## Étape 3 : Créer le fichier principal du projet
1. **Créez un fichier nommé `index.js`** à la racine de votre projet.
2. **Ajoutez le code suivant dans `index.js`** :

```js
const express = require('express');
const app = express();

// Middleware pour analyser le JSON
app.use(express.json());

// Simuler une base de données en mémoire
let utilisateurs = [
    { id: 1, nom: 'Alice' },
    { id: 2, nom: 'Bob' }
];

// ROUTES

// Page d'acceuil de l'API
app.get('/', (req, res) => {
    res.send("Welcome to: My First API !");
})

// Lire tous les utilisateurs
app.get('/api/utilisateurs', (req, res) => {
    res.json(utilisateurs);
});

// Lire un utilisateur par ID
app.get('/api/utilisateurs/:id', (req, res) => {
    const utilisateur = utilisateurs.find(u => u.id === parseInt(req.params.id));
    if (!utilisateur) return res.status(404).json({ message: 'Utilisateur non trouvé' });
    res.json(utilisateur);
});

// Ajouter un utilisateur
app.post('/api/utilisateurs', (req, res) => {
    const nouvelUtilisateur = {
        id: utilisateurs.length + 1,
        nom: req.body.nom
    };
    utilisateurs.push(nouvelUtilisateur);
    res.status(201).json(nouvelUtilisateur);
});

// Mettre à jour un utilisateur
app.put('/api/utilisateurs/:id', (req, res) => {
    const utilisateur = utilisateurs.find(u => u.id === parseInt(req.params.id));
    if (!utilisateur) return res.status(404).json({ message: 'Utilisateur non trouvé' });
    utilisateur.nom = req.body.nom;
    res.json(utilisateur);
});

// Supprimer un utilisateur
app.delete('/api/utilisateurs/:id', (req, res) => {
    const index = utilisateurs.findIndex(u => u.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Utilisateur non trouvé' });
    utilisateurs.splice(index, 1);
    res.status(204).send(); // Pas de contenu
});

// Démarrer le serveur
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
```

---

## Étape 4 : Lancer le serveur
Pour démarrer le serveur, exécutez la commande suivante dans le terminal :
```bash
node index.js
```

Si tout est correct, vous verrez ce message dans votre terminal :
```
Serveur démarré sur http://localhost:5000
```

---

## Étape 5 : Tester votre API
Utilisez un outil comme [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/) pour tester les différentes routes de votre API.

Voici les routes disponibles :
1. **GET** `/api/utilisateurs` : Récupérer tous les utilisateurs.
2. **GET** `/api/utilisateurs/:id` : Récupérer un utilisateur par ID.
   - Exemple : `/api/utilisateurs/1` retourne `{ id: 1, nom: "Alice" }`.
3. **POST** `/api/utilisateurs` : Ajouter un nouvel utilisateur.
   - Corps de la requête :
     ```json
     { "nom": "Charlie" }
     ```
4. **PUT** `/api/utilisateurs/:id` : Mettre à jour un utilisateur existant.
   - Corps de la requête :
     ```json
     { "nom": "David" }
     ```
5. **DELETE** `/api/utilisateurs/:id` : Supprimer un utilisateur.

---

## Résultat attendu
Votre API est maintenant fonctionnelle ! Vous pouvez tester les routes et obtenir des réponses comme :
- **GET `/api/utilisateurs`** :
  ```json
  [
      { "id": 1, "nom": "Alice" },
      { "id": 2, "nom": "Bob" }
  ]
  ```

- **POST `/api/utilisateurs`** avec `{ "nom": "Charlie" }` :
  ```json
  { "id": 3, "nom": "Charlie" }
  ```

---

### Prochain cours
Découvrez comment utiliser Insomnia pour interagir facilement avec votre API : [Cours sur Insomnia](./insomnia.md).

Bon développement ! 🚀