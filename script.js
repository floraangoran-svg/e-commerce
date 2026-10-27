"use strict";

/* =========================================================
   WawhbyFlora Sacs
   Données et affichage des produits
   ========================================================= */

/* ---------------------------------------------------------
   1. Données des produits
   --------------------------------------------------------- */

const produits = [
    {
        id: "sac-01",
        nom: "Sac Classique",
        prix: 15000,
        categorie: "Sac à main",
        image: "images/sac-01.jpg",
        description:
            "Un sac élégant et intemporel, idéal pour accompagner une tenue professionnelle ou décontractée."
    },
    {
        id: "sac-02",
        nom: "Cabas Essentiel",
        prix: 10000,
        categorie: "Cabas",
        image: "images/sac-02.jpg",
        description:
            "Un cabas pratique et spacieux, adapté aux journées de travail, aux sorties et aux courses."
    },
    {
        id: "sac-03",
        nom: "Sac Élégance",
        prix: 18000,
        categorie: "Sac à main",
        image: "images/sac-03.jpg",
        description:
            "Un modèle raffiné au style féminin, conçu pour apporter une touche élégante à vos tenues."
    },
    {
        id: "sac-04",
        nom: "Mini Chic",
        prix: 12000,
        categorie: "Sac à main",
        image: "images/sac-04.jpg",
        description:
            "Un petit sac tendance et facile à porter, parfait pour les sorties et les occasions spéciales."
    },
    {
        id: "sac-05",
        nom: "Sac Urban",
        prix: 20000,
        categorie: "Sac à main",
        image: "images/sac-05.jpg",
        description:
            "Un modèle moderne et polyvalent pensé pour accompagner une femme active au quotidien."
    },
    {
        id: "sac-06",
        nom: "Cabas Prestige",
        prix: 25000,
        categorie: "Cabas",
        image: "images/sac-06.jpg",
        description:
            "Un cabas élégant et généreux offrant un style sophistiqué et un espace pratique pour vos essentiels."
    }
];

/* ---------------------------------------------------------
   2. Récupération des éléments HTML
   --------------------------------------------------------- */

const grilleProduits = document.getElementById("grille-produits");
const ficheProduit = document.getElementById("fiche-produit");
const titreFicheProduit = document.getElementById("titre-fiche-produit");

/* ---------------------------------------------------------
   3. Formatage du prix
   --------------------------------------------------------- */

function formaterPrix(prix) {
    return `${prix.toLocaleString("fr-FR")} FCFA`;
}

/* ---------------------------------------------------------
   4. Affichage des produits
   --------------------------------------------------------- */

function afficherProduits() {
    grilleProduits.innerHTML = "";

    produits.forEach(function (produit) {
        const carte = document.createElement("article");
        carte.className = "carte-produit";

        carte.innerHTML = `
            <img
                src="${produit.image}"
                alt="${produit.nom}"
            >

            <div>
                <h3>${produit.nom}</h3>

                <p>${formaterPrix(produit.prix)}</p>

                <p>${produit.description}</p>

                <button
                    type="button"
                    class="bouton-details"
                    data-id="${produit.id}"
                >
                    Voir le produit
                </button>

                <button
                    type="button"
                    class="bouton-ajout"
                    data-id="${produit.id}"
                    disabled
                >
                    Ajouter au panier
                </button>
            </div>
        `;

        grilleProduits.appendChild(carte);
    });
}

/* ---------------------------------------------------------
   5. Affichage des détails d'un produit
   --------------------------------------------------------- */

function afficherDetailsProduit(produit) {
    const image = ficheProduit.querySelector("img");
    const titre = ficheProduit.querySelector("h3");
    const paragraphes = ficheProduit.querySelectorAll("p");
    const quantite = document.getElementById("quantite-produit");

    image.src = produit.image;
    image.alt = produit.nom;

    titre.textContent = produit.nom;

    paragraphes[0].textContent = produit.categorie;
    paragraphes[1].textContent = formaterPrix(produit.prix);
    paragraphes[2].textContent = produit.description;

    quantite.value = 1;

    titreFicheProduit.textContent = `Détails : ${produit.nom}`;

    ficheProduit.showModal();
}

/* ---------------------------------------------------------
   6. Gestion des événements
   --------------------------------------------------------- */

grilleProduits.addEventListener("click", function (event) {
    const boutonDetails = event.target.closest(".bouton-details");

    if (!boutonDetails) {
        return;
    }

    const idProduit = boutonDetails.dataset.id;

    const produit = produits.find(function (produit) {
        return produit.id === idProduit;
    });

    if (produit) {
        afficherDetailsProduit(produit);
    }
});

/* ---------------------------------------------------------
   7. Affichage initial
   --------------------------------------------------------- */

afficherProduits();