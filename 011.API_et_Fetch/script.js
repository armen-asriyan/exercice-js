// Charger le fichier JSON
fetch("./handicap.json")
  .then((response) => response.json()) // Convertir la réponse HTTP en objet JavaScript (JSON)
  .then((data) => {
    // Étape suivante après la conversion : traitement des données
    console.log(data); // Vérifier les données chargées dans la console pour débogage
    afficherHandicaps(data); // Appeler la fonction pour afficher la liste des handicaps
  })
  .catch((error) => console.error("Erreur de chargement:", error));
// Gérer les erreurs si le fichier JSON ne peut pas être chargé ou parsé

// Fonction pour afficher la liste des handicaps dans un élément HTML <ul>
function afficherHandicaps(handicaps) {
  const liste = document.getElementById("liste-handicaps");
  // Récupère l'élément HTML avec l'id 'liste-handicaps'

  // Parcourir chaque handicap contenu dans le tableau JSON
  handicaps.forEach((handicap) => {
    const item = document.createElement("li");
    // Crée un nouvel élément <li> pour chaque type de handicap
    item.textContent = handicap.type;
    // Définir le texte de l'élément <li> avec le type du handicap

    // Ajouter un événement 'click' sur chaque élément <li>
    item.addEventListener("click", () => {
      afficherDetails(handicap);
      // Appeler une fonction pour afficher les détails du handicap sélectionné
      surlignerSelection(item, liste.children);
      // Surligner visuellement l'élément cliqué (sélection)
    });

    liste.appendChild(item);
    // Ajouter l'élément <li> créé à la liste <ul>
  });
}

// Fonction pour afficher les détails d'un handicap sélectionné
function afficherDetails(handicap) {
  const details = document.getElementById("details-handicap");
  // Récupère l'élément HTML avec l'id 'details-handicap'

  // Modifier le contenu HTML pour inclure les informations détaillées
  details.innerHTML = `
        <h2>${handicap.type}</h2> 
        <!-- Titre du type de handicap -->
        <p>${handicap.description}</p> 
        <!-- Description du handicap -->
        <h3>Solutions :</h3> 
        <!-- Sous-titre pour la section des solutions -->
        <ul>
            ${handicap.solutions.map((sol) => `<li>${sol}</li>`).join("")}
            <!-- Boucle pour afficher chaque solution dans une liste -->
        </ul>
    `;
}

// Fonction pour surligner l'élément sélectionné dans la liste
function surlignerSelection(item, siblings) {
  // Parcourir tous les éléments de la liste pour retirer les surlignages
  Array.from(siblings).forEach(
    (sibling) => (sibling.style.background = "#e8f5e9")
  );

  // Appliquer un fond spécifique à l'élément sélectionné
  item.style.background = "#a5d6a7";
}
