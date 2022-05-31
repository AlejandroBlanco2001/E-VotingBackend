CREATE TABLE usuario (
    usuario varchar(50) NOT NULL UNIQUE,
    numeroDocu int NOT NULL UNIQUE,
    passwd varchar(50) NOT NULL UNIQUE,
    secret varchar(100),
    PRIMARY KEY (usuario),
    FOREIGN KEY (numeroDocu) REFERENCES persona(numeroDocu)
);

INSERT INTO
    usuario(usuario, numeroDocu, passwd, secret)
VALUES
    (
        'Juan Perez',
        123456,
        'juan123',
        'nose'
    ),
    (
        'Pedro Perez',
        123457,
        'pedro123',
        'nose'
    ),
    (
        'Maria Perez',
        123458,
        'maria123',
        'nose'
    ),
    (
        'Jose Perez',
        123459,
        'jose123',
        'nose'
    ),
    (
        'Ana Perez',
        123460,
        'ana123',
        'nose'
    );