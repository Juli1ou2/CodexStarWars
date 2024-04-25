/* VEHICULES */
INSERT INTO `vehicule` (`id`, `nom`, `description`, `longueur`, `vitesse`, `classe`, `moteur`, `armes`, `image`, `type`) VALUES (NULL, 'Saak\'ak', 'Le Saak\'ak', '3356 m', '500 km/h', '...', 'Inconnu', 'Plein d\'armes', '...', 'Base militaire dans l\'espace.');


/* ORGANISATIONS */
INSERT INTO `organisation` (`id`, `description`, `image`, `nom`) VALUES (NULL, 'gevzioiofezh', '...', 'Orga test');

/* ESPECES */
INSERT INTO `espece` (`id`, `nom`, `description`, `classification`, `taille`, `couleurCorps`, `couleurPoils`, `habitat`, `langage`, `image`) VALUES (NULL, 'Humain', 'Les humains étaient une espèce intelligente de mammifères bipèdes avec une symétrie bilatérale et originaire de la planète Coruscant. Ils étaient très répandus à travers la galaxie, de la planète paisible de Naboo au monde désertique de Tatooine. Ils étaient connus pour se livrer à de nombreuses activités allant de la politique à la traque des criminels. Les espèces possédant une structure corporelle ressemblant à celle des humains étaient qualifiés d\'humanoïdes.', 'Mammifère', '~ 1m85', 'Ton clair - foncé', 'Variée', 'Inconnu', 'Basic', 'https://static.wikia.nocookie.net/frstarwars/images/d/d3/Humains.jpg/revision/latest?cb=20160325162834');


/* ORGANISATIONS - VEHICULES */
INSERT INTO `vehicule_organisations_organisation` (`vehiculeId`, `organisationId`) VALUES ('1', '1');