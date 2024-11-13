let limiteAge = 18;
let limitePoids = 120;
let limiteAgeEnfant = 12;
let limitePoidsEnfant = 50;

let ageDuClient = 23;
let poidsDuClient = 70;

// Exercice 0

if (17 >= limiteAge && 60 < limitePoids) {
  console.log("Vous pouvez monter dans ce manège");
} else {
  console.log("Vous ne pouvez pas monter dans ce manège");
}

// Exercice 1

if (poidsDuClient < limitePoidsEnfant || ageDuClient <= limiteAgeEnfant) {
  console.log("Bienvenue dans le nouveau manège pour les enfants !");
} else {
  console.log("Désolé mais tu es trop grand pour monter dans ce manège.");
}

//Exercice 2

if (ageDuClient >= limiteAge && poidsDuClient < limitePoids) {
  console.log("Bienvenue dans le manège !");
} else if (ageDuClient >= limiteAge && poidsDuClient >= limitePoids) {
  console.log(
    "Vous ne pouvez pas monter : les sièges ne supporteraient pas votre poids."
  );
} else if (ageDuClient < limiteAge && poidsDuClient < limitePoids) {
  console.log("Vous ne pouvez pas monter : ce manège est réservé aux adultes.");
} else if (ageDuClient < limiteAge && poidsDuClient >= limitePoids) {
  console.log("Vous devriez vite arrêter de manger des frites !");
} else {
  console.log("erreur");
}

// Bug 0
let zero = 0;

if (zero === 0) {
  console.log("La variable zero vaut bien zéro");
} else {
  console.log("Oops ! Il semble y avoir un bogue !");
}

// Bug 1

let reponse = 42;
let condition = false;

if (condition) {
  condition = true;
  reponse = 1337;
}

console.log("La réponse est " + reponse);

// Bug 2

reponse = 1337;
condition = true; // change to true

if (condition) reponse = 42;
console.log("La réponse est maintenant " + reponse);
console.log("Seule cette ligne devrait s'afficher");
