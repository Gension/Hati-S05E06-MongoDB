# Commandes SQL

## Configuration d'un user et une bdd
1. Se connecter

`mysql -u root -p` : Pour se connecter en tant que root (avec un mot de passe à ma base)

2. Créer un utilisateur

`CREATE USER 'demo'@'localhost' IDENTIFIED BY 'mot_de_passe_secret';` : Pour créer un utilisateur `demo` avec le mot de passe `mot_de_passe_secret`

3. Créer une base de donnée 

`CREATE DATABASE demo;` : Créer une base de donnée `demo`

4. Utiliser la base de donnée

Pour pouvoir effectuer des opérations sur une base de donnée, il est important de la sélectionner au préalable : 

`USE demo;` : Je selectionne la base de donnée `demo`

## Attribution des droits

5. Je donne TOUS les droits à l'utilisateur demo sur la base de donnée

```sql
GRANT ALL PRIVILEGES ON demo.* TO 'demo'@'localhost';
``` 

> Il est possible d'attribuer des droits de manière granularité (si on le souhaite). 

```sql
    GRANT SELECT, INSERT, UPDATE,DELETE ON demo.maTable TO 'demo'@'localhost';
```

6. J'actualise les droits dans mon servuer

`FLUSH PRIVILEGES;`

## Création de table 

7. Créer une table 

```sql
    CREATE TABLE users ( 
        id INT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(100),
        last_name VARCHAR(100),
        email VARCHAR(100)
    );
```

## Opérations CRUD 

8. Insérer des données 

```sql
INSERT INTO users(first_name, last_name, email) VALUES ("John", "Doe", "john.doe@oclock.io");
```

9. Lire des données 

```sql
SELECT * FROM users; -- Selectionne TOUT sur ma table users
```

```sql
SELECT * FROM users WHERE id = 1;
```

10. Mise à jour des données 

```sql
UPDATE users SET email = "j.doe@oclock.io" WHERE first_Name = 'John';
```

11. Supression de données

```sql
DELETE FROM users WHERE first_name = 'Jane' AND last_name = 'Doe';
```

**ATTENTION** : Sur les requêtes de mise à jour et suppression, si vous ne precisez aucun filtre, il agira sur **TOUTES LES LIGNES**

## Quotes en SQL 

1. Single Quote : `'`
    - "Literals" : valeurs ou dates 
        - `SELECT * FROM users WHERE first_name = 'John';`
2. Double Quote : `"`
    - "Identifants" : nom de colonne, table
        -   Pas tous les SGBDR supportent le double quote pour échapper des mots cl" system.