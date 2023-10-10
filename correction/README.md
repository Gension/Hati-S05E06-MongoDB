# API Todo List avec MariaDB, Sequelize et Express

## Objectif 
Créer une API pour gérer une Todo List, en utilisant MariaDB comme base de données, Sequelize comme ORM, et Express pour le framework backend.

## Initialisation du projet

- Créez un nouveau dossier pour votre projet.
- Initialisez un projet Node.js: `npm init -y`.
- Installez les packages nécessaires: `npm install express mariadb sequelize`.

## Configuration de la Base de Données :

En utilisant [La liste des commandes](./sql/command.md) :

1. Créez une nouvelle base de données dans MariaDB.
2. Créez une table todos avec les colonnes suivantes:
    - `id` (clé primaire, auto-incrémentée)
    - `title` (VARCHAR)
    - `description` (VARCHAR, nullable)
    - `status` (VARCHAR, par défaut 'pending')
    - `created_at` (DATE)
    - `updated_at` (DATE)
3. Configurez Sequelize pour se connecter à votre base de données MariaDB.
4. Définissez un modèle Todo correspondant à la table todos.
5. Initialisez une application Express.
    - Créez les routes suivantes:
        - `GET /todos`: Récupère tous les todos.
        - `POST /todos`: Crée un nouveau todo.
        - `GET /todos/:id`: Récupère un todo spécifique par ID.
        - `PUT /todos/:id`: Met à jour un todo spécifique par ID.
        - `DELETE /todos/:id`: Supprime un todo spécifique par ID.

6. Utilisez des outils comme Postman, Insomnia pour tester votre API.
