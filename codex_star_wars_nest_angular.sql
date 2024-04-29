drop database if exists codex_star_wars_nest_angular;

create database codex_star_wars_nest_angular;

use codex_star_wars_nest_angular;

-- lancer NEST (npm start)


-- VEHICULES
INSERT INTO
    `vehicule` (
        `id`,
        `nom`,
        `description`,
        `longueur`,
        `vitesse`,
        `classe`,
        `moteur`,
        `armes`,
        `nbEquipage`,
        `image`,
        `type`
    )
VALUES
    (
        NULL,
        'Chasseur N-1',
        'Mis au point par l''Escadron d''Ingénieurs de la Flotte Spatiale du Palais de Theed pour les volontaires des Forces Royales de Sécurité de Naboo, le petit monoplace N-1 emporte des canons laser jumelés et un double magasin de torpilles à protons. Les ingénieurs du Palais de Theed fabriquent les réservoirs et les antennes de senseurs mais, comme pour le vaisseau Nubian 327 de type J, sa structure interne créée sur Naboo comprend des composants standard dans la Galaxie. Les ingénieurs ont par ailleurs développé une motorisation customisée reposant sur une propulsion nubien de série, qu''ils ont modifiée afin de diminuer ses émissions atmosphériques. Les Naboo étant pacifiques, l''Escadron de chasseurs Naboo fait principalement office de garde d''honneur pour la Nef Royale. Néanmoins, les Forces Royales de Sécurité s''entraînent régulièrement sur le N-1, prêtes à l''engagement si nécessaire, car servir la reine c''est être au service du grand peuple libre des Naboo.',
        '11 m',
        '1100 km/h',
        'Inconnue',
        'Nubian 221 Type J - Nubian Monarc C-4',
        'Multiples',
        2,
        'https://fbi.cults3d.com/uploaders/15181753/illustration-file/99245c2d-071d-408e-8b43-e5b2a3652056/DSC_0478.jpg',
        'vaisseau'
    ),
    (
        NULL,
        'Corvette CR90',
        'Les corvettes CR90 étaient des vaisseaux fabriqués par la Corporation Technique Corellienne. Ils furent largement utilisés par la Maison Organa d''Alderaan ainsi que par la rébellion et son successeur, l''Alliance Rebelle. Le plus connu était le Tantive IV, le vaisseau diplomatique appartenant à Bail Prestor Organa et dont le capitaine était Raymus Antilles.',
        '150 m ',
        '950 km/h',
        'Inconnue',
        'Inconnu',
        'Multiples',
        165,
        'https://img.swcombine.com//ships/7/large.png',
        'vaisseau'
    ),
    (
        NULL,
        'Destroyer Stellaire de classe Venator',
        'Le Destroyer Stellaire de classe Venator, également connu sous le nom de croiseur d''assaut de la République ou encore Croiseur Jedi, était un vaisseau de guerre triangulaire conçu par les Chantiers Navals de Kuat pour la Grande Armée de la République Galactique. Ces croiseurs devinrent rapidement le fer de lance de la République au cours de la Guerre des Clones où elle affronta la Confédération des systèmes indépendants. Il s''agit du précurseur du Destroyer Stellaire de classe Impérial de l''Empire Galactique.',
        '1155 m',
        '975 km/h',
        'Inconnue',
        'Propulseurs ioniques',
        'Multiples',
        7400,
        'https://www.starwars-universe.com/images/encyclopedie/vaisseaux_vehicules/images_v6/destroyer_venator_imv6.jpg',
        'vaisseau'
    ),
    (
        NULL,
        'Destroyer Stellaire de classe Imperial',
        'Le Destroyer Stellaire de classe Impérial était une ligne de production de Destroyers Stellaires. Développés par les Chantiers Navals de Kuat pour l''Empire Galactique, ils remplacèrent notamment les destroyers Stellaires de classe Venator de la République Galactique. Cette ligne de vaisseaux comprenait deux modèles : le Destroyer Stellaire de classe Impérial I et le Destroyer Stellaire de classe Impérial II.',
        '1600 m',
        'Inconnue',
        'Inconnue',
        'Inconnu',
        'Multiples',
        50000,
        'https://www.starwars-universe.com/images/encyclopedie/vaisseaux_vehicules/images_v6/destroyer_imperial1_imv6.jpg',
        'vaisseau'
    ),
    (
        NULL,
        'Procurer',
        'Le Procurer était un croiseur de classe Lucrehulk. En 22 av.BY, son capitaine, Mar Tuuk, établit un blocus au dessus de Ryloth. Ce blocus devait empêcher les renforts de la République Galactique de reprendre la planète occupée par les Séparatistes.',
        '3356 m',
        '500 km/h',
        'Inconnue',
        'Inconnu',
        'Multiples',
        300,
        'https://i.imgur.com/tnBR1MT.jpg',
        'vaisseau'
    ),
    (
        NULL,
        'Saak''ak',
        'Le Saak''ak était le croiseur personnel de Nute Gunray durant le blocus de Naboo en 32 av.BY, il était dirigé par Daultay Dofine au moment du blocus. C''est dans ce croiseur que furent invités et piégés le maître Jedi Qui-Gon Jinn et son Padawan Obi-Wan Kenobi, il arrivèrent dans le Radiant VII qui fut détruit par le canonnier Jull Dremon sous les ordres de Nute Gunray après que les Jedi l''ai quitté.',
        '3356 m',
        '500 km/h',
        'Inconnue',
        'Inconnu',
        'Multiples',
        300,
        'https://i.pinimg.com/originals/5b/05/3b/5b053b208f384735a318702daff92001.jpg',
        'vaisseau'
    ),
    (
        NULL,
        'Navette de classe T-4a Lambda',
        'La navette T-4a classe Lambda, connue sous le nom de navette Lambda, était un vaisseau léger standard utilisé communément au sein de la Marine Impériale comme transport de troupes et de personnages hauts placés.',
        '20 m',
        '850 km/h',
        'Inconnue',
        'Ions SFS-Z Rk5',
        'Multiples',
        6,
        'https://img.planete-starwars.com/upload/databank/4/105_T4a.JPG',
        'vaisseau'
    ),
    (
        NULL,
        'Navette Interstellaire 2000',
        'La navette Interstellaire 2000 était un modèle de navette spatiale utilisé par l''Empire Galactique. Elles étaient destinées au transport de passager de planète en planète et étaient habituellement pilotées par un droïde pilote de série RX. La navette accueillait tous les types de passagers y compris les droïdes, pour seule condition qu''ils soient placés dans une cabine à l''écart des autres passagers de forme organique (d''après les lois dictées par l''Empire Galactique). Le voyage pouvait alors débuter et se déroulait à la vitesse de l''hyperespace.',
        'Inconnue',
        'Inconnue',
        'Inconnue',
        'Inconnu',
        'Multiples',
        25,
        'https://www.starwars-holonet.com/holonet/images/e/e1/15921/ship_starcommuter2000.jpg',
        'vaisseau'
    ),
    (
        NULL,
        'Cimeterre',
        'Dans leur combat contre l''Ordre Jedi, les apprentis Sith ont toujours utilisé des vaisseaux spéciaux : les Infiltrateurs Sith. Le redoutable appareil de Dark Maul, aussi appelé le Cimeterre est le dernier-né de cette lignée, et peut-être le plus dangereux à ce jour. Sa longue proue abrite un puissant dispositif de dissimulation intégral, merveille technologique qui le rend invisible. Version modifiée d''un courrier stellaire créé par les ateliers du génial Raith Sienar, l''Infiltrateur emporte des canons laser, une batterie complète de senseurs, et un moteur ionique expérimental à haute température nécessitant de grands panneaux de radiateur qui se replient à l''atterrissage. Partout dans la Galaxie, Dark Maul exploite toutes les possibilités de son Infiltrateur pour l''interception de messages secrets, le sabotage et la chasse à l''homme. Son terrible vaisseau est une extension parfaite de l''étrange Seigneur Sith.',
        '26 m',
        'Inconnue',
        'Inconnue',
        'Inconnu',
        'Multiples',
        4,
        'https://img1.starwars-holonet.com/holonet/dictionnaire/photos/ship_cimeterre_2.jpg',
        'vaisseau'
    ),
    (
        NULL,
        'Croiseur de classe Consular',
        'Les croiseurs de classe Consular étaient des vaisseaux de la République Galactique utilisés pour les missions diplomatiques jusqu''en 32 av.BY, où l''un deux, le Radiant VII fut détruit avec son équipage des Forces Judiciaires par la Fédération du commerce durant le blocus de Naboo.',
        '115 m ',
        '900 km/h',
        'Inconnue',
        'Inconnu',
        'Multiples',
        3,
        'https://p.turbosquid.com/ts-thumb/3c/EBlb21/by9VhZh7/picture7/jpg/1602765151/600x600/fit_q87/4c5360b7b1baa3291fda0b47f6f0f604a70735ac/picture7.jpg',
        'vaisseau'
    ),
    (
        NULL,
        'Main Invisible',
        'La Main Invisible était le vaisseau transportant le Chancelier Suprême captif Sheev Palpatine durant la seconde bataille de Coruscant en 19 av.BY. C''est dans ce vaisseau Séparatiste que le Comte Dooku fut tué par Anakin Skywalker. Il est le vaisseau amiral du Comte Dooku et du Général Grievous. Son capitaine était Lushros Dofine, neveu de Daultay Dofine et son second était Aito Laff.',
        '1088 m',
        '1050 km/h',
        'Inconnue',
        'Inconnu',
        'Multiples',
        600,
        'https://static.planetminecraft.com/files/resource_media/screenshot/1705/310828039_lrg.png',
        'vaisseau'
    ),
    (
        NULL,
        'Destroyer Stellaire de classe Imperial I',
        'Le Destroyer Stellaire de classe Impérial I, aussi simplement appelé Destroyer Stellaire de classe Impérial ou Destroyer Stellaire, était un modèle du Destroyer Stellaire de classe Impérial utilisé au sein de la Marine Impériale. Vaisseau capital de forme triangulaire hérissé d''armes, il embarquait de nombreuses troupes d''assaut, marcheurs et chasseurs TIE. A l''apogée de l''Empire, le pont de commandement accueillait les meilleurs officiers de la Marine Impériale.',
        '1600 m',
        '975 km/h',
        'Inconnue',
        'Ion Destrover-1 - Ion Gemon-4 - Réacteur à ionisation ',
        'Multiples',
        45000,
        'https://www.starwars-universe.com/images/encyclopedie/vaisseaux_vehicules/images_v6/destroyer_imperial1_imv6.jpg',
        'vaisseau'
    ),
    (
        NULL,
        'Destroyer Stellaire de classe Imperial II',
        'Le Destroyer Stellaire de classe Impérial II était un modèle de Destroyer Stellaire de classe Impérial utilisé par l''Empire Galactique pendant la Guerre Civile Galactique. Il fut mis en service environ cinq ans avant la bataille de Yavin.',
        '1600 m',
        '975 km/h',
        'Inconnue',
        'Ion Destroyer-1 - Ion Gemon-4',
        'Multiples',
        45000,
        'https://www.starwars-universe.com/images/encyclopedie/vaisseaux_vehicules/images_v6/destroyer_imperial1_imv6.jpg',
        'vaisseau'
    ),
    (
        NULL,
        'Chasseur TIE',
        'Le chasseur TIE fut le premier succès de la longue série des chasseurs TIE (Twin Ion Engine ou Double Moteur Ionique). Ce chasseur était rapide et maniable, mais il souffrait de sa faible résistance et de sa mauvaise autonomie. Redoutable en combat rapproché, le chasseur TIE équipa la très grande majorité de la chasse impériale à raison de plus d''un million d''unités en service en l''an 3 ap.BY. Son bruit caractéristique et son aspect menaçant en firent un engin très reconnaissable.',
        '7 m',
        '1250 km/h',
        'Inconnue',
        'Ionique',
        'Multiples',
        1,
        'https://img.planete-starwars.com/upload/databank/4/TIE-ln.JPG',
        'vaisseau'
    ),
    (
        NULL,
        'Bombardier TIE',
        'Le bombardier TIE était un bombardier construit par Systèmes de Flotte Sienar pour le compte de l''Empire Galactique. Plusieurs années avant la bataille de Yavin, Sienar avait déjà conçu les plans de ce vaisseau mais ils ne furent utilisés que des années après, vers 3 ap.BY.',
        '7 m',
        '850 km/h',
        'Inconnue',
        'Ionique',
        'Multiples',
        1,
        'https://www.starwars-universe.com/images/encyclopedie/vaisseaux_vehicules/images_v6/tie_bomber_imv6.jpg',
        'vaisseau'
    );

