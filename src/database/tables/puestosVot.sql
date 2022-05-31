CREATE TABLE puesto (
    id SERIAL NOT NULL,
    nombre varchar(50) NOT NULL,
    activo BOOLEAN NOT NULL,
    latitud Decimal(8, 6) NOT NULL,
    longitud Decimal(9, 6) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO
    puesto(id, nombre, activo, latitud, longitud)
VALUES
    (
        1,
        'Puesto de votacion 1',
        false,
        -74.7870,
        10.93874
    );

INSERT INTO
    public.puesto(id, nombre, activo, latitud, longitud)
VALUES
    (
        2,
        'Puesto de votacion 2',
        false,
        -74.78667,
        10.93817
    );

INSERT INTO
    public.puesto(id, nombre, activo, latitud, longitud)
VALUES
    (
        3,
        'Puesto de votacion 3',
        false,
        -74.78642,
        10.93773
    );

INSERT INTO
    public.puesto(id, nombre, activo, latitud, longitud)
VALUES
    (
        4,
        'Puesto de votacion 4',
        false,
        -74.7862,
        10.93732
    );

INSERT INTO
    public.puesto(id, nombre, activo, latitud, longitud)
VALUES
    (
        5,
        'Puesto de votacion 5',
        false,
        -74.78598,
        10.93695
    );