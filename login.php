<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription</title>
    <style>
        body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
}

h2 {
    color: #333;
}

form {
    background: white;
    padding: 20px;
    width: 50%;
    margin: auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}

input {
    width: 80%;
    padding: 10px;
    margin: 10px 0;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

button {
    padding: 10px 15px;
    background: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
}

button:hover {
    background: #0056b3;
}

    </style>

</head>
<body>

    <h2>Inscription</h2>

    <form action="register.php" method="POST">
        <input type="text" name="nom" placeholder="Votre Nom" required><br>
        <input type="text" name="prenom" placeholder="Votre Prénom" required><br>
        <input type="email" name="email" placeholder="Votre Email" required><br>
        <input type="password" name="password" placeholder="Mot de passe" required><br>

        <label>Types de films préférés :</label><br>
        <input type="checkbox" name="genres[]" value="Action"> Action
        <input type="checkbox" name="genres[]" value="Comédie"> Comédie
        <input type="checkbox" name="genres[]" value="Drame"> Drame
        <input type="checkbox" name="genres[]" value="Science-fiction"> Science-fiction
        <input type="checkbox" name="genres[]" value="Horreur"> Horreur
        <input type="checkbox" name="genres[]" value="Animation"> Animation  
        <br><br>

        <button type="submit">S'inscrire</button>
    </form>

    <p>Déjà inscrit ? <a href="connexion.html">Se connecter</a></p>

</body>
</html>
