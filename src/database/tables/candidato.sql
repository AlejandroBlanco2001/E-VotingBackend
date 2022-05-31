CREATE TABLE candidato (
    id SERIAL NOT NULL,
    nombre varchar(80) NOT NULL,
    partido VARCHAR(80) NOT NULL, 
    descripción VARCHAR(100),
    imagen VARCHAR(500) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO candidato (nombre, partido, descripción, imagen) VALUES 
(
    'Isaac Blanco',
    'Partido isaacneta',
    'Bla bla bla bla',
    'https://vot-e-backend.herokuapp.com/static/p1.jpg'
),(
    'Dylan Cantillo',
    'Partido matematicas',
    'Ble ble ble ble',
    'https://vot-e-backend.herokuapp.com/static/p2.jpg'
),(
    'Luis Caro',
    'Partido caro',
    'Bli bli bli bli',
    'https://vot-e-backend.herokuapp.com/static/p3.jpg'
),(
    'Fabian Vargas',
    'Partido junior',
    'Blo blo blo blo',
    'https://vot-e-backend.herokuapp.com/static/p4.jpg'
),(
    'German Vargas',
    'Partido miedo',
    'Blu blu blu blu',
    'https://vot-e-backend.herokuapp.com/static/p5.jpg'
);