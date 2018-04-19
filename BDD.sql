drop table if exists candidats;
drop table if exists reponses;
drop table if exists questions;
create table questions (
  numQuestion INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  question    VARCHAR(1000)
);

create table reponses(
  numReponse     int not null AUTO_INCREMENT PRIMARY KEY,
  numeroQuestion int NOT NULL,
  reponse        VARCHAR(50),
  bonneReponse   boolean,
  CONSTRAINT fk_reponses_questions FOREIGN KEY (numeroQuestion) REFERENCES questions (numQuestion)
);

create table candidats(
  numLicense int not null primary key,
  testValide boolean default false,
  nom         VARCHAR(35),
  prenom      VARCHAR(35)
);

insert into candidats (numLicense) VALUES(090630001);



insert into questions VALUES (1,"Quelle couleur de disque est autorisée ?");

insert into reponses VALUES (1,1,"Bleu",false);
insert into reponses VALUES (2,1,"Blanc",true);
insert into reponses VALUES (3,1,"Rouge",false);
insert into reponses VALUES (4,1,"Orange",false);



insert into questions VALUES (2,"Si un joueur se déplace avec le disque en main. L'équipe adverse peut appeler quelle faute ?");

insert into reponses VALUES (5,2,"Bond",false);
insert into reponses VALUES (6,2,"Marcher",true);
insert into reponses VALUES (7,2,"Contact",false);
insert into reponses VALUES (8,2,"Pique",false);

