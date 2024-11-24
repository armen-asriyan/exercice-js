# Projet Handicap - Sensibilisation au Handicap

## Description

Ce projet est une page interactive qui affiche une liste de types de handicaps, ainsi que des détails lorsqu'un utilisateur clique sur un élément de la liste. L'objectif est de pratiquer l'utilisation de l'API `fetch` en JavaScript et de manipuler le DOM.

## Fonctionnalités

1. Charger dynamiquement une liste de types de handicaps à partir d'un fichier JSON.
2. Afficher les détails (description et solutions) pour chaque handicap lorsqu'il est cliqué.
3. Utiliser une structure HTML, CSS et JS propre et adaptée.

## Fichiers du projet

- **index.html** : Structure de la page web.
- **handicap.json** : Données fictives sur les handicaps.
- **script.js** : Contient la logique JavaScript pour charger les données et gérer les interactions.
- **styles.css** : Style visuel de la page.
- **README.md** : Documentation expliquant la démarche.

## Démarche et apprentissage

1. **Découverte de fetch() :** Nous avons appris que `fetch()` permet de charger des données à partir d'une URL ou d'un fichier local. Les données sont récupérées sous forme de promesse et doivent être converties en JSON.
2. **Manipulation du DOM :** Nous avons utilisé `document.createElement` et `appendChild` pour créer dynamiquement des éléments HTML en fonction des données JSON.
3. **Gestion des événements :** L'ajout d'écouteurs d'événements (`addEventListener`) nous a permis de rendre la page interactive.
4. **Gestion des erreurs :** Nous avons ajouté un `.catch()` pour afficher des messages d'erreur si les données ne sont pas chargées correctement.
