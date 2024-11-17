const utilisateurs = [
  { nom: "Alice", login: "alice-in-chains", password: "alice2000" },
  { nom: "Bob", login: "cool-bob", password: "spongebob" },
];

const buttonSeConnecter = document.getElementById("se-connecter");

buttonSeConnecter.addEventListener("click", function () {
  const identifiantEntree = document.getElementById("identifiant").value;
  const motDePasseEntree = document.getElementById("password").value;
  const messageResultat = document.getElementById("messageResultat");
  const utilisateur = utilisateurs.find(
    (i) => i.login === identifiantEntree && i.password === motDePasseEntree
  );

  if (!identifiantEntree || !motDePasseEntree) {
    messageResultat.textContent = "Erreur : Les champs sont vides"; // Texte d'erreur affiché
    messageResultat.style.color = "black"; // Texte en rouge pour indiquer l'erreur
    messageResultat.className = "alert alert-danger mt-3";
    return;
    // Sort de la fonction car les champs sont vides
  } else if (!utilisateur) {
    messageResultat.textContent =
      "Erreur : L'identifiant ou le mot de passe invalide";
    messageResultat.style.color = "red";
    messageResultat.className = "alert alert-danger mt-3";
    return;
  } else {
    document.location.href = "./accueil.html";
  }
});