-- ORGANISATIONS
INSERT INTO
    `organisation` (`id`, `description`, `image`, `nom`)
VALUES
    (
        NULL,
        'Un ordre de chevaliers et de maîtres Jedi dédiés à maintenir la paix et la justice dans la galaxie, tout en suivant les enseignements de la Force.',
        'https://stickair.com/35358-large_default/ordre-jedi.jpg',
        'Ordre Jedi'
    ),
    (
        NULL,
        'L''antithèse des Jedi, les Sith suivent les côtés sombres de la Force, cherchant le pouvoir et la domination à travers la galaxie.',
        'https://upload.wikimedia.org/wikipedia/commons/3/39/Sith_Emblem_%28Star_Wars%29.svg',
        'Ordre Sith'
    ),
    (
        NULL,
        'Une fédération démocratique de planètes qui a précédé l''Empire Galactique. Elle était dirigée par un Sénat et défendue par une armée de clones.',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Emblem_of_the_Galactic_Republic.svg/1200px-Emblem_of_the_Galactic_Republic.svg.png',
        'République Galactique'
    ),
    (
        NULL,
        'Formé après la chute de la République, l''Empire est un régime totalitaire dirigé par l''Empereur Palpatine (alias Dark Sidious) et son bras droit, Dark Vador (Anakin Skywalker).',
        'https://www.pathfinder-fr.org/Wiki/GetFile.aspx?Page=Parties.P104%20empire&File=empire.png',
        'Empire Galactique'
    ),
    (
        NULL,
        'Une coalition de groupes et de planètes opposés à l''Empire Galactique, dont le but est de restaurer la République et de renverser l''Empereur.',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Rebel_Alliance_logo.svg/1200px-Rebel_Alliance_logo.svg.png',
        'Alliance Rebelle'
    ),
    (
        NULL,
        'Une organisation militante née des cendres de l''Empire Galactique, cherchant à restaurer l''autorité de l''Empire et à éliminer la Résistance.',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Emblem_of_the_First_Order.svg/1200px-Emblem_of_the_First_Order.svg.png',
        'Premier Ordre'
    ),
    (
        NULL,
        'Une faction paramilitaire opposée au Premier Ordre, formée pour lutter contre son oppression et protéger la liberté dans la galaxie.',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Rebel_Alliance_logo.svg/1200px-Rebel_Alliance_logo.svg.png',
        'Résistance'
    ),
    (
        NULL,
        'Une organisation commerciale puissante et influente dans la galaxie, souvent impliquée dans des activités illégales et des conflits politiques.',
        'https://static.wikia.nocookie.net/frstarwars/images/8/8f/F%C3%A9d%C3%A9ration_du_Commerce.svg/revision/latest?cb=20160518142908',
        'Fédération du Commerce'
    ),
    (
        NULL,
        'Une espèce de criminels notoirement connue pour son contrôle du crime organisé et du commerce illégal à travers la galaxie.',
        'https://liquipedia.net/commons/images/f/f0/Hutt_Cartel_Light_Logo.png',
        'Hutts'
    ),
    (
        NULL,
        'Une culture guerrière distincte avec une longue histoire de mercenaires et de chasseurs de primes. Ils suivent un code d''honneur appelé "la Voie Mandalorienne".',
        'https://seeklogo.com/images/S/star-wars-mandalorian-mythosaur-skull-logo-5157CCC46D-seeklogo.com.png',
        'Mandaloriens'
    ),
    (
        NULL,
        'Formée après la chute de l''Empire Galactique, la Nouvelle République est une tentative de restaurer la démocratie dans la galaxie.',
        'https://upload.wikimedia.org/wikipedia/fr/c/cd/Nouvelle_R%C3%A9publique_canon.png',
        'Nouvelle République'
    ),
    (
        NULL,
        'Une alliance de planètes et de corporations qui se sont rebellées contre la République, menant à la Guerre des Clones.',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Confederacy_of_Independent_Systems.svg/1200px-Confederacy_of_Independent_Systems.svg.png',
        'Confédération des Systèmes Indépendants'
    ),
    (
        NULL,
        'Un clan de sorcières puissantes sur la planète Dathomir, utilisant la magie et la Force pour manipuler et contrôler les événements.',
        '',
        'Ordre des Nightsisters'
    ),
    (
        NULL,
        'Un groupe de guerrières Dathomiriennes qui servent les Nightsisters, souvent formées en tant qu''assassins redoutables.',
        '',
        'Soeurs de la Nuit'
    );

