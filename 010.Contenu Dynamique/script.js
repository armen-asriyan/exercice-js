// Tableau des utilisateurs
// const users = [
//   {
//     id: 1,
//     nom: "Dupont",
//     prenom: "Jean",
//     pseudo: "jdupont",
//     photo: "https://via.placeholder.com/150",
//   },
//   {
//     id: 2,
//     nom: "Martin",
//     prenom: "Sophie",
//     pseudo: "smartin",
//     photo: "https://via.placeholder.com/150",
//   },
//   {
//     id: 3,
//     nom: "Leroy",
//     prenom: "Paul",
//     pseudo: "pleroy",
//     photo: "https://via.placeholder.com/150",
//   },
// ];

// Tableau des articles
// const articles = [
//   {
//     id: 1,
//     titre: "Les Avancées de la Technologie",
//     photo: "https://via.placeholder.com/300x150",
//     paragraphe:
//       "La technologie continue de révolutionner notre quotidien, offrant des solutions innovantes.",
//   },
//   {
//     id: 2,
//     titre: "L'importance de l'Écologie",
//     photo: "https://via.placeholder.com/300x150",
//     paragraphe:
//       "Les efforts pour préserver l'environnement n'ont jamais été aussi cruciaux qu'aujourd'hui.",
//   },
//   {
//     id: 3,
//     titre: "Le Futur de l'Éducation",
//     photo: "https://via.placeholder.com/300x150",
//     paragraphe:
//       "L'éducation évolue grâce aux outils numériques, permettant une plus grande accessibilité.",
//   },
// ];

fetch("data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    const users = data.users;
    const userContainer = document.getElementById("userContainer");

    if (users && userContainer) {
      users.forEach((user) => {
        userContainer.innerHTML += `
              <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${user.photo}" alt="Photo of ${user.prenom}">
                <div class="card-body">
                  <h5 class="card-title">${user.prenom} ${user.nom}</h5>
                  <p class="card-text">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</p>
                  <button class="btn btn-primary" onclick="showUserProfile(${user.id})">Afficher</button>
                </div>
              </div>`;
      });
    }
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

function showUserProfile(id) {
  const idTrouve = users.find((c) => c.id === id);
  if (idTrouve) {
    alert(
      `id: ${idTrouve.id} \nPrenom: ${idTrouve.prenom} \nNom: ${idTrouve.nom}`
    );
    sessionStorage.setItem("userInfo", JSON.stringify(idTrouve));
    window.location.href = "profilDetails.html";
  } else {
    alert("no");
  }
}

// Articles
articles.forEach((article) => {
  const articlesContainer = document.getElementById("articlesContainer");
  if (articlesContainer) {
    articlesContainer.innerHTML += `
<div class="card" style="width: 18rem;">
<img class="card-img-top" src="${article.photo}" alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">${article.titre}</h5>
  <p class="card-text">${article.paragraphe}</p>
  <button class="btn btn-primary" onclick="showArticle(${article.id})">Afficher</button>
</div>
</div>`;
  }
});

function showArticle(id) {
  const idTrouveArticle = articles.find((a) => a.id === id);
  if (idTrouveArticle) {
    alert(`id: ${idTrouveArticle.id} \nTitre: ${idTrouveArticle.titre}`);
    sessionStorage.setItem("articleInfo", JSON.stringify(idTrouveArticle));
    window.location.href = "profilDetails.html";
  } else {
    alert("no");
  }
}

// profilDetails.html

const detailsContainer = document.getElementById("detailsContainer");

const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
const articleInfo = JSON.parse(sessionStorage.getItem("articleInfo"));

if (detailsContainer && userInfo) {
  detailsContainer.innerHTML += `
  <div class="card" style="width: 80%;">
    <img class="card-img-top" src="${userInfo.photo}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${userInfo.prenom} ${userInfo.nom}</h5>
      <p class="card-text">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</p>
    </div>
  </div>`;
} else if (detailsContainer && articleInfo) {
  detailsContainer.innerHTML += `
  <div class="card" style="width: 80%;">
    <img class="card-img-top" src="https://i.cbc.ca/1.5359228.1577206958!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_940/smudge-the-viral-cat.jpg" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${articleInfo.id} ${articleInfo.titre}</h5>
      <p class="card-text">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</p>
    </div>
  </div>`;
} else {
  console.error("Information not found in sessionStorage.");
}
