// Récupération des données JSON
fetch("data.json")
  .then((response) => {
    if (!response.ok) throw new Error("Erreur lors du chargement des données");
    return response.json();
  })
  .then((data) => {
    afficherUtilisateurs(data.utilisateurs);
    afficherArticles(data.articles);
  })
  .catch((error) => console.error("Erreur :", error));

// Affiche les cartes des utilisateurs
function afficherUtilisateurs(utilisateurs) {
  const utilisateursContainer = document.getElementById(
    "utilisateurs-container"
  );
  utilisateurs.forEach((utilisateur) => {
    const carte = `
      <div class="col-md-4 mb-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${utilisateur.nom}</h5>
            <p class="card-text">${utilisateur.email}</p>
            <button class="btn btn-primary" onclick="afficherDetailsUtilisateur(${utilisateur.id})">
              Voir détails
            </button>
          </div>
        </div>
      </div>
    `;
    utilisateursContainer.innerHTML += carte;
  });
}

// Affiche les cartes des articles
function afficherArticles(articles) {
  const articlesContainer = document.getElementById("articles-container");
  articles.forEach((article) => {
    const carte = `
      <div class="col-md-4 mb-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${article.titre}</h5>
            <p class="card-text">${article.contenu}</p>
            <button class="btn btn-primary" onclick="afficherDetailsArticle(${article.id})">
              Lire plus
            </button>
          </div>
        </div>
      </div>
    `;
    articlesContainer.innerHTML += carte;
  });
}

// Recherche et affichage des détails d'un utilisateur
function afficherDetailsUtilisateur(id) {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const utilisateur = data.utilisateurs.find((user) => user.id === id);
      if (utilisateur)
        alert(`Nom : ${utilisateur.nom}\nEmail : ${utilisateur.email}`);
      else alert("Utilisateur introuvable !");
    });
}

// Recherche et affichage des détails d'un article
function afficherDetailsArticle(id) {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const article = data.articles.find((art) => art.id === id);
      if (article)
        alert(`Titre : ${article.titre}\nContenu : ${article.contenu}`);
      else alert("Article introuvable !");
    });
}