-- ESPECES
INSERT INTO
    `espece` (
        `id`,
        `nom`,
        `description`,
        `classification`,
        `taille`,
        `couleurCorps`,
        `couleurPoils`,
        `habitat`,
        `langage`,
        `image`
    )
VALUES
    (
        NULL,
        'Bantha',
        'Les banthas étaient des grosses créatures poilues possédant une paire de longues cornes disposées en spirale. Ces mammifères herbivores vivaient dans le désert de la planète Tatooine et étaient trouvables sur de nombreux autres mondes de la galaxie où ils étaient élevés pour leur lait, leur viande, leur fourrure et leur cuir. Les banthas vivaient en troupeau et étaient aussi domestiqués par les Tuskens pour leur servir de monture.',
        'Mammifère',
        '2m50',
        'Inconnue',
        'Brun',
        'Désertique',
        'Aucun',
        'https://static.wikia.nocookie.net/frstarwars/images/a/a2/Bantha-ST.jpg/revision/latest?cb=20201120145932'
    ),
    (
        NULL,
        'Tusken',
        'Les Tuskens étaient une espèce de nomades parcourant le désert de la planète Tatooine, se fondant dans le paysage pour rester invisibles, protégés des soleils jumeaux de leur planète par un épais manteau et des bandages couvrant leur tête et leurs pieds. Les Tuskens utilisaient les banthas comme monture et bêtes de somme, et chevauchaient en file indienne afin de cacher leur nombre.',
        'Inconnue',
        '1m90',
        'Inconnue',
        'Inconnue',
        'Désertique',
        'Tusken',
        'https://static.wikia.nocookie.net/frstarwars/images/f/fe/Tusken_family_FF42.png/revision/latest?cb=20231001093506'
    ),
    (
        NULL,
        'Asogien',
        'Les Asogiens étaient une espèce originaire de la planète Brodo Asogi. Ils n''étaient pas très grands et avaient une peau brune et un long cou.',
        'Inconnue',
        'Inconnue',
        'Brune - Jaune',
        'Noir',
        'Inconnu',
        'Inconnu',
        'https://static.wikia.nocookie.net/frstarwars/images/7/7a/Grebleips.png/revision/latest?cb=20150718122908'
    ),
    (
        NULL,
        'Weequay',
        'Les Weequays étaient une espèce originaire de la planète Sriluur de l''Espace Hutt. ',
        'Aucune',
        '1m89',
        'Divers',
        'Aucune',
        'Désert',
        'Basic',
        'https://static.wikia.nocookie.net/frstarwars/images/1/17/Weequays.png/revision/latest?cb=20240128095849'
    ),
    (
        NULL,
        'Xexto',
        'Les Xextos sont une race originaire de la planète Troiken. Ils sont assez petit et très mince et ils possèdent deux paires de bras. Il ressemble beaucoup au Quermiens en plus petit.',
        'Aucune',
        '1m20',
        'Beige - Blanche',
        'Aucune',
        'Inconnu',
        'Inconnu',
        'https://static.wikia.nocookie.net/frstarwars/images/7/7d/Gasgano.png/revision/latest?cb=20221106194836'
    ),
    (
        NULL,
        'Zabrak',
        'Les Zabraks étaient une espèce intelligente de proche-humains carnivores originaire de la planète Iridonia. L''espèce se distinguait pour les cornes se trouvant au sommet du crâne de chaque individu et de leur deux cœurs. Si la plupart des Zabraks étaient des Iridoniens, une petite colonie se trouvait sur Dathomir sous la houlette des Sœurs de la Nuit. Ces Zabraks formaient la sous-espèce des Dathomiriens.',
        'Proche-humain',
        '~ 1m80',
        'Tons clairs - foncés',
        'Aucune',
        'Inconnu',
        'Zabraki',
        'https://static.wikia.nocookie.net/frstarwars/images/a/a4/Zabrak_DICE.png/revision/latest?cb=20230729160019'
    ),
    (
        NULL,
        'Wookiee',
        'Les Wookiees étaient des humanoïdes intelligents à fourrure, originaires de la planète Kashyyyk. Le plus célèbre des Wookiees fut Chewbacca, le partenaire de Han Solo.',
        'Aucune',
        '2m23-2m54',
        'Inconnue',
        'Marron - Noir - Gris - Blanc',
        'Forestier',
        'Shyriiwook',
        'https://static.wikia.nocookie.net/frstarwars/images/c/c3/Chewbacca_corps.png/revision/latest?cb=20161110202852'
    ),
    (
        NULL,
        'Twi-lek',
        'Les Twi''leks, aussi appelés les Rylothiens, étaient une espèce humanoïde originaire de la planète Ryloth, dont la peau pouvait être de différentes couleurs en fonction de l''individu : rouge, jaune, bleue ou encore verte. Ils possédaient une paire de tentacules sur le crâne appelés lekku, dont ils se servaient, en plus des mots, pour parler leur langue, le Twi''leki, qui nécessitait ces deux moyens pour être comprise.',
        'Aucune',
        '~ 1m80',
        'Rouge - Jaune - Bleu - Vert - Blanc',
        'Aucune',
        'Sec',
        'Twi''leki',
        'https://static.wikia.nocookie.net/frstarwars/images/c/c5/Twi%27lek.png/revision/latest?cb=20160109204545'
    ),
    (
        NULL,
        'Sullustan',
        'Les Sullustans, également appelés les Sullustains ou Sullustéens, étaient une espèce humanoïde originaire de la planète Sullust. Ils étaient reconnus pour leur expertise en ingénierie, économie et en sciences. Ils étaient caractérisés par leurs bajoues tombantes et leurs grandes oreilles.',
        'Humanoïde',
        '~ 1m80',
        'Gris - Clair',
        'Aucune',
        'Inconnu',
        'Sullustan',
        'https://static.wikia.nocookie.net/frstarwars/images/9/9c/Sullustan_DICE.png/revision/latest?cb=20230729160223'
    ),
    (
        NULL,
        'Quarren',
        'Les Quarren étaient l''une des deux espèces intelligentes originaires de la planète Mon Cala, avec les Mon Calamari.',
        'Aucune',
        'Inconnue',
        'Orange - Brune',
        'Aucune',
        'Aquatique',
        'Basic',
        'https://static.wikia.nocookie.net/frstarwars/images/1/15/The_Quarren.png/revision/latest?cb=20170903135647'
    ),
    (
        NULL,
        'Neimoidien',
        'Les Neimoidiens étaient une espèce humanoïde originaire de la planète Neimoidia. Facilement reconnaissables à leur visage sans nez et leurs yeux rouges et oranges, les Neimoidiens étaient une espèce connue pour sa cupidité et sa couardise.  Native de la planète de Neimoidia et descendants des Duros, l''espèce des Neimoidiens colonisa de nombreux mondes dans la région des Colonies comme Cato Neimoidia. La société Neimoidienne était obsédée par le statut et la richesse et les Neimoidiens aimaient étaler leur puissance aux yeux de tous.',
        'Humanoïde',
        'Inconnue',
        'Beige - Gris - Vert',
        'Aucune',
        'Inconnu',
        'Pak-Pak',
        'https://static.wikia.nocookie.net/frstarwars/images/e/eb/Neimoidiens.png/revision/latest?cb=20150206160306'
    ),
    (
        NULL,
        'Klatooinien',
        'Les Klatooiniens étaient une espèce humanoïde originaire de la planète Klatooine. Ils étaient principalement connus comme hommes de main et chasseurs de primes.',
        'Inconnue',
        'Inconnue',
        'Vert - Brun',
        'Aucune',
        'Inconnu',
        'Basic',
        'https://static.wikia.nocookie.net/frstarwars/images/9/9f/Klatoonien_Barada.png/revision/latest?cb=20230812091101'
    ),
    (
        NULL,
        'Jawa',
        'Les Jawas étaient un peuple de ferrailleurs originaires de Tatooine, une planète désertique de la Bordure Extérieure.  Les Jawas étaient facilement reconnaissables par leur petite taille et par le fait qu''ils cachaient leurs visages sous de longues robes marrons.',
        'Aucune',
        '1m',
        'Inconnue',
        'Inconnue',
        'Désert',
        'Jawaese',
        'https://static.wikia.nocookie.net/frstarwars/images/5/56/Jawas.png/revision/latest?cb=20240216213503'
    ),
    (
        NULL,
        'Hutt',
        'Les Hutts étaient une espèce de gastéropode originaire de la planète Nal Hutta. La plupart d''entre eux étaient des criminels et dirigeaient le Clan Hutt, l''une des plus puissantes organisations criminelles de la galaxie. Ils possédaient une espérance de vie extrêmement longue, par exemple Jabba Desilijic Tiure a vécu 604 ans et décéda d''une mort non naturelle.',
        'Aucune',
        'Inconnue',
        'Divers',
        'Aucune',
        'Marécages',
        'Huttese',
        'https://static.wikia.nocookie.net/frstarwars/images/a/a6/Jabba_Desilijic_Tiure.png/revision/latest?cb=20161110203223'
    ),
    (
        NULL,
        'Humain',
        'Les humains étaient une espèce intelligente de mammifères bipèdes avec une symétrie bilatérale et originaire de la planète Coruscant. Ils étaient très répandus à travers la galaxie, de la planète paisible de Naboo au monde désertique de Tatooine. Ils étaient connus pour se livrer à de nombreuses activités allant de la politique à la traque des criminels. Les espèces possédant une structure corporelle ressemblant à celle des humains étaient qualifiés d''humanoïdes.',
        'Mammifère',
        '~ 1m85',
        'Ton clair - foncé',
        'Variée',
        'Inconnu',
        'Basic',
        'https://static.wikia.nocookie.net/frstarwars/images/d/d3/Humains.jpg/revision/latest?cb=20160325162834'
    ),
    (
        NULL,
        'Gungan',
        'Les Gungans étaient des humanoïdes originaires des marais de Naboo. Créatures amphibies, ils vivaient dans des cités sous-marines en forme de bulles situées dans de profonds lacs. Leur capitale était Otoh Gunga.',
        'Amphibien',
        '2m',
        'Brun - Vert - Orange - Rose - Violet - Blanc',
        'Aucune',
        'Marécage - Aquatique',
        'Gunganese - Basic',
        'https://static.wikia.nocookie.net/frstarwars/images/6/61/Gungans.png/revision/latest?cb=20160325162521'
    ),
    (
        NULL,
        'Bardottan',
        'Les Bardottans étaient une espèce humanoïde originaire de la planète Bardotta. Ils ressemblaient à des oiseaux, et certains possédaient des petites plumes rouges.',
        'Reptile',
        '1m - 2m',
        'Vert - Jaune - Gris - Rouge - Violet',
        'Rouge',
        'Inconnue',
        'Bardottan - Basic',
        'https://static.wikia.nocookie.net/frstarwars/images/5/5d/Bardottan_FDNP.png/revision/latest?cb=20230810194656'
    ),
    (
        NULL,
        'Aqualish',
        'Les Aqualish étaient une espèce originaire de la planète Ando. Ils étaient facilement reconnaissables à leurs défenses. Certains Aqualish avaient deux yeux tandis que d''autres en avaient quatre.',
        'Consciente',
        'Iconnue',
        'Gris - Noir - Vert - Marron',
        'Noir - Blond - Brun',
        'Inconnu',
        'Aqualish',
        'https://static.wikia.nocookie.net/frstarwars/images/c/cd/Po_Nudo.jpg/revision/latest?cb=20150224101139'
    ),
    (
        NULL,
        'Yoda',
        'L''Espèce de Yoda est l''espèce inconnue de Star Wars et dont, pourtant, sont issus trois Jedi importants: Yoda - Grand Maître de l''Ordre Jedi -, Yaddle et Vandar Tokare - responsable de l''Enclave de Dantooine.',
        'Inconnue',
        '0,7m',
        'Vert',
        'Divers',
        'Inconnu',
        'Inconnu',
        'https://static.wikia.nocookie.net/frstarwars/images/5/5f/Yoda.png/revision/latest/scale-to-width-down/1000?cb=20161009183018'
    ),
    (
        NULL,
        'Droïde',
        'Robot possédant un certain degré d''intelligence artificielle.',
        'Inconnu',
        '0,3-2m',
        'Divers',
        'Non',
        'Divers',
        'Multiples',
        'https://static.wikia.nocookie.net/frstarwars/images/0/08/Droid_TLJ.png/revision/latest/scale-to-width-down/1200?cb=20220916113615'
    ),
    (
        NULL,
        'Kiffar',
        'Les Kiffar étaient des Proche-humains ressemblant en tous points à des êtres humains, à ceci près qu''ils portaient une marque jaune horizontale sur le visage indiquant leur affiliation à un clan de leur monde d''origine. Ils étaient généralement bruns, avec une peau matte et des yeux noirs. Le Maître Jedi Quinlan Vos, qui prit part à la Guerre des Clones, était un Kiffar. ',
        'Proche-humain',
        '1,8m',
        'Bronzé',
        'Brun',
        'Inconnu',
        'Basic',
        'https://static.wikia.nocookie.net/frstarwars/images/e/e3/Quinlan_Vos.png/revision/latest?cb=20170903140804'
    );

