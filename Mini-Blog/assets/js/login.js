// Le script pour login.html

// Liste des utilisateurs fictifs avec leurs identifiants et mots de passe
const userList = [
  { nom: "Alice", login: "aliceinchains", password: "alice2000" },
  { nom: "Bob", login: "coolbob", password: "spongebob" },
  { nom: "test", login: "test", password: "test" },
];

// Récupération des éléments du DOM

// Les boutons de la barre de navigation
const navSignInButton = document.getElementById("navbar-sign-in-button"); // Bouton "Se connecter"
const navSignOutButton = document.getElementById("navbar-sign-out-button"); // Bouton "Se déconnecter"

// Variable globale pour stocker l'utilisateur connecté
let currentUser = null;

/**
 * Met à jour l'affichage des boutons dans la barre de navigation
 * isLoggedIn - Indique si l'utilisateur est connecté
 */
function updateNavButtons(isLoggedIn) {
  navSignInButton.style.display = isLoggedIn ? "none" : "list-item"; // Masque/affiche le bouton "Se connecter"
  navSignOutButton.style.display = isLoggedIn ? "list-item" : "none"; // Masque/affiche le bouton "Se déconnecter"

  // Définit l'attribut aria-hidden pour améliorer l'accessibilité (cacher le bouton pour les lecteurs d'écran)
  navSignInButton.setAttribute("aria-hidden", isLoggedIn);
  navSignOutButton.setAttribute("aria-hidden", !isLoggedIn);
}

/**
 * Gère la connexion de l'utilisateur
 * event - L'événement déclenché par le formulaire de connexion
 */
function signIn(event) {
  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire

  // Récupère les entrées de l'utilisateur pour l'identifiant et le mot de passe
  const identifiantEntree = document.getElementById("identifiant").value;
  const motDePasseEntree = document.getElementById("password").value;
  const messageResultat = document.getElementById("messageResultat"); // Message d'erreur ou de succès

  // Recherche un utilisateur correspondant aux identifiants fournis
  const loggedInUser = userList.find(
    (i) => i.login === identifiantEntree && i.password === motDePasseEntree
  );

  // Vérifie si les champs sont vides
  if (!identifiantEntree || !motDePasseEntree) {
    messageResultat.textContent =
      "Erreur : Les champs identifiant et/ou mot de passe sont vides."; // Affiche un message d'erreur
    messageResultat.className = "alert alert-danger mt-3"; // Ajoute une classe pour le style
    return;
  }
  // Vérifie si l'utilisateur est introuvable
  else if (!loggedInUser) {
    messageResultat.textContent =
      "Erreur : Le nom d'utilisateur ou le mot de passe invalide."; // Affiche un message d'erreur
    messageResultat.className = "alert alert-danger mt-3"; // Ajoute une classe pour le style
    return;
  }

  // Enregistre l'utilisateur connecté dans sessionStorage
  sessionStorage.setItem("currentUser", JSON.stringify(loggedInUser));
  updateNavButtons(true); // Met à jour l'interface utilisateur

  // Redirige vers la page du profil après un léger délai pour garantir l'affichage
  setTimeout(() => (location.href = "../templates/profil.html"), 100);
}

/**
 * Fonction appelée lors du chargement de la page
 * Vérifie si un utilisateur est connecté et met à jour l'interface
 */
window.onload = () => {
  const storedUser = sessionStorage.getItem("currentUser"); // Récupère l'utilisateur depuis sessionStorage
  if (storedUser) {
    currentUser = JSON.parse(storedUser); // Analyse les données de l'utilisateur stockées
    updateNavButtons(true); // Met à jour l'interface pour un utilisateur connecté
    console.log("User logged in: ", currentUser); // Affiche l'utilisateur connecté dans la console
  } else {
    updateNavButtons(false); // Met à jour l'interface pour un utilisateur non connecté
    console.log("No user logged in."); // Affiche un message dans la console
  }
};
