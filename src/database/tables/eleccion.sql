CREATE TABLE eleccion(
    id SERIAL NOT NULL,
    nombre varchar(50) NOT NULL UNIQUE,
    fechaInicio TIMESTAMP NOT NULL,
    fechaFin TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);

//Hay una diferencia de 5 horas entre la hora de Colombia y la del servidor

INSERT INTO
    eleccion (nombre, fechaInicio, fechaFin)
VALUES
    (
        'Elecciones presidenciales 2022',
        '2022-05-28 15:00:00',
        '2022-05-28 15:05:00'
    )