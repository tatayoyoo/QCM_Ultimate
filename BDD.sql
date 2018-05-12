drop table if exists candidats;
drop table if exists reponses;
drop table if exists questions;
create table questions (
  numQuestion      INT NOT NULL PRIMARY KEY,
  question         VARCHAR(350),
  urlImageQuestion VARCHAR(50)
);

create table reponses(
  numReponse      INT NOT NULL AUTO_INCREMENT,
  numeroQuestion  int NOT NULL,
  reponse         VARCHAR(350),
  bonneReponse    BOOLEAN,
  urlImageReponse VARCHAR(50),
  PRIMARY KEY (numReponse),
  CONSTRAINT fk_reponses_questions FOREIGN KEY (numeroQuestion) REFERENCES questions (numQuestion)
);

create table candidats(
  numLicense int not null primary key,
  testValide boolean default false,
  nom         VARCHAR(35),
  prenom      VARCHAR(35)
);

insert into candidats (numLicense) VALUES(090630001);


INSERT INTO questions
VALUES (1, "Quelle couleur de disque est recommandée pour jouer un match de compétition UNSS ?", "imageQuestion1.png");

INSERT INTO reponses VALUES ("", 1, "Blanc.", TRUE, "imgRep1_1.png");
INSERT INTO reponses VALUES ("", 1, "Bleu.", FALSE, "imgRep1_2");
INSERT INTO reponses VALUES ("", 1, "Rouge.", FALSE, "imgRep1_3");
INSERT INTO reponses VALUES ("", 1, "Vert.", FALSE, "imgRep1_4");


INSERT INTO questions
VALUES (2, "Si un joueur se déplace avec le disque en main, quelle manquement au réglement peut être appelé ?", "");

INSERT INTO reponses VALUES ("", 2, "Marcher.", TRUE, "");
INSERT INTO reponses VALUES ("", 2, "Faute.", TRUE, "");
INSERT INTO reponses VALUES ("", 2, "Travel.", TRUE, "");
INSERT INTO reponses VALUES ("", 2, "Stop.", FALSE, "");


INSERT INTO questions VALUES (3, "Qui peut appeler un temps mort ?", "");

INSERT INTO reponses VALUES ("", 3, "Seul le joueur en possession du disque peut appeler un temps mort.", TRUE, "");
INSERT INTO reponses VALUES ("", 3, "Tous les joueurs sur le terrain peuvent appeler un temps mort.", FALSE, "");
INSERT INTO reponses VALUES ("", 3, "Tous les attaquants peuvent appeler un temps mort.", FALSE, "");
INSERT INTO reponses VALUES ("", 3, "Seul le capitaine peut appeler un temps mort.", FALSE, "");


INSERT INTO questions VALUES (4,
                              "Lors d'un engagement, si le disque touche l'intérieur du terrain et roule pour s'arrêter dans les limites de l'aire de jeu en zone centrale, l'attaquant :",
                              "");

INSERT INTO reponses VALUES ("", 4, "Doit jouer à l'endroit où le disque a été ramassé.", TRUE, "");
INSERT INTO reponses
VALUES ("", 4, "Peut jouer à l'endroit où le disque a été ramassé ou depuis la ligne d'en-but.", FALSE, "");
INSERT INTO reponses VALUES ("", 4, "A le droit à 3 appuis avant d'établir son pied de pivot.", FALSE, "");
INSERT INTO reponses VALUES ("", 4, "Doit jouer depuis la ligne d'en-but.", FALSE, "");


INSERT INTO questions VALUES (5,
                              "Le compte est effectué par le joueur qui défend sur le porteur de disque. Il annonce -compté- puis compte à voix haute en secondes.",
                              "");

INSERT INTO reponses VALUES ("", 5, "Le compte doit être audible par le porteur de disque.", TRUE, "");
INSERT INTO reponses VALUES ("", 5, "Le compte doit être audible par l'ensemble des joueurs.", FALSE, "");
INSERT INTO reponses VALUES ("", 5, "Le compte doit être audible par les défenseurs.", FALSE, "");
INSERT INTO reponses VALUES ("", 5, "Le compte doit être audible par la table de marque.", FALSE, "");


INSERT INTO questions VALUES (6, "Le jeu s'arrête lorsque :", "");

INSERT INTO reponses VALUES ("", 6, "Une faute est appelée.", TRUE, "");
INSERT INTO reponses VALUES ("", 6, "Une violation est appelée.", TRUE, "");
INSERT INTO reponses VALUES ("", 6, "Une infraction est appelée.", FALSE, "");
INSERT INTO reponses VALUES ("", 6, "Un joueur doit renouer les lacets de ses chaussures.", FALSE, "");


INSERT INTO questions VALUES (7, "Lorsqu'un attaquant et un défenseur attrapent le disque en même temps.", "");

INSERT INTO reponses VALUES ("", 7, "L'attaquant conserve la possession.", TRUE, "");
INSERT INTO reponses VALUES ("", 7, "Le disque revient au lanceur précédent.", FALSE, "");
INSERT INTO reponses VALUES ("", 7, "Le défenseur conserve la possession.", FALSE, "");
INSERT INTO reponses
VALUES ("", 7, "Un tirage au sort est effectué pour déterminer une nouvelle possession.", FALSE, "");


INSERT INTO questions
VALUES (8, "La responsabilité du respect et de l'application du règlement pendant le match incombent:", "");

INSERT INTO reponses VALUES ("", 8, "Aux joueurs sur le terrain.", TRUE, "");
INSERT INTO reponses VALUES ("", 8, "A la table de marque.", FALSE, "");
INSERT INTO reponses VALUES ("", 8, "Aux professeurs au bord du terrain.", FALSE, "");
INSERT INTO reponses VALUES ("", 8, "Aux jeunes officiels.", FALSE, "");


