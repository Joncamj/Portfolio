Pour créer mon portfolio j'ai utilisé du HTML pour la structure de la page, du CSS pour le style et du JavaScript afin d'y ajouter du dynamisme.

- HTML :
Le HTML m'a permis de créer la structure de mon portfolio, j'y ai ajouté tous le contenus en dur sur la page.

J'ai utilisé des balises ` div ` pour créer des conteneurs dans lesquels les contenus y sont intégrés.

- CSS :
Pour styliser ma page web, j'ai utilisé différentes propriétés CSS afin d'améliorer l'apparence et l'expérience utilisateur.
J'ai défini une image de fond représentant des pétales d’arbre japonais. Le fond est appliqué à l’aide de la propriété ` background-image `, avec des réglages supplémentaires comme ` background-size: cover ` pour s’adapter à toutes les résolutions et ` background-attachment: fixed ` pour qu’elle reste fixe lors du défilement de la page.
J’ai également intégré un bouton de retour en haut de page, positionné à l’aide de ` position: absolute ` dans un coin de l’écran pour qu’il reste visible sans gêner la navigation. Pour une navigation fluide, j’ai activé le défilement doux avec ` scroll-behavior: smooth ` sur l’élément html.

Côté mise en page, j’ai utilisé ` display: grid ` pour organiser les sections principales du site de manière structurée, et ` display: flex ` pour centrer certains contenus horizontalement et verticalement.

Enfin, les propriétés ` margin ` et ` padding ` ont été soigneusement ajustées pour garantir un espacement cohérent et harmonieux entre les éléments.

- JavaScript :
Dans mon projet, j’ai structuré le JavaScript en plusieurs fichiers afin de garder un code propre et modulaire.
Dans un premier fichier, j’ai importé un bouton de changement de thème à l’aide de la fonction ` createBtn() ` depuis un module externe (btn.js). Cela permet une séparation logique des responsabilités du code.
Ensuite, j’ai utilisé ` fetch() ` pour charger dynamiquement des données à partir d’un fichier ` stages.json `, contenant les informations sur différents stages. Ces données sont ensuite affichées dans le DOM grâce à la fonction mesStages(), qui crée dynamiquement des éléments HTML pour chaque stage.

De plus, j’ai implémenté un comportement lié au défilement de la page (` window.onscroll `) : à mesure que l’utilisateur fait défiler, certaines classes CSS (` slideUp, slideLeft, slideRight `) sont appliquées à des éléments spécifiques (` #stage, #model, #jeu `) pour déclencher des animations visuelles.

Dans un second fichier JavaScript, j’ai mis en place une fonctionnalité de changement de thème (clair/sombre) à l’aide d’un bouton interactif généré dynamiquement.
Ce bouton est créé dans la fonction ` createBtn() ` et inséré au chargement dans le DOM, au sein d’un conteneur HTML. Le bouton déclenche un changement de thème via un ` addEventListener ` sur l’événement ` click `, qui appelle la fonction ` toggleTheme() `. Cette fonction alterne entre les classes "black" et "light" appliquées au body, modifiant ainsi l’apparence globale du site.
Le thème sélectionné est sauvegardé localement avec ` localStorage ` via la fonction ` saveTheme() `, ce qui permet de conserver la préférence de l'utilisateur même après rechargement de la page. Lors du chargement (` window.onload `), le script vérifie s’il existe un thème sauvegardé et le réapplique automatiquement.

Enfin, la fonction ` updateButtonStyle() ` ajuste dynamiquement le style du bouton en fonction du thème actif, pour renforcer la cohérence visuelle entre le bouton et le reste de l’interface.

- JSON :
J’ai utilisé un fichier ` JSON ` pour stocker les informations de mes différents stages de manière structurée et facilement réutilisable. Ce fichier contient un tableau d’objets, chacun représentant un stage avec des propriétés telles que ` l’id, le nom de l’entreprise, la date, le lieu `, et un text descriptif des missions effectuées. Cette structure me permet d’organiser les données de façon lisible tout en facilitant leur exploitation dans le code JavaScript. Grâce à la méthode ` fetch() `, ces données sont récupérées dynamiquement et injectées dans le DOM via la fonction ` mesStages() `, qui crée des éléments HTML pour chaque stage. Cette approche sépare les données du code et améliore la maintenance et l’évolutivité du projet, car il suffit de modifier le fichier JSON pour mettre à jour les stages affichés, sans toucher au script principal.