-- ASTRES
INSERT INTO
    `astre` (
        `id`,
        `nom`,
        `description`,
        `region`,
        `systeme`,
        `nbLunes`,
        `type`,
        `diametre`,
        `population`,
        `image`
    )
VALUES
    (
        NULL,
        'Yavin',
        'Yavin était une planète gazeuse qui n''était pas d''une grande importance géographique, elle se situait dans l''Étendue Gordienne des Territoires de la Bordure Extérieure. Sa quatrième lune, Yavin 4, était quant à elle habitable.  Les temples Sith qui s''y trouvent furent construits par les Massassis, race disparue depuis longtemps lorsque les rebelles y installèrent leur base secrète.',
        'Bordure Extérieure',
        'Yavin',
        '26',
        'Géante gazeuse',
        '198 500 km',
        'Inhabitable',
        'https://static.wikia.nocookie.net/frstarwars/images/4/4d/Yavin.png/revision/latest?cb=20170916183816'
    ),
    (
        NULL,
        'Mustafar',
        'Mustafar était une petite planète volcanique du système Mustafar dans les Territoires de la Bordure Extérieure.  Située entre deux géantes gazeuses, elle fut affiliée à la Confédération des systèmes indépendants pendant la Guerre des Clones puis sous l''Empire Galactique après la nationalisation du Techno-Syndicat.',
        'Bordure Extérieure',
        'Mustafar',
        '0',
        'Volcanique',
        '4 200 km',
        '15 000',
        'https://static.wikia.nocookie.net/frstarwars/images/6/61/Mustafar-TROSGG.png/revision/latest?cb=20201021094213'
    ),
    (
        NULL,
        'Endor',
        'Endor, aussi appelée Tana par les Ewoks, était une géante gazeuse se trouvant dans le système Endor, un système stellaire comportant deux étoiles, du secteur Moddell des Territoires de la Bordure Extérieure.  Neuf lunes orbitaient autour d''Endor. La plus grande était sa Lune Forestière peuplée d''Ewoks. La lune océanique Kef Bir était également une lune d''Endor.',
        'Bordure Extérieure',
        'Endor',
        '9',
        'Géante gazeuse',
        '48 951 km',
        '30 000 000',
        'https://static.wikia.nocookie.net/frstarwars/images/9/9f/Endor_new.png/revision/latest?cb=20191221122550'
    ),
    (
        NULL,
        'Jakku',
        'Jakku était une planète désertique se trouvant dans le système éponyme des Confins Occidentaux de la Bordure Intérieure.  Cinq ans après la bataille de Yavin, elle fut le théâtre de la bataille de Jakku, affrontement majeur et final de la Guerre Civile Galactique qui opposait l''Empire Galactique et la toute jeune Nouvelle République.',
        'Bordure Intérieure',
        'Jakku',
        '2',
        'Tellurique',
        '6 400 km',
        '< 25 000',
        'https://static.wikia.nocookie.net/frstarwars/images/f/f4/Jakku_-_full_-_SW_Poe_Dameron_Flight_Log_.png/revision/latest?cb=20190223074011'
    ),
    (
        NULL,
        'Hoth',
        'Hoth était la sixième planète du Système Hoth. Il s''agissait d''un monde recouvert de neige et de glace, qui possédait trois lunes.  Constamment frappée par les météorites, elle ne développa aucune forme de vie intelligente, mais possédait néanmoins quelques formes de vie animales, comme le Tauntaun ou le Wampa.',
        'Bordure Extérieure',
        'Hoth',
        '3',
        'Tellurique',
        '12 875 km',
        '~ 2 800',
        'https://static.wikia.nocookie.net/frstarwars/images/d/d1/Hoth.jpg/revision/latest?cb=20150220140638'
    ),
    (
        NULL,
        'Felucia',
        'Felucia était une planète des Territoires de la Bordure Extérieure. Elle se situait le long de la Voie Marchande Perlemienne entre Columex et Lianna et était proche de Lola Sayu.  Monde reculé du système Felucia, il était envahi par une jungle épaisse, colorée et humide, ponctuée de petits villages agricoles peuplés par les Feluciens de la planète. Plusieurs créatures habitaient aussi ce monde, dont les Gelasticots, les Rancors de la jungle et les Tee-muss.  Malgré son insignifiance perçue, son emplacement important et ses ressources (y compris le Nysillin, une plante médicinale) provoquèrent plusieurs conflits à la fois en orbite et à la surface de cette planète.',
        'Bordure Extérieure',
        'Felucia',
        '8',
        'Jungle',
        'Inconnu',
        'Inconnue',
        'https://static.wikia.nocookie.net/frstarwars/images/a/a8/Felucia.png/revision/latest?cb=20170714182032'
    ),
    (
        NULL,
        'Scarif',
        'Scarif était une planète située dans les Territoires de la Bordure Extérieure, dans le système Scarif du secteur Abrion. Elle se trouvait au nord de Molavar et était reliée à ce monde par la Route Marchande de Manda, ainsi qu''à Ukio.  Scarif était recouverte d''océans parsemés de chaînes d''îles avec des plages de palmiers tel que les palmiers à noix d''aréca et d''archipels rocheux.',
        'Bordure Extérieure',
        'Scarif',
        '0',
        'Tropical',
        '9 112 km',
        '475 000',
        'https://static.wikia.nocookie.net/frstarwars/images/f/fa/Scarif.png/revision/latest?cb=20170717073822'
    ),
    (
        NULL,
        'Dantooine',
        'Dantooine était une planète située dans le secteur Raioballo des Territoires de la Bordure Extérieure, au sud de la Flèche de Myto et du monde de Lah''mu. Elle était reliée aux planètes Ord Trasi et Belladoon par une route hyperspatiale.  Il s''agissait d''un monde à l''atmosphère respirable pour les humains et possédant une végétation importante avec des forêts luxuriantes et des paysages verts grâce à un climat clément.',
        'Bordure Extérieure',
        'Dantooine',
        '2',
        'Tellurique',
        '9 830 km',
        'Inconnue',
        'https://static.wikia.nocookie.net/frstarwars/images/a/a5/Dantooine_Resistance.jpg/revision/latest?cb=20200121075936'
    ),
    (
        NULL,
        'Mygeeto',
        'Mygeeto était une planète située dans le système Mygeeto du secteur Albarrio, dans les Territoires de la Bordure Extérieure. De plus, elle se trouvait dans la région dite des Nouveaux Territoires.  Elle était reliée aux planètes Ord Trasi et Garqi par une route hyperspatiale. Mygeeto orbitait en troisième position autour de l''étoile Malola et possédait deux lunes.',
        'Bordure Extérieure',
        'Mygeeto',
        '2',
        'Tellurique',
        '10 088 km',
        'Inconnue',
        'https://static.wikia.nocookie.net/frstarwars/images/e/e5/Mygeeto_GE2.jpg/revision/latest?cb=20220605102914'
    ),
    (
        NULL,
        'Yavin 4',
        'Yavin 4 était l''une des lunes orbitant autour de la géante gazeuse Yavin dans l''Étendue Gordienne. La race des Massassis y vivait, ils y ont construit d''énormes temples comme le Grand Temple.',
        'Bordure Extérieure',
        'Yavin',
        '0',
        'Jungle',
        '10 200 km',
        'Inconnue',
        'https://static.wikia.nocookie.net/frstarwars/images/b/b4/Yavin_4.png/revision/latest?cb=20170712110415'
    ),
    (
        NULL,
        'D''Qar',
        'D''Qar était une planète située dans les Territoires de la Bordure Extérieure, dans le système Ileenium.  Elle devint un avant-poste pour l''Alliance Rebelle durant la Guerre Civile Galactique avant d''être réutilisée par la Résistance qui y implanta une base importante.',
        'Bordure Extérieure',
        'Ileenium',
        '2',
        'Tellurique',
        '10 400 km',
        'Inconnue',
        'https://static.wikia.nocookie.net/frstarwars/images/7/72/DQar-SWCT.png/revision/latest?cb=20170710091717'
    ),
    (
        NULL,
        'Tatooine',
        'Tatooine était un monde désertique situé dans le secteur Arkanis de la Territoires de la Bordure Extérieure.  Des fossiles laissaient penser aux scientifiques que Tatooine avait été recouverte par un océan à l''instar de Kamino.',
        'Bordure Extérieure',
        'Tatoo',
        '2',
        'Désertique',
        '10 465 km',
        '200 000',
        'https://static.wikia.nocookie.net/frstarwars/images/f/f6/Tatoooinefull.jpg/revision/latest?cb=20070206173843'
    ),
    (
        NULL,
        'Ryloth',
        'Ryloth était une planète se situant dans le système Ryloth des Territoires de la Bordure Extérieure de la galaxie.  C''était le monde rocheux d''origine des Twi''leks, des humanoïdes possédant des queues crâniennes appelé Lekku et parlant le Ryl.',
        'Bordure Extérieure',
        'Ryloth',
        '5',
        'Inconnu',
        'Inconnu',
        'Inconnue',
        'https://static.wikia.nocookie.net/frstarwars/images/a/a9/Ryloth.png/revision/latest?cb=20200519075644'
    ),
    (
        NULL,
        'Cato Neimoidia',
        'Cato Neimoidia était une planète se situant dans le système Cato Neimoidia du secteur Quellor, dans les Colonies. Elle était connectée aux planètes Commenor et Quellor par une route hyperspatiale.',
        'Colonies',
        'Cato Neimoidia',
        '2',
        'Inconnu',
        'Inconnu',
        'Inconnue',
        'https://static.wikia.nocookie.net/frstarwars/images/5/5b/Cato_Neimoidia.png/revision/latest?cb=20150207095053'
    ),
    (
        NULL,
        'Geonosis',
        'Monde rocheux situé à moins d''un parsec de Tatooine, Geonosis était une planète se trouvant au-delà des frontières de la République Galactique.  Sa surface peu engageante était dominée par les rochers, les crevasses et les déserts. Le sol et le ciel étaient teintés de rouge et les créatures qui évoluèrent sur Geonosis étaient bien équipées pour survivre dans ce milieu hostile.',
        'Bordure Extérieure',
        'Geonosis',
        '15',
        'Inconnu',
        '11 370 km',
        '100 milliards',
        'https://static.wikia.nocookie.net/frstarwars/images/a/a5/Geonosis.png/revision/latest?cb=20160402134809'
    ),
    (
        NULL,
        'Takodana',
        'Takodana était une planète située dans les Confins Occidentaux, dans le secteur Tashtor de la Bordure Médiane. Elle était reliée à Noe''ha''on et Chalcedon par une route hyperspatiale.  Éclairée par une étoile, elle possédait un climat clément permettant la pousse de végétation, en forêts et plaines luxuriantes. On y trouvait différents plans d''eau dont le lac Nymeve.',
        'Bordure Médiane',
        'Takodana',
        '0',
        'Tellurique',
        '12 100 km',
        '< 1 million',
        'https://static.wikia.nocookie.net/frstarwars/images/f/fd/Takodana.png/revision/latest?cb=20180322132547'
    ),
    (
        NULL,
        'Naboo',
        'Naboo était une planète située dans la Bordure Médiane, dans le secteur Chommell. Les humains et les Gungans y cohabitaient bien qu''ils s''évitaient mutuellement, jusqu''à leur coalition contre les troupes d''invasion de la Fédération du commerce en 32 av.BY.  Les premiers vivaient dans des villes à l''architecture vénitienne, les seconds vivaient dans des cités sous-marines d''architecture de genre art nouveau. La capitale de Naboo était la cité de Theed, située en bordure d''une haute falaise.',
        'Bordure Médiane',
        'Naboo',
        '3',
        'Inconnu',
        '12 120 km',
        '600 millions',
        'https://static.wikia.nocookie.net/frstarwars/images/3/3c/Naboo.png/revision/latest?cb=20240217084742'
    ),
    (
        NULL,
        'Coruscant',
        'Coruscant, aussi connue sous le nom de Centre Impérial sous le règne de l''Empire Galactique, était une planète tellurique des Mondes du Noyau entièrement urbanisée et recouvertes d''infrastructures. Considérée comme le berceau de l''espèce humaine, Coruscant devint rapidement la plus importante planète de la galaxie et obtint rapidement le statut d''œcuménopole en raison de la diversité des espèces immigrées qui la peuplaient.  Située aux points de coordonnées originels, Coruscant était le centre névralgique des échanges galactiques et était située sur le tracé des deux principales voies marchandes galactiques.  Surpeuplée, la planète était entièrement creusée et l''urbanisation s''étendait dès lors sur plus de 5000 niveaux inférieurs qui s''enfonçaient dans la croûte de la planète.',
        'Mondes du Noyau',
        'Coruscant',
        '4',
        'Tellurique',
        '12 240 km',
        '1 trillion',
        'https://static.wikia.nocookie.net/frstarwars/images/4/42/Coruscant.png/revision/latest?cb=20160513083512'
    ),
    (
        NULL,
        'Alderaan',
        'Alderaan, parfois appelée Aldorande ou Aldérande, était une planète située au centre de la galaxie, non loin de Coruscant, dans les Mondes du Noyau.  C''était une planète d''où venaient beaucoup de personnes célèbres dans la galaxie comme Leia Organa et Bail Prestor Organa. Elle avait une renommée galactique pour la beauté préservée de ses paysages.',
        'Mondes du Noyau',
        'Alderaan',
        '0',
        'Tellurique',
        '12 500 km',
        '2 milliards',
        'https://static.wikia.nocookie.net/frstarwars/images/4/4a/Alderaan.jpg/revision/latest?cb=20160506145540'
    ),
    (
        NULL,
        'Lah’Mu',
        'Lah''mu était une planète relativement inaccessible dans le secteur Raioballo des Territoires de la Bordure Extérieure, loin des routes hyperspatiales majeures.  Elle se situait au nord de la Flèche de Myto menant à Dantooine et tout proche du secteur Chopani avec le Vide de Chopani. Son anneau planétaire était principalement constitué de silicate formé de l''une des anciennes lunes de la planète, pulvérisée bien avant la Guerre des Clones.  Le monde possédait néanmoins encore un satellite naturel.',
        'Bordure Extérieure',
        'Lah''mu',
        '1',
        'Tellurique',
        '12 618 km',
        '< 500',
        'https://static.wikia.nocookie.net/frstarwars/images/7/79/Lahmu-SWCT.png/revision/latest?cb=20170710091249'
    ),
    (
        NULL,
        'Kashyyyk',
        'Kashyyyk était une planète tempérée recouverte de jungle et de forêts. Orbitant autour d''une étoile unique, elle se trouvait dans le secteur Mytaranor de la Bordure Médiane.  Kashyyyk possédait trois lunes, dont une qui était de couleur orange. Elle était couverte d''arbres Wroshyr et était le monde d''origine des Wookiees.  La faune locale, comme les can-cells, inspira le design des vaisseaux construits par les Wookiees. À l''instar de Kachirho, des villes étaient construites à l''intérieur des arbres de la planète.',
        'Bordure Médiane',
        'Kashyyyk',
        '3',
        'Tellurique',
        '12 765 km',
        '56 000 000',
        'https://static.wikia.nocookie.net/frstarwars/images/8/8a/Kashyyk_Ghost_Raid.png/revision/latest?cb=20181013124244'
    ),
    (
        NULL,
        'Sullust',
        'Sullust était une planète du système Sullust, dans le secteur Sullust des Territoires de la Bordure Extérieure. Elle se trouvait le long de la Voie Marchande de Rimma, entre Vondarc et Eriadu.  C''était une planète couverte de volcans et de lave, cela força les Sullustans à vivre sous terre dans des cités construites dans des grottes. La Corporation SoroSuub employait de nombreux Sullustans sur Sullust dans des usines.',
        'Bordure Extérieure',
        'Sullust',
        '1',
        'Tellurique',
        'Inconnu',
        '~ 1 milliard',
        'https://static.wikia.nocookie.net/frstarwars/images/7/72/Sullust_DICE.png/revision/latest?cb=20160828182951'
    ),
    (
        NULL,
        'Utapau',
        'Utapau était une planète du système Utapau localisé dans le secteur Terrabe, un secteur isolé de la Bordure Extérieure. La planète avait neuf lunes en orbite. Utapau était recouverte de déserts parsemés de gouffres.  La surface de la planète était inhabitable pour la majeure partie des espèces à cause de tempêtes de vents ultraviolents. La planète était recouverte par un océan souterrain et la position des lunes influait sur le rythme des marées de l''océan.  Ces océans regorgeaient de précieux minéraux qui étaient extraits par les Utais. La position des lunes d''Utapau était également responsable de terribles tremblements de terre qui creusaient les gouffres de la planète.  Utais et Pau''ans s''étaient ainsi installé sur le continent le moins frappé par les séismes.',
        'Bordure Extérieure',
        'Utapau',
        '9',
        'Inconnu',
        '12 900 km',
        '95 millions',
        'https://static.wikia.nocookie.net/frstarwars/images/e/e1/Utapau.png/revision/latest?cb=20150220144808'
    ),
    (
        NULL,
        'Eadu',
        'Eadu était une planète possédant une lune. Elle se situait dans le système Eadu du secteur Bheriz dans les Territoires de la Bordure Extérieure, le long de la Route Commerciale de Triellus proche de Formos et avant Aduba-3.',
        'Bordure Extérieure',
        'Eadu',
        '1',
        'Tellurique',
        '14 121 km',
        '2,5 millions',
        'https://static.wikia.nocookie.net/frstarwars/images/3/38/Eadu-SWCT.png/revision/latest?cb=20170711084811'
    ),
    (
        NULL,
        'Dagobah',
        'Bien que proche de mondes comme Xagobah ou Sluis Van, Dagobah fut oubliée, car elle n''était présente sur aucune carte stellaire. Malgré cela, la planète n''était pas désertique.  Au contraire, elle recelait un nombre incalculable d''espèces vivantes animales ou végétales. En effet, le climat très humide et l''apparition de marais à sa surface expliquaient grandement un développement d''une telle intensité.',
        'Bordure Extérieure',
        'Dagobah',
        '1',
        'Tellurique',
        '8 900 km',
        'Aucune',
        'https://static.wikia.nocookie.net/frstarwars/images/1/1c/Dagobah.jpg/revision/latest?cb=20150220140000'
    ),
    (
        NULL,
        'Kamino',
        'Kamino était une planète aquatique située au-delà des Territoires de la Bordure Extérieure, dans l''extragalactique. Il s''agissait de la planète d''origine des Kaminoans.  En 32 av.BY, le Comte Dooku, après avoir assassiné le Maître Jedi Sifo Dyas, commanda en empruntant l''identité de ce dernier, une armée de clones pour la République Galactique ayant pour modèle le chasseur de primes Jango Fett. Les Kaminoans se mirent au travail afin de fournir au mieux la nouvelle armée de la République.',
        'Extragalactique',
        'Kamino',
        '3',
        'Tellurique',
        '19 270 km',
        '1 milliard',
        'https://static.wikia.nocookie.net/frstarwars/images/d/d4/Kamino.png/revision/latest?cb=20161202165036'
    ),
    (
        NULL,
        'Bespin',
        'Bespin était une géante gazeuse située dans le secteur Anoat, un secteur désolé des Territoires de la Bordure Extérieure de la galaxie.  Elle possédait plusieurs lunes et sa masse gazeuse contenait une mince couche d''atmosphère habitable. À l''instar de la Cité des Nuages, plusieurs complexes récoltait et raffinait le gaz tibanna contenu dans son atmosphère.  Ugnorgrad, une ville Ugnaught gouvernée par le Roi Ozz après la bataille d''Endor, se trouvait également sur Bespin.',
        'Bordure Extérieure',
        'Bespin',
        '2',
        'Géante gazeuse',
        '118 000 km',
        '6 millions',
        'https://static.wikia.nocookie.net/frstarwars/images/1/11/Bespin-SWCT.png/revision/latest?cb=20240128103550'
    );

