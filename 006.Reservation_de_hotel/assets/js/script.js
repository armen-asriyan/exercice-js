const utilisateurs = [
  { nom: "Alice", numeroReservation: "12345", codeAcces: "abc123", solde: 500 },

  { nom: "Bob", numeroReservation: "67890", codeAcces: "xyz789", solde: 1000 },

  {
    nom: "Charlie",
    numeroReservation: "11223",
    codeAcces: "def456",
    solde: 100,
  },
];

const buttonReserver = document.getElementById("btnReserver");

buttonReserver.addEventListener("click", function () {
  // Récupère le numéro de réservation saisi par l'utilisateur dans le champ avec l'id 'numeroReservation'
  const numeroReservationEntree =
    document.getElementById("numeroReservation").value;

  // Récupère code d'accès saisi par l'utilisateur dans le champ avec l'id 'codeAcces'
  const codeAccesEntree = document.getElementById("codeAcces").value;

  // Récupère le prix de la réservation (€)
  const prixReservation = document.getElementById("montantRetrait").value;

  // Sélectionne l'élément HTML avec l'id 'messageResultat' pour afficher le résultat de réservation
  const messageResultat = document.getElementById("messageResultat");

  // Recherche dans le tableau 'utilisateurs' un compte avec le numéro de réservation et code d'accès saisi par l'utilisateur
  const compte = utilisateurs.find(
    (c) =>
      c.numeroReservation === numeroReservationEntree &&
      c.codeAcces === codeAccesEntree
  );

  if (!numeroReservationEntree || !codeAccesEntree) {
    messageResultat.textContent = "Erreur : Les champs sont vides"; // Texte d'erreur affiché
    messageResultat.style.color = "black"; // Texte en rouge pour indiquer l'erreur
    messageResultat.className = "alert alert-danger mt-3";
    return;
    // Sort de la fonction car les champs sont vides
  }
  // Si aucun utilisateur correspondant n'est trouvé, affiche un message d'erreur
  else if (!compte) {
    messageResultat.textContent =
      "Erreur : Le numéro de réservation ou le code d'accès invalide"; // Texte d'erreur affiché
    messageResultat.style.color = "black"; // Texte en rouge pour indiquer l'erreur
    messageResultat.className = "alert alert-danger mt-3";
    return;
    // Sort de la fonction car les informations sont incorrectes
  }

  if (prixReservation > compte.solde) {
    messageResultat.textContent = "Erreur : fonds insuffisants"; // Affiche un message d'erreur si le solde est insuffisant
    messageResultat.style.color = "black"; // Texte en rouge
    //alert("Erreur : fonds insuffisants"); // Affiche une alerte avec le même message d'erreur
    messageResultat.className = "alert alert-danger mt-3";
  } // Vérifie si le montant demandé est valide (supérieur à 0)
  else if (prixReservation > 0) {
    compte.solde -= prixReservation; // Déduit le montant demandé du solde du compte
    // Affiche un message de succès avec le nom du titulaire du compte, le montant retiré, et le nouveau solde
    messageResultat.textContent =
      "Bonjour " +
      compte.nom +
      ", la réservation est faite, " +
      "Nouveau solde : " +
      compte.solde +
      "€";
    //messageResultat.style.color = "green"; // Texte en vert pour indiquer le succès de l'opération
    messageResultat.className = "alert alert-success mt-3";
  }
});
