// Le script pour index.html

// Récupération des éléments du DOM
const navSignInButton = document.getElementById("navbar-sign-in-button");
const navSignOutButton = document.getElementById("navbar-sign-out-button");
const navAccountButton = document.getElementById("navbar-account-button");

window.onload = () => {
  // Récupère l'utilisateur stocké dans sessionStorage
  const storedUser = sessionStorage.getItem("currentUser");

  // Vérifie si un utilisateur est connecté
  if (storedUser !== null) {
    // Si l'utilisateur est connecté, on cache le bouton "Se Connecter"

    navSignInButton.style.display = "none";
    // Affiche le bouton "Se Déconnecter"

    navSignOutButton.style.display = "list-item";
    // Affiche le bouton "Profil"

    navAccountButton.style.display = "list-item";
    console.log(
      "Le bouton 'Se Connecter' est caché, utilisateur actuel: " + storedUser
    );
  } else {
    // Si aucun utilisateur n'est connecté, on affiche le bouton "Se Connecter"
    navSignInButton.style.display = "list-item";

    // On cache le bouton "Se Déconnecter"

    navSignOutButton.style.display = "none";
    console.log(
      "Le bouton 'Se Connecter' est affiché, utilisateur actuel: " + storedUser
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
