<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Critères RGAA - Tanaguru</title>
	<script src="script.js"></script>
</head>

<?php
/**
 * TODO
 * Si besoin, modifier à la ligne ci-dessous (16), avec le nom du nouveau fichier
 */
$rgaaFile = file_get_contents('../rgaa4-1-criteres.html');
preg_match("/(^.*<body.*?>)(.*)(<\/body.*$)/is", $rgaaFile, $matches);
echo $matches[2];
?>
</html>

<?php
$content = $_POST["json"];
$jsonFile = fopen('rgaa.json','w+');
fwrite($jsonFile,$content);
fclose($jsonFile);
