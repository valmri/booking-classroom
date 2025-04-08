ALTER TABLE Reservations
ADD FOREIGN KEY (utilisateur_id) REFERENCES Utilisateurs(id);

ALTER TABLE Reservations
ADD FOREIGN KEY (salle_id) REFERENCES Salles(id);