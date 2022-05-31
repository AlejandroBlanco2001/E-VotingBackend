CREATE TABLE usuario (
    usuario varchar(50) NOT NULL UNIQUE,
    numeroDocu int NOT NULL UNIQUE,
    passwd varchar(50) NOT NULL UNIQUE,
    secret varchar(100),
    PRIMARY KEY (usuario),
    FOREIGN KEY (numeroDocu) REFERENCES persona(numeroDocu)
);