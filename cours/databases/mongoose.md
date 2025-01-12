# Utilisation de MongoDB avec MongoDB Atlas et Express.js

## Objectif
Dans cette leçon, vous allez apprendre à connecter une application Node.js/Express.js à MongoDB en utilisant MongoDB Atlas. Vous verrez également comment effectuer des opérations sur une base de données.

---

## Étape 1 : Configuration de MongoDB Atlas
1. **Créer un compte MongoDB Atlas**  
   Rendez-vous sur [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) et créez un compte si ce n'est pas encore fait.

2. **Créer un cluster** :
   - Cliquez sur **"Create a Cluster"**.
   - Choisissez un fournisseur cloud et une région gratuite (par exemple AWS, région "Free Tier").
   - Finalisez la création du cluster.

3. **Ajouter un utilisateur à la base de données** :
   - Allez dans l'onglet **"Database Access"**.
   - Cliquez sur **"Add New Database User"**.
   - Ajoutez un utilisateur avec un nom d'utilisateur et un mot de passe.
   - Notez ces identifiants pour la connexion.

4. **Ajouter une adresse IP à la liste blanche** :
   - Allez dans **"Network Access"**.
   - Cliquez sur **"Add IP Address"**.
   - Ajoutez votre adresse IP actuelle ou autorisez toutes les adresses en utilisant `0.0.0.0/0`.

5. **Obtenir l'URI de connexion** :
   - Allez dans **"Clusters"**, puis cliquez sur **"Connect"**.
   - Sélectionnez **"Connect your application"**.
   - Copiez l'URI. Cela ressemblera à ceci :
     ```
     mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
     ```

---

## Étape 2 : Initialisation du projet Express.js
1. **Créer un nouveau projet Node.js** :
   ```bash
   mkdir mongoose-express
   cd mongoose-express
   npm init -y
   ```

2. **Installer les dépendances nécessaires** :
   ```bash
   npm install express mongoose
   ```

   - `express` : Framework pour créer un serveur.
   - `mongoose` : Bibliothèque pour interagir avec MongoDB.

---

## Étape 3 : Créer un fichier principal
1. **Créer un fichier `index.js`**.
2. **Ajoutez le code suivant pour connecter votre application à MongoDB** :

### Code complet avec Express.js et MongoDB

```js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// URI de connexion MongoDB (remplacez <username>, <password> et <dbname>)
const mongoURI = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority';

// Connexion à MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connecté à MongoDB Atlas'))
    .catch(err => console.error('Erreur de connexion à MongoDB', err));

// Définir un modèle Mongoose
const utilisateurSchema = new mongoose.Schema({
    // premier element (nom) = la clé; on définit le type avec type: leType, et si il est obligatoire avec required: true ou false.
    nom: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number }
});

// Initialiser la collection nommé "Utilisateur"
const Utilisateur = mongoose.model('Utilisateur', utilisateurSchema);


// 1. Lire tous les utilisateurs
app.get('/api/utilisateurs', async (req, res) => {
    const utilisateurs = await Utilisateur.find();
    res.json(utilisateurs);
});

// 2. Lire un utilisateur par ID
app.get('/api/utilisateurs/:id', async (req, res) => {
    try {
        const utilisateur = await Utilisateur.findById(req.params.id);
        if (!utilisateur) return res.status(404).json({ message: 'Utilisateur non trouvé' });
        res.json(utilisateur);
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur' });
    }
});

// 3. Ajouter un utilisateur
app.post('/api/utilisateurs', async (req, res) => {
    try {
        const nouvelUtilisateur = new Utilisateur(req.body);
        const utilisateur = await nouvelUtilisateur.save();
        res.status(201).json(utilisateur);
    } catch (err) {
        res.status(400).json({ message: 'Erreur lors de l\'ajout', details: err });
    }
});

// 4. Mettre à jour un utilisateur
app.put('/api/utilisateurs/:id', async (req, res) => {
    try {
        const utilisateur = await Utilisateur.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!utilisateur) return res.status(404).json({ message: 'Utilisateur non trouvé' });
        
        res.json(utilisateur);
    
    } catch (err) {
        res.status(400).json({ message: 'Erreur lors de la mise à jour', details: err });
    }
});

// 5. Supprimer un utilisateur
app.delete('/api/utilisateurs/:id', async (req, res) => {
    try {
        const utilisateur = await Utilisateur.findByIdAndDelete(req.params.id);
        if (!utilisateur) return res.status(404).json({ message: 'Utilisateur non trouvé' });
        res.status(204).send(); // Pas de contenu
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur' });
    }
});

// Démarrer le serveur
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
```

---

## Étape 4 : Lancer et tester l'application
1. **Lancer le serveur** :
   ```bash
   node index.js
   ```

2. **Tester les routes avec Postman ou Insomnia** :
   - **GET** `/api/utilisateurs` : Récupérer tous les utilisateurs.
   - **POST** `/api/utilisateurs` : Ajouter un utilisateur.
     - Corps de la requête :
       ```json
       {
         "nom": "Charlie",
         "email": "charlie@example.com",
         "age": 30
       }
       ```
   - **GET** `/api/utilisateurs/:id` : Récupérer un utilisateur par ID.
   - **PUT** `/api/utilisateurs/:id` : Mettre à jour un utilisateur.
     - Corps de la requête (exemple) :
       ```json
       {
         "nom": "Charlie Updated",
         "age": 31
       }
       ```
   - **DELETE** `/api/utilisateurs/:id` : Supprimer un utilisateur.

---

## Résultat attendu
Vous aurez une API fonctionnelle avec MongoDB. Voici un exemple de réponse pour **GET** `/api/utilisateurs` :
```json
[
  {
    "_id": "63d4f93b2f4e5b0012345678",
    "nom": "Alice",
    "email": "alice@example.com",
    "age": 25
  },
  {
    "_id": "63d4f93b2f4e5b0012345679",
    "nom": "Bob",
    "email": "bob@example.com",
    "age": 28
  }
]
```

---

### Conclusion
Vous avez appris à configurer MongoDB Atlas, à connecter une application Express.js à MongoDB, et à créer une API REST complète. 🎉 