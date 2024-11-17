// Le script pour profil.html

const welcomeMsg = document.getElementById("welcome-message");
const navSignInButton = document.getElementById("navbar-sign-in-button");
const navSignOutButton = document.getElementById("navbar-sign-out-button");
const profilePageSignOutButton = document.getElementById(
  "sign-out-profil-page-button"
);

window.onload = () => {
  // Vérifie que tous les éléments du DOM nécessaires sont présents

  if (
    !welcomeMsg ||
    !navSignInButton ||
    !navSignOutButton ||
    !profilePageSignOutButton
  ) {
    console.error("Un ou plusieurs éléments DOM attendus sont manquants.");
    return;
  }

  // Récupérer l'utilisateur connecté depuis le sessionStorage
  const storedUser = JSON.parse(sessionStorage.getItem("currentUser"));

  if (storedUser) {
    // Afficher le contenu de la page si un utilisateur est trouvé
    document.documentElement.style.display = "initial";

    // Afficher le message de bienvenue avec le nom de l'utilisateur
    welcomeMsg.textContent = "Bienvenue, " + storedUser.nom;

    // Cacher le bouton "Se connecter" et afficher le bouton "Se déconnecter"
    navSignInButton.style.display = "none";
    navSignOutButton.style.display = "list-item";
  } else {
    // Si aucun utilisateur n'est connecté, rediriger vers la page de connexion
    console.log("Aucun utilisateur trouvé");
    location.href = "../templates/login.html?error=notLoggedIn";
  }

  // Fonction pour gérer la déconnexion
  function handleSignOut(redirectURL = null) {
    console.log("Bouton de déconnexion cliqué");
    // Supprimer les informations de l'utilisateur du sessionStorage
    sessionStorage.removeItem("currentUser");
    // Effectuer une redirection ou recharger la page
    if (redirectURL) {
      location.href = redirectURL;
    } else {
      location.reload();
    }
  }

  // Ajouter un événement de déconnexion au bouton "Se déconnecter" de la barre de navigation
  navSignOutButton.onclick = () => handleSignOut();

  // Ajouter un événement de déconnexion au bouton "Se déconnecter" de la page de profil
  profilePageSignOutButton.onclick = () => handleSignOut("../index.html");
};
