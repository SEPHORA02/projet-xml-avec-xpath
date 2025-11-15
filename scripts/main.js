$(document).ready(function () {
    const filmsList = $('#films-list');
    const filtreForm = $('#filtre-form');

    // Charger le fichier XML
    function chargerEtAfficherFilms() {
        $.ajax({
            url: 'catalogue_films.xml',
            dataType: 'xml',
            success: function (data) {
                afficherFilms(data); // Afficher tous les films
            },
            error: function () {
                filmsList.html('<p class="text-danger">Erreur lors du chargement des films.</p>');
            }
        });
    }

    // Afficher les films
    function afficherFilms(xmlDoc, films = null) {
        filmsList.empty(); // Vider la liste avant d'afficher les résultats

        // Si aucun filtre n'est appliqué, on récupère tous les films
        if (!films) {
            films = $(xmlDoc).find('film');
        }

        films.each(function () {
            const titre = $(this).find('titre').text();
            const realisateur = $(this).find('realisateur').text();
            const annee = $(this).find('annee').text();
            const genre = $(this).find('genre').text();
            const duree = $(this).find('duree').text();
            const description = $(this).find('description').text();

            const filmHTML = `
                <div class="col-md-4 mb-4 animate_animated animate_fadeIn">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">${titre}</h5>
                            <p class="card-text"><strong>Réalisateur :</strong> ${realisateur}</p>
                            <p class="card-text"><strong>Année :</strong> ${annee}</p>
                            <p class="card-text"><strong>Genre :</strong> ${genre}</p>
                            <p class="card-text"><strong>Durée :</strong> ${duree} minutes</p>
                            <p class="card-text">${description}</p>
                            <a href="films/${titre.toLowerCase().replace(/ /g, '-')}.html" class="btn btn-primary">Voir plus</a>
                        </div>
                    </div>
                </div>
            `;
            filmsList.append(filmHTML);
        });
    }

    // Appliquer les filtres lors de la soumission du formulaire
    filtreForm.on('submit', function (event) {
        event.preventDefault();
        const genre = $('#genre').val().toLowerCase().trim();
        const realisateur = $('#realisateur').val().toLowerCase().trim();

        $.ajax({
            url: 'catalogue_films.xml',
            dataType: 'xml',
            success: function (data) {
                filtrerFilms(data, genre, realisateur);
            }
        });
    });

    // Filtrer les films
    function filtrerFilms(xmlDoc, genre, realisateur) {
        let films = $(xmlDoc).find('film');

        if (genre) {
            films = films.filter(function () {
                return $(this).find('genre').text().toLowerCase().includes(genre);
            });
        }

        if (realisateur) {
            films = films.filter(function () {
                return $(this).find('realisateur').text().toLowerCase().includes(realisateur);
            });
        }

        afficherFilms(xmlDoc, films);
    }

    // Charger et afficher les films au démarrage
    chargerEtAfficherFilms();
});
