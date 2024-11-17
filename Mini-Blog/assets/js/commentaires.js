// Le script pour commentaires.html

// Récupération des éléments du DOM
const navSignInButton = document.getElementById("navbar-sign-in-button"); // Bouton "Se Connecter"
const navSignOutButton = document.getElementById("navbar-sign-out-button"); // Bouton "Se Déconnecter"
const navAccountButton = document.getElementById("navbar-account-button"); // Bouton "Profil"

// Récupère l'utilisateur connecté depuis sessionStorage
const storedUser = JSON.parse(sessionStorage.getItem("currentUser"));

/**
 * Fonction exécutée au chargement de la page
 * Gère l'affichage des boutons en fonction de l'état de connexion de l'utilisateur
 */
window.onload = () => {
  if (storedUser !== null) {
    // L'utilisateur est connecté
    navSignInButton.style.display = "none"; // Cache le bouton "Se Connecter"
    navSignOutButton.style.display = "list-item"; // Affiche le bouton "Se Déconnecter"
    navAccountButton.style.display = "list-item"; // Affiche le bouton "Profil"
    console.log(
      "Le bouton 'Se Connecter' est caché, utilisateur actuel: " +
        JSON.stringify(storedUser.nom)
    );
  } else {
    // Aucun utilisateur connecté
    navSignInButton.style.display = "list-item"; // Affiche le bouton "Se Connecter"
    navSignOutButton.style.display = "none"; // Cache le bouton "Se Déconnecter"
    console.log(
      "Le bouton 'Se Connecter' est affiché, aucun utilisateur connecté."
    );
  }

  // Ajoute un événement de clic sur le bouton "Se Déconnecter"

  navSignOutButton.onclick = function () {
    console.log("Le bouton 'Se Déconnecter' a été pressé");

    // Retire l'utilisateur du sessionStorage (déconnexion)

    sessionStorage.removeItem("currentUser");

    // Recharge la page pour mettre à jour l'état de la connexion
    location.reload();
  };
};

/**
 * Fonction qui gère l'envoi d'un commentaire
 * @param {Event} event - L'événement de soumission du formulaire
 */
function postComment(event) {
  event.preventDefault(); // Empêche le rechargement de la page lors de la soumission

  const currentDate = new Date(); // Crée un objet Date pour obtenir la date actuelle
  const commentsContainer = document.getElementById("comments-container"); // Conteneur des commentaires
  const commentBody = document.querySelector(".card-body"); // Modèle de commentaire à cloner

  // Récupère la valeur de la zone de texte pour le commentaire
  const inputText = document.getElementById("newCommentTextArea").value;

  // Redirige vers la page de connexion si aucun utilisateur n'est connecté
  if (!storedUser) {
    location.href = "../templates/login.html?error=notLoggedIn";
    return; // Arrête l'exécution de la fonction
  }

  // Cloner l'élément .card-body et son contenu
  const newComment = commentBody.cloneNode(true);

  // Mise à jour du contenu du commentaire cloné
  const clonedElementText = newComment.querySelector(".card-text"); // Zone de texte du commentaire
  const clonedElementAuthor = newComment.querySelector("h6"); // Auteur du commentaire
  const clonedElementDate = newComment.querySelector(".comment-date"); // Date du commentaire

  clonedElementAuthor.textContent = storedUser.nom; // Remplit avec le nom de l'utilisateur connecté
  clonedElementText.textContent = inputText; // Remplit avec le texte du commentaire
  clonedElementDate.textContent = `${currentDate.toLocaleString("fr-FR", {
    month: "short",
    year: "numeric",
  })}`; // Date au format français

  // Ajout de styles pour différencier les commentaires
  newComment.classList.remove("border-bottom"); // Retire la bordure inférieure
  newComment.classList.add("border-top"); // Ajoute une bordure supérieure

  // Ajoute le nouveau commentaire au conteneur
  commentsContainer.appendChild(newComment);

  // Vide la zone de texte après l'envoi
  document.getElementById("newCommentTextArea").value = "";
}
