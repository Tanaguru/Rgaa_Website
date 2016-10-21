# Nomenclature

Le RGAA étant un référentiel français, c'est la langue française qui est privilégiée.

## Nomenclature des URLs

- criteres.html
- glossaire.html
- cas-particuliers.html
- notes-techniques.html
- base.html
- references.html

Exemples :  
http://rgaa.tanaguru.com/fr/criteres.html  
http://rgaa.tanaguru.com/fr/notes-techniques.html

Pour les traductions, les URLs se déclinent comme suit (ie seul le code de langue varie) :

http://rgaa.tanaguru.com/en/criteres.html  
http://rgaa.tanaguru.com/en/notes-techniques.html


## Nomenclature des ancres

Autant que possible : un mot, simple, français.  
Facile à mémoriser.  
Pas de CamelCase.

### Ancres vers les tests et critères

S'appuyer sur les critères et tests qui constituent des repères stables.

 #crit-x-x  
 #text-x-x-x

Exemple : vers « Critère 5.1 [A]… » : #crit-5-1  
http://rgaa.tanaguru.com/fr/criteres.html#crit-5-1  
http://rgaa.tanaguru.com/fr/cas-particuliers.html#crit-5-1 (et non pas #cp-1-4)  
http://rgaa.tanaguru.com/fr/notes-techniques.html#crit-5-1 (et non pas #nt-2-9)

Ainsi, l’ancre concernant un critère ne varie pas, quelque soit la page. Seul varie le nom du fichier.

Cas particulier : vers « Critères 6.1 et 6.3 » :  
privilégier le premier critère : #crit-6-1
non : #crit-6-1-6-3 

non : #crit-1-3-a #crit-1-3-b  
oui : #crit-1-3
 
Exemple : #test-5-7-2  
http://rgaa.tanaguru.com/criteres.html#test-5-7-2

### Ancres vers les thématiques

 #images  
 #cadres  
 #couleurs  
 #multimedia  
 #tableaux  
 #liens  
 #scripts  
 #elements (pour « Éléments obligatoires »)  
 #structure (pour « Structuration de l’information »)  
 #presentation (pour « Présentation de l’information »)  
 #formulaires (et non pas #formulaire)  
 #navigation  
 #consultation
 
### Autres ancres

non : #mdia-temporel-type-son-vido-et-synchronis  
oui : #media-temporel
 