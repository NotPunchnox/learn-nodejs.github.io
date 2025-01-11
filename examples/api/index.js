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

// Afficher la page d'acceuil de l'api
app.get('/', (req, res) => {
    res.json('Welcome to My First API!');
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
