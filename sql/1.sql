CREATE TABLE IF NOT EXISTS Utilisateurs (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nom varchar(150) NOT NULL,
  prenom varchar(150) NOT NULL,
  email varchar(255) NOT NULL UNIQUE,
  mot_de_passe varchar(255) NOT NULL,
  role_id int NOT NULL,
  date_creation datetime DEFAULT NOW(),
  date_modification datetime DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS Roles (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nom varchar(150) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS Salles (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nom varchar(150) NOT NULL UNIQUE,
  capacite int NOT NULL,
  date_creation datetime DEFAULT NOW(),
  date_modification datetime DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS Materiels (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nom varchar(150) NOT NULL UNIQUE,
  date_creation datetime DEFAULT NOW(),
  date_modification datetime DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS Reservations (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  salle_id int NOT NULL,
  utilisateur_id int NOT NULL,
  date_debut datetime NOT NULL,
  date_fin datetime NOT NULL,
  date_creation datetime DEFAULT NOW(),
  date_modification datetime DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS Salles_Materiels (
  salle_id int NOT NULL,
  materiel_id int NOT NULL,
  PRIMARY KEY (salle_id, materiel_id)
);

ALTER TABLE Utilisateurs ADD CONSTRAINT Utilisateurs_role_id_fk FOREIGN KEY (role_id) REFERENCES Roles (id);
ALTER TABLE Utilisateurs ADD CONSTRAINT Utilisateurs_id_fk FOREIGN KEY (id) REFERENCES Reservations (utilisateur_id);
ALTER TABLE Salles ADD CONSTRAINT Salles_id_fk FOREIGN KEY (id) REFERENCES Reservations (salle_id);
ALTER TABLE Salles ADD CONSTRAINT Salles_id_fk FOREIGN KEY (id) REFERENCES Salles_Materiels (salle_id);
ALTER TABLE Salles_Materiels ADD CONSTRAINT Salles_Materiels_materiel_id_fk FOREIGN KEY (materiel_id) REFERENCES Materiels (id);