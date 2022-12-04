CREATE TABLE IF NOT EXISTS public.park_st
(
    id integer NOT NULL DEFAULT nextval('park_st_id_seq'::regclass),
    total integer,
    blank integer,
    ts timestamp without time zone
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.park_st
    OWNER to postgres;