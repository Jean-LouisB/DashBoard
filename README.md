# DashBoard
## TD ANGULAR 
Organisme : CEGEFOS
Apprenant : Fabrice Kopf

**npm install**

### La branche "Refonte"
C'est une refonte des dossiers et des liaisons plus cohérentes et moins 'désordonnées'.
Elle a été faite après le TD4 => **IL NE FAUT DONC PAR EN TENIR COMPTE POUR LE CORRIGE DU TD4**


API devises = > consomme trois connections à chaque rafraichissement de la page !! (max possible 250 par mois)

Pour y remedier j'ai mis en place le dépot de cookies qui stockent les taux du jours.
Si les cookies sont présents, la connexion à l'API n'est pas necessaire. l'APP récupère les taux dans les cookies.
Les cookies ont une durée de vie de 24h

### Ces pages ne sont pas du tout responsives !! 

