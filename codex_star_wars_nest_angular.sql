/* VEHICULES */
INSERT INTO `vehicule` (`id`, `nom`, `description`, `longueur`, `vitesse`, `classe`, `moteur`, `armes`, `image`, `type`) VALUES (NULL, 'Saak\'ak', 'Le Saak\'ak', '3356 m', '500 km/h', '...', 'Inconnu', 'Plein d\'armes', '...', 'Base militaire dans l\'espace.');


/* ORGANISATIONS */
INSERT INTO `organisation` (`id`, `description`, `image`, `nom`) VALUES (NULL, 'gevzioiofezh', '...', 'Orga test');


/* ORGANISATIONS - VEHICULES */
INSERT INTO `vehicule_organisations_organisation` (`vehiculeId`, `organisationId`) VALUES ('1', '1');