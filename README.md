# Challenge du Soir: API Todo List avec Catégories

## Objectif:
Créer une API pour gérer une Todo List avec des catégories, en utilisant MongoDB Atlas, Mongoose, Express, et dotenv.

## Instructions:

### 1. **Initialisation du Projet:**
   - Nouveau dossier pour le projet.
   - Initialisation Node.js: `npm init -y`.
   - Installation des packages: `npm install express mongoose dotenv`.

### 2. **MongoDB Atlas et Mongoose:**
   - Utilisez votre instance MongoDB Atlas crée en cours
   - Récupérez la chaîne de connexion de MongoDB Atlas.
   - Configurez Mongoose pour se connecter à MongoDB Atlas.


### 3. **Configuration de dotenv:**
   - Fichier `.env` pour la chaîne de connexion MongoDB Atlas.
   - Utilisation de `dotenv` pour charger les variables d'environnement.

### 4. **Modèles Mongoose:**
   - `Todo`: `title`, `description` (optionnelle), `status` (default 'pending'), référence à `Category`.
   - `Category`: `name` et une liste de `todos` associés.

### 5. **API avec Express:**
   - Initialisation d'une application Express.
   - Routes CRUD pour `todos` et `categories`.
   - Gestion de la création, lecture, mise à jour, et suppression des `todos` et `categories`.

### 6. **Test de l'API:**
   - Utilisation de Postman ou Insomnia pour tester l'API.

## Conseils:
- Gestion appropriée des erreurs et des cas limites (`try/catch` et erreurs`404`).

## BONUS:
- Filtres de recherche et de tri pour les routes `GET` pour récupérer les tâches `pending` ou `finished`.
