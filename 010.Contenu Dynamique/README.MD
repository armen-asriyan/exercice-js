Explications simples du code :

    Tableaux d'utilisateurs et d'articles :
        Les utilisateurs et articles sont stockés sous forme d'objets avec des propriétés comme id, nom, photo, etc.
        Ces données seront utilisées pour générer dynamiquement les cartes.

    Génération des cartes :
        Les fonctions forEach parcourent les tableaux d'objets.
        Chaque carte (en HTML) est créée dynamiquement sous forme de chaîne de caractères et insérée dans la page avec innerHTML.

    Fonctionnalité des boutons :
        Chaque bouton sur une carte appelle une fonction avec l'id correspondant (showUserProfile ou showArticle).
        Ces fonctions utilisent find pour rechercher l'utilisateur ou l'article avec cet id et afficher ses informations.

    Alertes pour afficher les détails :
        Lorsqu'un utilisateur ou un article est trouvé, une fenêtre d'alerte (alert) affiche ses détails.
        Si l'ID est incorrect ou n'existe pas, un message d'erreur est affiché.