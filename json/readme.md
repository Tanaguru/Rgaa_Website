# Creer un fichier JSON contenant tous les tests RGAA

*Ce dossier "json" ne doit jamais être installé en production.*

Ce script est fonctionnel sur les fichiers HTML des critères RGAA à partir de la version 4 (rgaa4-criteres.html).

Pour mettre à jour les tests RGAA dans le fichier *rgaa.json* :
1. Lancez votre serveur local
2. Pour éviter des erreurs serveur, renommez le fichier *.htaccess* qui est à la racine du répertoire RGAA_Website, en *.htaccess_old* par exemple.
3. Ouvrez le fichier *index.php*, repérez l'unique commentaire, juste en dessous vous trouverez le nom du fichier HTML, modifier ce nom avec le nouveau fichier des critères RGAA, puis enregistrez.
4. Dans votre navigateur rendez-vous à l'adresse du projet en local dans le dossier *json*. (exemple: "http://localhost/Rgaa_Website/json/")
5. Voila le fichier *rgaa.json* a été mis à jour !
6. Renommez le fichier *.htaccess*
