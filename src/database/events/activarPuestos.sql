CREATE
OR REPLACE FUNCTION inicioEleccion() RETURNS trigger AS $$ BEGIN
UPDATE
    puesto
SET
    activo = true;
RETURN NEW;
END;

$$ LANGUAGE 'plpgsql';

CREATE TRIGGER eleccion_puesto_inicio_trigger
AFTER
INSERT
    ON "eleccion" FOR EACH ROW EXECUTE PROCEDURE inicioEleccion();

/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / 

CREATE
OR REPLACE FUNCTION finEleccion() RETURNS trigger AS $$ BEGIN
UPDATE
    puesto
SET
    activo = false;
RETURN NEW;
END;

$$ LANGUAGE 'plpgsql';

CREATE TRIGGER eleccion_puesto_fin_trigger
AFTER
    DELETE ON "eleccion" FOR EACH ROW EXECUTE PROCEDURE finEleccion();