INSERT INTO questions VALUES (9, "Les actions suivantes sont des exemples d'un bon -Esprit du Jeu- :", "");

INSERT INTO reponses
VALUES ("", 9, "Rétracter un appel qui n'a pas eu d'incidence sur le déroulement du jeu.", TRUE, "");
INSERT INTO reponses VALUES ("", 9, "Effectuer la ronde après le match.", TRUE, "");
INSERT INTO reponses VALUES ("", 9, "Intimider un adversaire par un comportement agressif.", FALSE, "");
INSERT INTO reponses VALUES
  ("", 9, "Laisser un débutant faire un mauvais appel sous prétexte qu'il ne connaît pas bien le règlement.", FALSE,
   "");


INSERT INTO questions VALUES (10,
                              "Un lanceur peut toucher l'espace hors du terrain une fois que son pied de pivot est établi dans les limites du terrain.",
                              "");

INSERT INTO reponses VALUES ("", 10, "Vrai.", TRUE, "");
INSERT INTO reponses VALUES ("", 10, "Faux.", FALSE, "");
INSERT INTO reponses VALUES ("", 10, "Uniquement dans la zone centrale.", FALSE, "");
INSERT INTO reponses VALUES ("", 10, "Uniquement dans la zone d'en-but.", FALSE, "");


INSERT INTO questions VALUES (11, "Lorsqu'un joueur réceptionne le disque en courant.", "");

INSERT INTO reponses
VALUES ("", 11, "Il doit décélérer le plus vite possible pour effectuer son pied de pivot.", TRUE, "");
INSERT INTO reponses VALUES ("", 11, "Il doit décélérer sans changer de direction.", TRUE, "");
INSERT INTO reponses VALUES ("", 11, "Il doit s'arrêter en moins de 3 pas et effectuer son pied de pivot.", FALSE, "");
INSERT INTO reponses VALUES ("", 11, "Il peut décélérer en changeant de direction.", FALSE, "");


INSERT INTO questions
VALUES (12, "Lors d'un match en 13 points avec un CAP+1, si le score est de 9-7 à la fin du temps règlementaire.", "");

INSERT INTO reponses
VALUES ("", 12, "Il faut attendre qu'un point supplémentaire soit marqué avant d'appliquer la règle du CAP.", TRUE, "");
INSERT INTO reponses VALUES ("", 12, "Le jeu s'arrête sur le score de 9 à 7.", FALSE, "");
INSERT INTO reponses VALUES ("", 12, "La première équipe à atteindre 10 points remporte le match.", FALSE, "");
INSERT INTO reponses VALUES ("", 12, "La première équipe à atteindre 11 points remporte le match.", FALSE, "");

INSERT INTO questions
VALUES
  (13, "Lors d'un match en 13 points avec un CAP+1, si le score est de 12-11 à la fin du temps réglementaire.", "");

INSERT INTO reponses
VALUES ("", 13, "Il faut attendre qu'un point supplémentaire soit marqué avant d'appliquer la règle du CAP.", TRUE, "");
INSERT INTO reponses VALUES ("", 13, "La première équipe à atteindre 13 points remporte le match.", FALSE, "");
INSERT INTO reponses VALUES ("", 13, "Le jeu s'arrête sur le score de 12 à 11.", FALSE, "");
INSERT INTO reponses VALUES ("", 13, "Le match peut terminer à égalité.", FALSE, "");


INSERT INTO questions VALUES (14, "Les actions suivantes sont des exemples de bon Esprit Du Jeu :", "");

INSERT INTO reponses VALUES ("", 14, "Réagir calmement aux désaccords et aux éventuelles provocations.", TRUE, "");
INSERT INTO reponses VALUES ("", 14, "Rétracter un appel qui n'a pas eu d'incidence sur le jeu.", TRUE, "");
INSERT INTO reponses VALUES ("", 14, "Jouer plus doucement contre une équipe débutante.", FALSE, "");
INSERT INTO reponses VALUES ("", 14, "Ne jamais contredire un joueur.", FALSE, "");


INSERT INTO questions
VALUES (15, "Les actions suivantes sont contraires à l'Esprit Du Jeu et doivent être évitées :", "");

INSERT INTO reponses VALUES ("", 15, "Provoquer ou intimider son adversaire.", TRUE, "");
INSERT INTO reponses VALUES ("", 15, "Ne pas se présenter à la ronde de fin de match.", TRUE, "");
INSERT INTO reponses
VALUES ("", 15, "Marquer tous les points sur le joueur le plus faible de l'équipe adverse.", FALSE, "");
INSERT INTO reponses VALUES ("", 15, "Connaître le réglement par coeur.", FALSE, "");


INSERT INTO questions VALUES (16, "Les actions suivantes sont des exemples de bon Esprit Du Jeu :", "");

INSERT INTO reponses VALUES ("", 16,
                             "Pendant la ronde de fin de match, expliquer à un adversaire intimidant qu'il a eu une attitude négative et une mauvaise communication.",
                             TRUE, "");
INSERT INTO reponses
VALUES ("", 16, "Remplir la feuille d'Esprit Du jeu en respectant ce que l'on a dit pendant la ronde.", TRUE, "");
INSERT INTO reponses VALUES ("", 16, "Appeler les fautes depuis la touche.", FALSE, "");
INSERT INTO reponses VALUES ("", 16, "Applaudir les erreurs des adversaires.", FALSE, "");