-- PERSONNAGES
INSERT INTO
    `personnage` (
        `id`,
        `nom`,
        `description`,
        `alias`,
        `date_de_naissance`,
        `lieu_de_naissance`,
        `date_de_mort`,
        `lieu_de_mort`,
        `image`,
        `genre`,
        `especeId`
    )
VALUES
    (
        NULL,
        'Obi-Wan Kenobi',
        'Obi-Wan Kenobi, plus tard connu sous le nom de Ben Kenobi, était un humain sensible à la Force qui fut chevalier Jedi du temps de la République Galactique. Il forma le Jedi Anakin Skywalker jusqu''à ce que celui-ci bascule du Côté Obscur et ne mette fin à l''Ordre Jedi. Du temps de l''Empire Galactique, il s''exila sur Tatooine pour veiller sur le fils de Skywalker avant de devenir son mentor peu avant la bataille de Yavin. Kenobi initia Luke à la Force mais ne put poursuivre sa formation car peu de temps après il se fit tuer par Dark Vador à bord de l''Étoile de la Mort. Après sa mort, Obi-Wan demeura vivant à travers la Force et apparut à Luke sous forme de spectre pour le guider dans sa quête.',
        'Ben Kenobi',
        '57 av B.Y',
        'Stewjon',
        '0 av B.Y',
        'Étoile de la Mort',
        'https://static.wikia.nocookie.net/frstarwars/images/c/c5/Obi_Wan_Kenobi.jpg/revision/latest?cb=20150207143827',
        'Masculin',
        15
    ),
    (
        NULL,
        'Padme Amidala',
        'Padmé Amidala de Naboo, née Padmé Naberrie, connue sous les titres successifs de Reine Amidala de Naboo puis de Sénatrice Padmé Amidala de Naboo, est la fille de Ruwee et Jobal Naberrie, et la sœur cadette de Sola Naberrie. Elle devint au cours de sa vie l''épouse secrète du chevalier Jedi Anakin Skywalker et la mère de Luke et de Leia. Elle perdit la vie à la suite de son accouchement.',
        'Aucun',
        '46 av B.Y',
        'Naboo',
        '19 av B.Y',
        'Polis Massa',
        'https://static.wikia.nocookie.net/frstarwars/images/3/3f/Padm%C3%A9_Amidala.jpg/revision/latest?cb=20150701092402',
        'Féminin',
        15
    ),
    (
        NULL,
        'Qui-Gon Jinn',
        'Qui-Gon Jinn était un Maître Jedi né sur Coruscant durant le déclin de la République Galactique. Entraîné par le Comte Dooku, Qui-Gon était considéré comme un anticonformiste au sein de l''Ordre Jedi ne suivant pas toujours les adages du Code. Selon les dires de son Padawan Obi-Wan Kenobi, le Maître Jedi aurait pu siéger au Haut Conseil Jedi s''il ne s''était pas régulièrement opposé à ses membres. Dans les années qui précédèrent sa mort, il commença à étudier les secrets de la conscience éternelle après la mort.',
        'Aucun',
        '80 av B.Y',
        'Coruscant',
        '32 av B.Y',
        'Naboo',
        'https://static.wikia.nocookie.net/frstarwars/images/f/f6/Qui-Gon_Jinn_Headshot_TPM.jpg/revision/latest?cb=20180501094345',
        'Masculin',
        15
    ),
    (
        NULL,
        'Quinlan Vos',
        'Quinlan Vos était un Kiffar, Chevalier Jedi durant les dernières années de la République Galactique. Il fut l''élève du Maître Jedi Tholme, il aura plus tard l''occasion d''enseigner à son tour une Twi''lek du nom d''Aayla Secura avec qui il aura une relation amoureuse.',
        'Aucun',
        'Inconnue',
        'Kiffar',
        'Aucune',
        'Aucun',
        'https://static.wikia.nocookie.net/frstarwars/images/d/d4/Quinlan_Vos_Teth.png/revision/latest?cb=20160523121323',
        'Masculin',
        21
    ),
    (
        NULL,
        'Sheev Palpatine',
        'Sheev Palpatine, aussi connu sous le nom de l''Empereur Palpatine ou Dark Sidious, était un Seigneur Noir des Sith originaire de Naboo et qui occupa successivement les postes de Chancelier Suprême de la République Galactique et d''Empereur Galactique de l''Empire Sith qu''il avait lui-même créé après un coup d''état à la fin de la Guerre des Clones.',
        'Dark Sidious',
        '84 av B.Y',
        'Naboo',
        '4 ap B.Y',
        'Étoile de la Mort II',
        'https://static.wikia.nocookie.net/frstarwars/images/e/e2/Palpatine-CEUEEd.png/revision/latest?cb=20220511160240',
        'Masculin',
        15
    ),
    (
        NULL,
        'Shmi Skywalker Lars',
        'Shmi Skywalker était la mère d''Anakin Skywalker, la belle-mère d''Owen Lars et la grand-mère de Luke Skywalker et de Leia Organa. Alors qu''elle était esclave, elle donna naissance à Anakin, qui fut conçu par les midi-chloriens pour réaliser la prophétie de l''Élu et rétablir l''équilibre dans la Force. Après le départ d''Anakin pour devenir un Jedi, elle fut vendu à Cliegg Lars qui l''affranchit avant de l''épouser. Peu de temps avant que la Guerre des Clones ne débute, elle mourut dans les bras de son fils après avoir été capturée et torturée par des pillards Tuskens.',
        'Aucun',
        '72 av B.Y',
        'Tatooine',
        '22 av B.Y',
        'Tatooine',
        'https://static.wikia.nocookie.net/frstarwars/images/4/45/Shmi.png/revision/latest?cb=20221009095703',
        'Féminin',
        15
    ),
    (
        NULL,
        'Yaddle',
        'Yaddle était une Maître Jedi siégeant au Conseil Jedi. Elle était de la même espèce que Yoda et, à l''instar du Grand Maître de l''Ordre Jedi, elle possédait une grande affinité avec la Force. Après l''invasion de Naboo, elle eut un rôle moins actif dans les affaires Jedi.',
        'Aucun',
        '509 av B.Y',
        'Inconnu',
        '32 av B.Y',
        'Coruscant',
        'https://static.wikia.nocookie.net/frstarwars/images/7/7f/Yaddle-SWCT.png/revision/latest?cb=20230802190735',
        'Féminin',
        19
    ),
    (
        NULL,
        'Yoda',
        'Yoda était un individu d''une espèce inconnue qui comptait parmi les Maîtres Jedi les plus puissants et reconnus de toute l''histoire de la Galaxie, célèbre pour sa sagesse légendaire, sa maîtrise de la Force et ses talents au sabre laser. Il était membre du Haut Conseil Jedi pendant les dernières décennies de la République Galactique et en était le Grand Maître avant et pendant la Guerre des Clones. À la suite de la bataille de Geonosis, Yoda prit le titre de Maître de l''Ordre en plus de celui de Grand Maître.',
        'Aucun',
        '896 av B.Y',
        'Inconnu',
        '4 ap B.Y',
        'Dagobah',
        'https://static.wikia.nocookie.net/frstarwars/images/5/5f/Yoda.png/revision/latest?cb=20161009183018',
        'Masculin',
        19
    ),
    (
        NULL,
        'C-3PO',
        'C-3PO était un droïde de protocole de forme humanoïde, particulièrement loquace et, comme il le disait lui-même, « maîtrisant plus de six millions de formes de communication ». Son compagnon de toujours était R2-D2.',
        'Aucun',
        '32 av B.Y',
        'Tatooine',
        'Aucune',
        'Aucun',
        'https://static.wikia.nocookie.net/frstarwars/images/3/35/C-3PO.png/revision/latest?cb=20161110201048',
        'Masculin',
        20
    ),
    (
        NULL,
        'Maul',
        'Maul, anciennement connu sous le nom de Dark Maul, était un guerrier Zabrak Dathomirien sensible à la Force qui se reconvertit comme un seigneur du crime sous l''Ère Impériale. Il était auparavant l''apprenti du Seigneur Noir des Sith Dark Sidious et l''un des meilleurs atouts pour la réussite du Grand Plan des Sith, puissant dans le côté obscur et extrêmement doué au maniement du sabre laser. Préparant son retour malgré sa déchéance hiérarchique, Maul était aussi une personnalité très influente, tant dans le domaine de la manipulation, que dans celui du commandement militaire.',
        'Dark Maul',
        '54 av B.Y',
        'Dathomir',
        '2 av B.Y',
        'Tatooine',
        'https://static.wikia.nocookie.net/frstarwars/images/8/89/MaulHS_SWI185.png/revision/latest?cb=20201205193750',
        'Masculin',
        6
    ),
    (
        NULL,
        'Jabba Desilijic Tiure',
        'Jabba Desilijic Tiure, plus couramment désigné comme Jabba le Hutt, était un seigneur du crime Hutt basé sur la planète Tatooine où il dirigeait l''une des plus puissantes organisations criminelles appelée le Clan Hutt. Il mourut étranglé par Leia Organa dans sa barge à voiles, la Khetanna en 4 ap.BY.',
        'Jabba le Hutt',
        '600 av B.Y',
        'Nal Hutta',
        '4 ap B.Y',
        'Tatooine',
        'https://static.wikia.nocookie.net/frstarwars/images/3/39/Jabba_le_Hutt.png/revision/latest?cb=20170818180549',
        'Masculin',
        14
    ),
    (
        NULL,
        'Jar Jar Binks ',
        'Jar Jar Binks était un Gungan originaire de la planète Naboo. Malheureusement, Jar Jar était sûrement le Gungan le plus maladroit mais le plus chanceux de la galaxie.',
        'Aucun',
        'Inconnue',
        'Naboo',
        'Aucune',
        'Aucun',
        'https://static.wikia.nocookie.net/frstarwars/images/9/9d/Jar_Jar_Binks.jpg/revision/latest?cb=20160325193844',
        'Masculin',
        16
    ),
    (
        NULL,
        'Anakin Skywalker',
        'Anakin Skywalker était un Chevalier Jedi originaire de la planète désertique Tatooine qui servit la République Galactique dans ses dernières années. Il fut le Maître Jedi de la jeune Togruta Ahsoka Tano pendant la Guerre des Clones. Succombant ensuite au côté obscur, il devint le Seigneur Sith Dark Vador. Indéfectible bras-droit de Dark Sidious durant l''ère Impériale, il prit part à la Grande Purge Jedi, à la lutte contre la rébellion et à la Guerre Civile Galactique avant de revenir du Côté Lumineux grâce à son fils, Luke Skywalker.',
        'Dark Vador',
        '41 av B.Y',
        'Tatooine',
        '4 ap B.Y',
        'Étoile de la Mort II',
        'https://static.wikia.nocookie.net/frstarwars/images/8/8e/Anakin_Skywalker.png/revision/latest?cb=20160426114514',
        'Masculin',
        15
    ),
    (
        NULL,
        'Mace Windu',
        'Mace Windu, un humain sensible à la Force, était un Maître Jedi respecté et un membre du Haut Conseil Jedi durant les dernières années de la République Galactique. Durant sa carrière au sein de l''Ordre Jedi, il servit comme leader élu des Jedi et, durant la Guerre des Clones, en tant que Général Jedi au sein de la Grande Armée de la République. Il était le plus grand champion de l''Ordre Jedi et privilégiait ses traditions ancestrales, tandis que l''influence du Côté Obscur de la Force grandissait dans les jours du déclin de la République corrompue.',
        'Aucun',
        '72 av B.Y',
        'Haruun Kal',
        '19 av B.Y',
        'Coruscant',
        'https://static.wikia.nocookie.net/frstarwars/images/e/e8/Mace_Windu_WoSW.png/revision/latest?cb=20220916100712',
        'Masculin',
        15
    ),
    (
        NULL,
        'Nute Gunray',
        'Nute Gunray était un Neimoidien de la planète Neimoidia, Vice-Roi de la Fédération du commerce. Lui et son organisation organisèrent des opérations militaires sur la planète Naboo, après une alliance avec le Seigneur Sith Dark Sidious. La Fédération rejoignit par la suite le mouvement Séparatiste du Comte Dooku, et soutient ainsi le renversement de la République Galactique en place. Après la mort du comte et celle du Général Grievous, Gunray se retrouva momentanément et sans le savoir chef du mouvement, avant d''être tué avec ses conseillers par Dark Vador, sous les ordres de Sidious. Ce dernier prit ensuite le contrôle de la Galaxie en devenant Empereur Galactique.',
        'Aucun',
        'Inconnu',
        'Neimoidia',
        '19 av B.Y',
        'Mustafar',
        'https://static.wikia.nocookie.net/frstarwars/images/1/1f/Nute_Gunray.png/revision/latest?cb=20170616150740',
        'Masculin',
        11
    );

-- ORGANISATIONS - VEHICULES
INSERT INTO
    `vehicule_organisations_organisation` (`vehiculeId`, `organisationId`)
VALUES
    (15, 4),
    (1, 3),
    (14, 4),
    (14, 5),
    (9, 2),
    (9, 4),
    (2, 3),
    (2, 6),
    (2, 5),
    (10, 3),
    (4, 4),
    (4, 5),
    (12, 4),
    (12, 5),
    (13, 4),
    (13, 5),
    (3, 1),
    (3, 3),
    (11, 2),
    (11, 4),
    (7, 4),
    (8, 4),
    (5, 7),
    (6, 7);