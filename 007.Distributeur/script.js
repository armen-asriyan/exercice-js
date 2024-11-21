// Base de données des comptes (tableau d'objets)
const comptes = [
  { nom: "Tom", numeroCarte: "123456789", codePin: "0000", solde: 1000 }, // Compte de Tom avec numéro de carte, code PIN et solde initial
  { nom: "Omar", numeroCarte: "987654321", codePin: "1234", solde: 500 }, // Compte de Omar avec numéro de carte, code PIN et solde initial
  { nom: "Arnaud", numeroCarte: "111122223", codePin: "4321", solde: 2000 }, // Compte de Arnaud avec numéro de carte, code PIN et solde initial
  { nom: "Alice", numeroCarte: "123456789", codePin: "2743", solde: 2000 },
  { nom: "Bob", numeroCarte: "987654321", codePin: "1490", solde: 3787 },
  { nom: "Charlie", numeroCarte: "456789012", codePin: "5678", solde: 1543 },
  { nom: "David", numeroCarte: "789012345", codePin: "6734", solde: 2698 },
];

// Fonction de retrait, exécutée lors d'un clic sur le bouton "Retirer"
function effectuerRetrait() {
  // Récupère le numéro de carte saisi par l'utilisateur dans le champ avec l'id 'numeroCarte'
  const numeroCarteEntree = document.getElementById("numeroCarte").value;

  // Récupère le code PIN saisi par l'utilisateur dans le champ avec l'id 'codePin'
  const codePinEntree = document.getElementById("codePin").value;

  // Récupère le montant demandé pour le retrait et le convertit en nombre décimal
  const montantDemande = parseFloat(
    document.getElementById("montantRetrait").value
  );

  // Sélectionne l'élément HTML avec l'id 'messageResultat' pour afficher le résultat du retrait
  const messageResultat = document.getElementById("messageResultat");

  // Recherche dans le tableau 'comptes' un compte avec le numéro de carte et code PIN saisis
  const compte = comptes.find(
    (c) => c.numeroCarte === numeroCarteEntree && c.codePin === codePinEntree
  );

  // Si aucun compte correspondant n'est trouvé, affiche un message d'erreur
  if (!compte) {
    messageResultat.textContent =
      "Erreur : numéro de carte ou code PIN invalide"; // Texte d'erreur affiché
    messageResultat.style.color = "black"; // Texte en rouge pour indiquer l'erreur
    messageResultat.className = "alert alert-danger mt-3";
    return; // Sort de la fonction car les informations sont incorrectes
  }

  // Vérifie si le solde est insuffisant pour le montant demandé
  if (montantDemande > compte.solde) {
    messageResultat.textContent = "Erreur : fonds insuffisants"; // Affiche un message d'erreur si le solde est insuffisant
    messageResultat.style.color = "black"; // Texte en rouge
    //alert("Erreur : fonds insuffisants"); // Affiche une alerte avec le même message d'erreur
    messageResultat.className = "alert alert-danger mt-3";
  }
  // Vérifie si le montant demandé est valide (supérieur à 0)
  else if (montantDemande > 0) {
    compte.solde -= montantDemande; // Déduit le montant demandé du solde du compte
    // Affiche un message de succès avec le nom du titulaire du compte, le montant retiré, et le nouveau solde
    messageResultat.textContent =
      "Bonjour " +
      compte.nom +
      ", retrait de " +
      montantDemande +
      "€ réussi. Nouveau solde : " +
      compte.solde +
      "€";
    //messageResultat.style.color = "green"; // Texte en vert pour indiquer le succès de l'opération
    messageResultat.className = "alert alert-success mt-3";
  }
  // Si le montant demandé est inférieur ou égal à 0, affiche un message d'erreur
  else {
    messageResultat.textContent = "Erreur : montant non valide"; // Message indiquant que le montant est incorrect
    messageResultat.style.color = "red"; // Texte en rouge
    messageResultat.className = "alert alert-danger mt-3";
  }
}
